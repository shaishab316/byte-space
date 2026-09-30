import { CoursePageView } from './_components/CoursePageView';

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;

  return <CoursePageView courseId={id} />;
}
