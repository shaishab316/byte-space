import { Schema, model, models, type InferSchemaType, type Model } from 'mongoose';

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  order: { type: Number, required: true },
});

export type CategoryDocument = InferSchemaType<typeof categorySchema>;

export const CategoryModel =
  (models.Category as Model<CategoryDocument>) ??
  model<CategoryDocument>('Category', categorySchema);
