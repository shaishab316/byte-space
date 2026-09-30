import { type NextRequest } from 'next/server';
import { type QueryFilter, type SortOrder } from 'mongoose';
import { connectToDatabase } from '@/lib/db/connect';
import {
  CategoryModel,
  CourseModel,
  InstructorModel,
  type CourseDocument,
} from '@/lib/models';
import { serializeCourse, type PopulatedCourse } from '@/lib/serializers';

const DEFAULT_LIMIT = 6;
const MAX_LIMIT = 24;

const sortMap: Record<string, Record<string, SortOrder>> = {
  relevance: { createdAt: 1, _id: 1 },
  newest: { createdAt: -1, _id: -1 },
  rating: { rating: -1, _id: 1 },
  'price-asc': { priceValue: 1, _id: 1 },
  'price-desc': { priceValue: -1, _id: 1 },
};

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const toPositiveInt = (value: string | null, fallback: number) => {
  const parsed = Number(value);

  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
};

export async function GET(request: NextRequest) {
  await connectToDatabase();

  const params = request.nextUrl.searchParams;
  const q = params.get('q')?.trim() ?? '';
  const category = params.get('category')?.trim() ?? '';
  const level = params.get('level')?.trim() ?? '';
  const price = params.get('price')?.trim() ?? '';
  const sort = params.get('sort')?.trim() ?? 'relevance';
  const instructorSlug = params.get('instructor')?.trim() ?? '';
  const page = toPositiveInt(params.get('page'), 1);
  const limit = Math.min(
    toPositiveInt(params.get('limit'), DEFAULT_LIMIT),
    MAX_LIMIT,
  );

  const [categories, levels] = await Promise.all([
    CategoryModel.find().sort({ order: 1 }).lean(),
    CourseModel.distinct('level'),
  ]);

  const filter: QueryFilter<CourseDocument> = {};
  let matchNothing = false;

  if (level) {
    filter.level = level;
  }

  if (price === 'under-25') {
    filter.priceValue = { $lt: 25 };
  } else if (price === '25-40') {
    filter.priceValue = { $gte: 25, $lte: 40 };
  } else if (price === 'over-40') {
    filter.priceValue = { $gt: 40 };
  }

  if (category && category !== 'Featured') {
    const categoryDoc = await CategoryModel.findOne({ name: category }).lean();

    if (categoryDoc) {
      filter.category = categoryDoc._id;
    } else {
      matchNothing = true;
    }
  }

  if (instructorSlug) {
    const instructor = await InstructorModel.findOne({
      slug: instructorSlug,
    }).lean();

    if (instructor) {
      filter.instructor = instructor._id;
    } else {
      matchNothing = true;
    }
  }

  if (q) {
    const pattern = new RegExp(escapeRegExp(q), 'i');
    const instructorIds = await InstructorModel.find({
      name: pattern,
    }).distinct('_id');

    filter.$or = [{ title: pattern }, { instructor: { $in: instructorIds } }];
  }

  const emptyResponse = {
    courses: [],
    categories: categories.map((item) => item.name),
    levels: levels.sort(),
    pagination: { page, limit, total: 0, totalPages: 0 },
  };

  if (matchNothing) {
    return Response.json(emptyResponse);
  }

  const [courses, total] = await Promise.all([
    CourseModel.find(filter)
      .populate<{ instructor: PopulatedCourse['instructor'] }>('instructor')
      .sort(sortMap[sort] ?? sortMap.relevance)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(),
    CourseModel.countDocuments(filter),
  ]);

  return Response.json({
    courses: courses.map((course) =>
      serializeCourse(course as PopulatedCourse),
    ),
    categories: categories.map((item) => item.name),
    levels: levels.sort(),
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}
