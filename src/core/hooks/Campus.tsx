import { useSession } from "./Session";
import { useEffect, useState } from "react";
import { Optional, CampusWithCourseResponse } from "./Api";

export function useCampusData()
{
  const [session] = useSession();
  const [data, setData] = useState<Optional<CampusWithCourseResponse>>(undefined);

  useEffect(() => {
    if (!!session.data)
      setData((session.data as CampusWithCourseResponse));
  }, [session]);

  return [data];
}