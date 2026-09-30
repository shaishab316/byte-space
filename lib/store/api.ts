import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  CourseDetail,
  CoursesResponse,
  InstructorProfile,
} from '@/lib/types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCourses: builder.query<CoursesResponse, void>({
      query: () => '/courses',
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
