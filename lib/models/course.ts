import {
  Schema,
  model,
  models,
  type InferSchemaType,
  type Model,
} from 'mongoose';

const lessonPreviewSchema = new Schema(
  {
    id: { type: String, required: true },
    order: { type: Number, required: true },
    title: { type: String, required: true },
    duration: { type: String, required: true },
  },
  { _id: false },
);

const moduleSchema = new Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false },
);

const ratingBreakdownSchema = new Schema(
  {
    stars: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  { _id: false },
);

const reviewSchema = new Schema(
  {
    id: { type: Number, required: true },
    author: { type: String, required: true },
    role: { type: String, required: true },
    avatar: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: String, required: true },
    content: { type: String, required: true },
  },
  { _id: false },
);

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: 'Instructor',
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    rating: { type: Number, required: true },
    price: { type: String, required: true },
    period: { type: String, required: true },
    lessons: { type: String, required: true },
    duration: { type: String, required: true },
    comments: { type: String, required: true },
    level: { type: String, required: true },
    image: { type: String, required: true },
    enrolledAvatars: { type: [String], default: [] },
    enrolledCount: { type: String, default: '' },
    subtitle: { type: String, required: true },
    priceValue: { type: Number, required: true },
    totalLessons: { type: Number, required: true },
    totalHours: { type: Number, required: true },
    reviewCount: { type: Number, required: true },
    studentCount: { type: Number, required: true },
    features: { type: [String], default: [] },
    description: { type: [String], default: [] },
    keyPoints: { type: [String], default: [] },
    sneakPeekImages: { type: [String], default: [] },
    previewLessons: { type: [lessonPreviewSchema], default: [] },
    modules: { type: [moduleSchema], default: [] },
    progressPercent: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    ratingBreakdown: { type: [ratingBreakdownSchema], default: [] },
    reviews: { type: [reviewSchema], default: [] },
  },
  { timestamps: true },
);

export type CourseDocument = InferSchemaType<typeof courseSchema>;

export const CourseModel =
  (models.Course as Model<CourseDocument>) ??
  model<CourseDocument>('Course', courseSchema);
