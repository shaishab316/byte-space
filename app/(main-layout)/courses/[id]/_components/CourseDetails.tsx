'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface ModuleItem {
  id: number | string;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: number | string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

export interface RatingBreakdown {
  stars: number;
  count: number;
}

export interface CourseDetailsProps {
  description?: string[];
  sneakPeekImages?: string[];
  keyPoints?: string[];
  modules?: ModuleItem[];
  progressPercent?: number;
  averageRating?: number;
  ratingBreakdown?: RatingBreakdown[];
  reviews?: ReviewItem[];
}

const DEFAULT_DESCRIPTION = [
  'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];

const DEFAULT_KEY_POINTS = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
];

const DEFAULT_MODULES: ModuleItem[] = [
  {
    id: 1,
    title: 'Module 1: Introduction to Digital Assets',
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    id: 2,
    title: 'Module 2: Design Principles for Impact',
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    id: 4,
    title: 'Module 4: User-Centric Design Strategies',
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    id: 5,
    title: 'Module 5: Interactive Media and Engagement',
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    id: 6,
    title: 'Module 6: Project Showcase and Critique',
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    id: 7,
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const DEFAULT_RATING_BREAKDOWN: RatingBreakdown[] = [
  { stars: 5, count: 720 },
  { stars: 4, count: 120 },
  { stars: 3, count: 21 },
  { stars: 2, count: 12 },
  { stars: 1, count: 16 },
];

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: 'PurePearl Studio',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: 'a year ago',
    content:
      'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!',
  },
  {
    id: 2,
    author: 'Albert Flores',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: 'a year ago',
    content:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 3,
    author: 'Cody Fisher',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: 'a year ago',
    content:
      'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    id: 4,
    author: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: 'a year ago',
    content:
      'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
];

export function CourseDetails({
  description = DEFAULT_DESCRIPTION,
  sneakPeekImages = [],
  keyPoints = DEFAULT_KEY_POINTS,
  modules = DEFAULT_MODULES,
  progressPercent = 55,
  averageRating = 4.7,
  ratingBreakdown = DEFAULT_RATING_BREAKDOWN,
  reviews = DEFAULT_REVIEWS,
}: CourseDetailsProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>(
    'about',
  );
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<
    number | 'all'
  >('all');

  const totalReviewsCount = ratingBreakdown.reduce(
    (acc, curr) => acc + curr.count,
    0,
  );

  const filteredReviews =
    selectedRatingFilter === 'all'
      ? reviews
      : reviews.filter((r) => r.rating === selectedRatingFilter);

  return (
    <div className="space-y-8 mt-10 text-text-foreground max-w-4xl mx-auto">
      {/* Navigation Tabs */}
      <div className="flex items-center gap-2">
        {(
          [
            { key: 'about', label: 'About' },
            { key: 'lessons', label: 'Lessons' },
            { key: 'reviews', label: 'Reviews' },
          ] as const
        ).map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
              activeTab === tab.key
                ? 'bg-[#C4F934] text-text-foreground font-semibold'
                : 'bg-white/10 text-text-foreground hover:bg-white/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ----------------- ABOUT TAB ----------------- */}
      {activeTab === 'about' && (
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-text-foreground">
              Description
            </h3>
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-xs text-text-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {sneakPeekImages.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-text-foreground">
                Sneak Peak
              </h3>
              <div className="grid grid-cols-5 gap-3">
                {sneakPeekImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden border border-white/5"
                  >
                    <Image
                      src={src}
                      alt={`Sneak peak ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 20vw, 15vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-base font-bold text-text-foreground">
              Key Points
            </h3>
            <ul className="space-y-2">
              {keyPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs text-text-foreground"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill="#003BE2"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'lessons' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-text-foreground">
              Explore the Modules
            </h3>
            <p className="text-xs text-text-foreground leading-relaxed">
              Immerse yourself in the course content as we break down each
              module into comprehensive lessons, providing practical insights
              and hands-on experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-text-foreground">
              Lesson List
            </h4>
            <div className="space-y-4">
              {modules.map((module) => (
                <div key={module.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C4F934] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-text-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-semibold text-text-foreground">
                      {module.title}
                    </h5>
                    <p className="text-[11px] text-text-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-text-foreground">
              Lesson Content
            </h4>
            <p className="text-xs text-text-foreground leading-relaxed">
              Engage with each lesson through captivating video content,
              detailed textual explanations, and interactive elements. Download
              resources, complete assignments, and test your understanding with
              quizzes.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-text-foreground">
              Lesson Progress Tracking
            </h4>
            <p className="text-xs text-text-foreground leading-relaxed">
              Witness your growth as you complete lessons, with an intuitive
              progress tracking feature guiding you through your learning
              journey.
            </p>
            <div className="bg-white text-text-foreground p-4 rounded-xl max-w-sm space-y-2">
              <span className="text-[10px] font-semibold text-text-foreground uppercase tracking-wide">
                Learning Progress
              </span>
              <div className="text-2xl font-bold">{progressPercent}%</div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#C4F934] h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-text-foreground">
              What Learners Are Saying
            </h3>
            <p className="text-xs text-text-foreground leading-relaxed">
              Discover what our learners have to say about their experience with
              &quot;Build Digital Assets: A Comprehensive Guide.&quot; Read
              reviews and ratings from individuals who have embarked on the
              transformative journey of mastering digital asset creation.
            </p>
          </div>

          <div className="bg-white text-text-foreground p-5 rounded-2xl max-w-md flex items-center gap-6">
            <div className="bg-[#C4F934] rounded-xl p-4 text-center min-w-[90px]">
              <span className="text-xs font-medium text-text-foreground block">
                Ratings
              </span>
              <span className="text-3xl font-extrabold text-text-foreground">
                {averageRating.toFixed(1)}
              </span>
            </div>

            <div className="flex-1 space-y-1.5 text-xs">
              {ratingBreakdown.map((item) => {
                const percentage =
                  totalReviewsCount > 0
                    ? (item.count / totalReviewsCount) * 100
                    : 0;
                return (
                  <div key={item.stars} className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="bg-[#C4F934] h-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="flex text-amber-400 text-[10px]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < item.stars ? '★' : '☆'}</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-text-foreground ml-auto">
                      {item.count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-text-foreground">
              Individual Reviews:
            </h4>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setSelectedRatingFilter('all')}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedRatingFilter === 'all'
                    ? 'bg-[#C4F934] text-text-foreground font-semibold'
                    : 'bg-white/10 text-text-foreground hover:bg-white/20'
                }`}
              >
                All rating
              </button>
              {[5, 4, 3, 2, 1].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setSelectedRatingFilter(star)}
                  className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-colors ${
                    selectedRatingFilter === star
                      ? 'bg-[#C4F934] text-text-foreground font-semibold'
                      : 'bg-white/10 text-text-foreground hover:bg-white/20'
                  }`}
                >
                  <span>★</span>
                  <span>{star}</span>
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="border border-white/10 rounded-xl p-4 bg-white/5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-text-foreground">
                          {review.author}
                        </h5>
                        <p className="text-[10px] text-text-foreground">
                          {review.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-text-foreground">
                      {review.date}
                    </span>
                  </div>

                  <div className="flex text-amber-400 text-xs">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                    ))}
                  </div>

                  <p className="text-xs text-text-foreground leading-relaxed">
                    {review.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
