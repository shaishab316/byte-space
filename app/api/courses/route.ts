import { getCourses } from '@/lib/data/courses';

export async function GET() {
  return Response.json(getCourses());
}
