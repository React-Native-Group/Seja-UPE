import { useGlobal } from "./Global";
import { useRequest, useAuthorizedRequest, WebClientCallback, WebClientResponse } from "./Request";

export type ApiDefaultResponse<T> = {
  timestamp: number;
  path: string;
  error: boolean;
  status: number;
  code: string;
  response: T;
}

export type AuthorizeResponse = {
  bearer: string,
  payload: {
    iss?: string,
    azp?: string,
    aud?: string,
    sub?: string,
    email?: string,
    email_verified?: true,
    at_hash?: string,
    name?: string,
    picture?: string,
    given_name?: string,
    family_name?: string,
    locale?: string,
    iat?: number,
    exp?: number
  }
}

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
  const [ data, setData ] = useGlobal();

  function onResponse(success: boolean, response: WebClientResponse<ApiDefaultResponse<AuthorizeResponse>>){
    if (success)
      setData({ ...data, session: response.data.response.bearer, user: response.data.response.payload });
    event(success, response);
  }

  const { request, ...props } = useRequest<ApiDefaultResponse<AuthorizeResponse>>(onResponse, false);

  const run = (idToken: string) => {
    request('POST', {
      url: '/auth/authorize',
      body: { idToken }
    });
  }

  return { ...props, run };
}

export function useCampus(event: WebClientCallback<ApiDefaultResponse<CampusResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<CampusResponse>>(event, true);

  const run = () => request('GET', { url: '/campus' });

  return { ...props, run };
}

export function useCampusRef(event: WebClientCallback<ApiDefaultResponse<CampusRefResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<CampusRefResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) 
  });

  return { ...props, run };
}

export function useCampusCourses(event: WebClientCallback<ApiDefaultResponse<CampusCoursesResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<CampusCoursesResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/courses'
  });

  return { ...props, run };
}

export function useCampusEvents(event: WebClientCallback<ApiDefaultResponse<CampusEventsResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<CampusEventsResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/events'
  });

  return { ...props, run };
}

export function useCampusContacts(event: WebClientCallback<ApiDefaultResponse<CampusContactsResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<CampusContactsResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/contacts'
  });

  return { ...props, run };
}

export function useRatingSurvey(event: WebClientCallback<ApiDefaultResponse<RatingResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<RatingResponse>>(event, false);

  const run = (note: number) => request('POST', { 
    url: '/evaluation/rating/survey' + encodeURIComponent(note)
  });

  return { ...props, run };
}

export function usePopularityCourse(event: WebClientCallback<ApiDefaultResponse<PopularityResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<PopularityResponse>>(event, false);

  const run = (courseId: number, note: 'like' | 'dislike') => request('POST', { 
    url: '/evaluation/popularity/course',
    body: { courseId, value: note }
  });

  return { ...props, run };
}

export function useProfessors(event: WebClientCallback<ApiDefaultResponse<ProfessorsResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<ProfessorsResponse>>(event, true);

  const run = () => request('GET', { url: '/professors' });

  return { ...props, run };
}

export function useProfessorRef(event: WebClientCallback<ApiDefaultResponse<ProfessorRefResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<ProfessorRefResponse>>(event, true);

  const run = (professorId: number) => request('GET', { 
    url: '/professors/' + encodeURIComponent(professorId) 
  });

  return { ...props, run };
}

export function useCourses(event: WebClientCallback<ApiDefaultResponse<CoursesResponse>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<CoursesResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/courses/campus/' + encodeURIComponent(campusId) + '/all' 
  });

  return { ...props, run };
}

export function useCourseProfessors(event: WebClientCallback<ApiDefaultResponse<CourseProfessor>>){
  const { request, ...props } = useAuthorizedRequest<ApiDefaultResponse<CourseProfessor>>(event, true);

  const run = (courseId: number) => request('GET', { 
    url: '/courses/' + encodeURIComponent(courseId) + '/professors' 
  });

  return { ...props, run };
}
