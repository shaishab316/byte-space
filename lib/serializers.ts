import type { Types } from 'mongoose';
import type { CourseDocument } from '@/lib/models/course';
import type { InstructorDocument } from '@/lib/models/instructor';
import type {
  Course,
  CourseDetail,
  CourseInstructor,
  InstructorProfile,
} from '@/lib/types';

export type PopulatedInstructor = InstructorDocument & { _id: Types.ObjectId };

export type PopulatedCourse = CourseDocument & {
  _id: Types.ObjectId;
  instructor: PopulatedInstructor;
};

const toInstructorRef = (
  instructor: PopulatedInstructor,
): CourseInstructor => ({
  id: instructor.slug,
  name: instructor.name,
});

export function serializeCourse(course: PopulatedCourse): Course {
  return {
    id: course._id.toString(),
    title: course.title,
    instructor: toInstructorRef(course.instructor),
    rating: course.rating,
    price: course.price,
    period: course.period,
    lessons: course.lessons,
    duration: course.duration,
    comments: course.comments,
    level: course.level,
    image: course.image,
    enrolledAvatars: course.enrolledAvatars ?? [],
    enrolledCount: course.enrolledCount || undefined,
  };
}

export function serializeCourseDetail(course: PopulatedCourse): CourseDetail {
  return {
    ...serializeCourse(course),
    subtitle: course.subtitle,
    instructor: {
      id: course.instructor.slug,
      name: course.instructor.name,
      title: course.instructor.title,
      avatarUrl: course.instructor.avatarUrl,
    },
    previewLessons: course.previewLessons.map((lesson) => ({
      id: lesson.id,
      order: lesson.order,
      title: lesson.title,
      duration: lesson.duration,
    })),
    priceValue: course.priceValue,
    totalLessons: course.totalLessons,
    totalHours: course.totalHours,
    reviewCount: course.reviewCount,
    studentCount: course.studentCount,
    features: course.features,
    description: course.description,
    keyPoints: course.keyPoints,
    sneakPeekImages: course.sneakPeekImages,
    modules: course.modules.map((module) => ({
      id: module.id,
      title: module.title,
      description: module.description,
    })),
    progressPercent: course.progressPercent,
    averageRating: course.averageRating,
    ratingBreakdown: course.ratingBreakdown.map((item) => ({
      stars: item.stars,
      count: item.count,
    })),
    reviews: course.reviews.map((review) => ({
      id: review.id,
      author: review.author,
      role: review.role,
      avatar: review.avatar,
      rating: review.rating,
      date: review.date,
      content: review.content,
    })),
  };
}

export function serializeInstructor(
  instructor: PopulatedInstructor,
): InstructorProfile {
  return {
    id: instructor.slug,
    name: instructor.name,
    title: instructor.title,
    avatarUrl: instructor.avatarUrl,
    bio: instructor.bio,
    products: instructor.products,
    followers: instructor.followers,
  };
}
