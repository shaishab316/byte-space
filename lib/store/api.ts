import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CourseDetail,
  CoursesResponse,
  InstructorProfile,
} from '@/lib/types';

export interface CoursesQueryArgs {
  q?: string;
  category?: string;
  level?: string;
  price?: string;
  sort?: string;
  page?: number;
  limit?: number;
  instructor?: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCourses: builder.query<CoursesResponse, CoursesQueryArgs | void>({
      query: (args) => ({ url: '/courses', params: args ?? {} }),
    }),
    getCourse: builder.query<CourseDetail, string>({
      query: (id) => `/courses/${id}`,
    }),
    getInstructor: builder.query<InstructorProfile, string>({
      query: (id) => `/instructors/${id}`,
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseQuery,
  useGetInstructorQuery,
} = api;
