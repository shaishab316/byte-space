import type { InstructorProfile } from '@/lib/types';

const instructor: Omit<InstructorProfile, 'id'> = {
  name: 'PurePearl Studio',
  title: 'Passionate UI/UX, Web designer',
  avatarUrl:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80',
  bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  products: 3,
  followers: 12,
};

export function getInstructor(id: string): InstructorProfile {
  return { id, ...instructor };
}
