import { useRequest, WebClientCallback } from "./Request";

export type ApiDefaultResponse<T> = {
  timestamp: number;
  path: string;
  error: boolean;
  status: number;
  code: string;
  response: T;
}

export type AuthorizeResponse = {}

export type CampusResponse = {}

export type CampusRefResponse = {}

export type CampusCoursesResponse = {}

export type CampusEventsResponse = {}

export type CampusContactsResponse = {}

export type RatingResponse = {}

export type PopularityResponse = {}

export type ProfessorsResponse = {}

export type ProfessorRefResponse = {}

export type CoursesResponse = {}

export type CourseProfessor = {}


export function useAuthorize(event: WebClientCallback<ApiDefaultResponse<AuthorizeResponse>>)
{
  const { request, ...props } = useRequest<ApiDefaultResponse<AuthorizeResponse>>(event, false);

  const run = (idToken: string) => request('POST', {
    url: '/auth/authorize',
    body: { idToken }
  });

  return { ...props, run };
}

export function useCampus(event: WebClientCallback<ApiDefaultResponse<CampusResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<CampusResponse>>(event, true);

  const run = () => request('GET', { url: '/campus' });

  return { ...props, run };
}

export function useCampusRef(event: WebClientCallback<ApiDefaultResponse<CampusRefResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<CampusRefResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) 
  });

  return { ...props, run };
}

export function useCampusCourses(event: WebClientCallback<ApiDefaultResponse<CampusCoursesResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<CampusCoursesResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/courses'
  });

  return { ...props, run };
}

export function useCampusEvents(event: WebClientCallback<ApiDefaultResponse<CampusEventsResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<CampusEventsResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/events'
  });

  return { ...props, run };
}

export function useCampusContacts(event: WebClientCallback<ApiDefaultResponse<CampusContactsResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<CampusContactsResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/contacts'
  });

  return { ...props, run };
}

export function useRatingSurvey(event: WebClientCallback<ApiDefaultResponse<RatingResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<RatingResponse>>(event, false);

  const run = (note: number) => request('POST', { 
    url: '/evaluation/rating/survey' + encodeURIComponent(note)
  });

  return { ...props, run };
}

export function usePopularityCourse(event: WebClientCallback<ApiDefaultResponse<PopularityResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<PopularityResponse>>(event, false);

  const run = (courseId: number, note: 'like' | 'dislike') => request('POST', { 
    url: '/evaluation/popularity/course',
    body: { courseId, value: note }
  });

  return { ...props, run };
}

export function useProfessors(event: WebClientCallback<ApiDefaultResponse<ProfessorsResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<ProfessorsResponse>>(event, true);

  const run = () => request('GET', { url: '/professors' });

  return { ...props, run };
}

export function useProfessorRef(event: WebClientCallback<ApiDefaultResponse<ProfessorRefResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<ProfessorRefResponse>>(event, true);

  const run = (professorId: number) => request('GET', { 
    url: '/professors/' + encodeURIComponent(professorId) 
  });

  return { ...props, run };
}

export function useCourses(event: WebClientCallback<ApiDefaultResponse<CoursesResponse>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<CoursesResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/courses/campus/' + encodeURIComponent(campusId) + '/all' 
  });

  return { ...props, run };
}

export function useCourseProfessors(event: WebClientCallback<ApiDefaultResponse<CourseProfessor>>){
  const { request, ...props } = useRequest<ApiDefaultResponse<CourseProfessor>>(event, true);

  const run = (courseId: number) => request('GET', { 
    url: '/courses/' + encodeURIComponent(courseId) + '/professors' 
  });

  return { ...props, run };
}
