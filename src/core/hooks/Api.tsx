import { useSession } from "./Session";
import { useRequest, useAuthorizedRequest, WebClientCallback, WebClientResponse } from "./Request";

export type Optional<T> = T | undefined;

export type ApiDefaultResponse<T> = {
  timestamp: number;
  path: string;
  error: boolean;
  status: number;
  code: string;
  response: T;
}

export type ApiResponse<T> = WebClientResponse<ApiDefaultResponse<T>>;

export type ApiEventResponse<T> = WebClientCallback<ApiDefaultResponse<T>>;

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

export type CampusResponse = {

}

export type CampusRefResponse = {

}

export type CampusCoursesResponse = {

}

export type CampusEventsResponse = {

}

export type CampusContactsResponse = {

}

export type RatingResponse = {

}

export type PopularityResponse = {

}

export type ProfessorsResponse = {

}

export type ProfessorRefResponse = {

}

export type CoursesResponse = {

}

export type CourseProfessorsResponse = {

}

export type PopularityNote = 'like' | 'dislike';

export type AuthorizeHook         = [Optional<ApiResponse<AuthorizeResponse>>,        Optional<boolean>, (idToken: string)                        => void ];
export type CampusHook            = [Optional<ApiResponse<CampusResponse>>,           Optional<boolean>, ()                                       => void ];
export type CampusRefHook         = [Optional<ApiResponse<CampusRefResponse>>,        Optional<boolean>, (campusId: number)                       => void ];
export type CampusCoursesHook     = [Optional<ApiResponse<CampusCoursesResponse>>,    Optional<boolean>, (campusId: number)                       => void ];
export type CampusEventsHook      = [Optional<ApiResponse<CampusEventsResponse>>,     Optional<boolean>, (campusId: number)                       => void ];
export type CampusContactsHook    = [Optional<ApiResponse<CampusContactsResponse>>,   Optional<boolean>, (campusId: number)                       => void ];
export type RatingSurveyHook      = [Optional<ApiResponse<RatingResponse>>,           Optional<boolean>, (note: number)                           => void ];
export type PopularityCourseHook  = [Optional<ApiResponse<PopularityResponse>>,       Optional<boolean>, (courseId: number, note: PopularityNote) => void ];
export type ProfessorsHook        = [Optional<ApiResponse<ProfessorsResponse>>,       Optional<boolean>, ()                                       => void ];
export type ProfessorRefHook      = [Optional<ApiResponse<ProfessorRefResponse>>,     Optional<boolean>, (professorId: number)                    => void ];
export type CoursesHook           = [Optional<ApiResponse<CoursesResponse>>,          Optional<boolean>, (campusId: number)                       => void ];
export type CourseProfessorsHook  = [Optional<ApiResponse<CourseProfessorsResponse>>, Optional<boolean>, (courseId: number)                       => void ];


export function useAuthorize(event: ApiEventResponse<AuthorizeResponse>): AuthorizeHook
{
  const [session, setSession, authorize] = useSession();

  function onResponse(success: boolean, response: WebClientResponse<ApiDefaultResponse<AuthorizeResponse>>){
    if (success){
      setSession({ ...session, user: response.data.response.payload });
      authorize(response.data.response.bearer);
    }
    event(success, response);
  }

  const { response, success, request } = useRequest<ApiDefaultResponse<AuthorizeResponse>>(onResponse, false);

  const run = (idToken: string) => {
    request('POST', {
      url: '/auth/authorize',
      body: { idToken }
    });
  }

  return [ response, success, run ];
}

export function useCampus(event: ApiEventResponse<CampusResponse>): CampusHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<CampusResponse>>(event, true);

  const run = () => request('GET', { url: '/campus' });

  return [ response, success, run ];
}

export function useCampusRef(event: ApiEventResponse<CampusRefResponse>): CampusRefHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<CampusRefResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) 
  });

  return [ response, success, run ];
}

export function useCampusCourses(event: ApiEventResponse<CampusCoursesResponse>): CampusCoursesHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<CampusCoursesResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/courses'
  });

  return [ response, success, run ];
}

export function useCampusEvents(event: ApiEventResponse<CampusEventsResponse>): CampusEventsHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<CampusEventsResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/events'
  });

  return [ response, success, run ];
}

export function useCampusContacts(event: ApiEventResponse<CampusContactsResponse>): CampusContactsHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<CampusContactsResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/campus/' + encodeURIComponent(campusId) + '/contacts'
  });

  return [ response, success, run ];
}

export function useRatingSurvey(event: ApiEventResponse<RatingResponse>): RatingSurveyHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<RatingResponse>>(event, false);

  const run = (note: number) => request('POST', { 
    url: '/evaluation/rating/survey' + encodeURIComponent(note)
  });

  return [ response, success, run ];
}

export function usePopularityCourse(event: ApiEventResponse<PopularityResponse>): PopularityCourseHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<PopularityResponse>>(event, false);

  const run = (courseId: number, note: 'like' | 'dislike') => request('POST', { 
    url: '/evaluation/popularity/course',
    body: { courseId, value: note }
  });

  return [ response, success, run ];
}

export function useProfessors(event: ApiEventResponse<ProfessorsResponse>): ProfessorsHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<ProfessorsResponse>>(event, true);

  const run = () => request('GET', { url: '/professors' });

  return [ response, success, run ];
}

export function useProfessorRef(event: ApiEventResponse<ProfessorRefResponse>): ProfessorRefHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<ProfessorRefResponse>>(event, true);

  const run = (professorId: number) => request('GET', { 
    url: '/professors/' + encodeURIComponent(professorId) 
  });

  return [ response, success, run ];
}

export function useCourses(event: ApiEventResponse<CoursesResponse>): CoursesHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<CoursesResponse>>(event, true);

  const run = (campusId: number) => request('GET', { 
    url: '/courses/campus/' + encodeURIComponent(campusId) + '/all' 
  });

  return [ response, success, run ];
}

export function useCourseProfessors(event: ApiEventResponse<CourseProfessorsResponse>): CourseProfessorsHook
{
  const { response, success, request } = useAuthorizedRequest<ApiDefaultResponse<CourseProfessorsResponse>>(event, true);

  const run = (courseId: number) => request('GET', { 
    url: '/courses/' + encodeURIComponent(courseId) + '/professors' 
  });

  return [ response, success, run ];
}
