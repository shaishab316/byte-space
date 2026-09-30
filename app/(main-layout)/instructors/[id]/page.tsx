import { InstructorView } from './_components/InstructorView';

interface InstructorPageProps {
  params: Promise<{ id: string }>;
}

export default async function InstructorPage({ params }: InstructorPageProps) {
  const { id } = await params;

  return <InstructorView instructorId={id} />;
}
