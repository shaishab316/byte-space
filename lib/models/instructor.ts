import { Schema, model, models, type InferSchemaType, type Model } from 'mongoose';

const instructorSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    bio: { type: String, required: true },
    products: { type: Number, default: 0 },
    followers: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export type InstructorDocument = InferSchemaType<typeof instructorSchema>;

export const InstructorModel =
  (models.Instructor as Model<InstructorDocument>) ??
  model<InstructorDocument>('Instructor', instructorSchema);
