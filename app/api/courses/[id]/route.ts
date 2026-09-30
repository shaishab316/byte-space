import { isValidObjectId } from 'mongoose';
import { connectToDatabase } from '@/lib/db/connect';
import { CourseModel } from '@/lib/models';
import { serializeCourseDetail, type PopulatedCourse } from '@/lib/serializers';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!isValidObjectId(id)) {
    return Response.json({ message: 'Course not found' }, { status: 404 });
  }

  await connectToDatabase();

  const course = await CourseModel.findById(id)
    .populate<{ instructor: PopulatedCourse['instructor'] }>('instructor')
    .lean();

  if (!course) {
    return Response.json({ message: 'Course not found' }, { status: 404 });
  }

  return Response.json(serializeCourseDetail(course as PopulatedCourse));
}
