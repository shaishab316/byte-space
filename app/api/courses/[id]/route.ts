import { getCourseDetail } from '@/lib/data/courses';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const course = getCourseDetail(id);

  if (!course) {
    return Response.json({ message: 'Course not found' }, { status: 404 });
  }

  return Response.json(course);
}
