import { connectToDatabase } from '@/lib/db/connect';
import { InstructorModel } from '@/lib/models';
import {
  serializeInstructor,
  type PopulatedInstructor,
} from '@/lib/serializers';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  await connectToDatabase();

  const instructor = await InstructorModel.findOne({ slug: id }).lean();

  if (!instructor) {
    return Response.json({ message: 'Instructor not found' }, { status: 404 });
  }

  return Response.json(
    serializeInstructor(instructor as PopulatedInstructor),
  );
}
