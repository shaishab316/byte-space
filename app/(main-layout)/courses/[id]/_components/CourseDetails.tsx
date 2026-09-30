'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@/components/icons';
import { StarRating } from '@/components/ui/StarRating';
import type {
  ModuleItem,
  RatingBreakdown,
  ReviewItem,
} from '@/lib/types';

interface CourseDetailsProps {
  description: string[];
  sneakPeekImages: string[];
  keyPoints: string[];
  modules: ModuleItem[];
  progressPercent: number;
  averageRating: number;
  ratingBreakdown: RatingBreakdown[];
  reviews: ReviewItem[];
}

const tabs = [
  { key: 'about', label: 'About' },
  { key: 'lessons', label: 'Lessons' },
  { key: 'reviews', label: 'Reviews' },
] as const;

const ratingFilters: (number | 'all')[] = ['all', 5, 4, 3, 2, 1];

export function CourseDetails({
  description,
  sneakPeekImages,
  keyPoints,
  modules,
  progressPercent,
  averageRating,
  ratingBreakdown,
  reviews,
}: CourseDetailsProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>(
    'about',
  );
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<
    number | 'all'
  >('all');

  const totalReviewsCount = ratingBreakdown.reduce(
    (total, item) => total + item.count,
    0,
  );

  const filteredReviews =
    selectedRatingFilter === 'all'
      ? reviews
      : reviews.filter((review) => review.rating === selectedRatingFilter);

  return (
    <div className="space-y-8 mt-10 text-text-foreground max-w-4xl mx-auto">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
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
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {sneakPeekImages.map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden border border-white/5"
                  >
                    <Image
                      src={src}
                      alt={`Sneak peak ${index + 1}`}
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
              {keyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-xs text-text-foreground"
                >
                  <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
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
                <div key={module.id} className="flex items-start gap-3 sm:gap-4">
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

          <div className="bg-white text-text-foreground p-5 rounded-2xl max-w-md flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
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
                    <StarRating
                      rating={item.stars}
                      className="flex text-amber-400 text-[10px]"
                    />
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
              {ratingFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedRatingFilter(filter)}
                  className={`${
                    filter === 'all' ? 'px-4' : 'px-3'
                  } py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-colors ${
                    selectedRatingFilter === filter
                      ? 'bg-[#C4F934] text-text-foreground font-semibold'
                      : 'bg-white/10 text-text-foreground hover:bg-white/20'
                  }`}
                >
                  {filter === 'all' ? (
                    'All rating'
                  ) : (
                    <>
                      <span>★</span>
                      <span>{filter}</span>
                    </>
                  )}
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

                  <StarRating
                    rating={review.rating}
                    className="flex text-amber-400 text-xs"
                  />

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
