import { useEffect, useState } from "react";
import { Optional,CampusResponse } from "./Api";
import { useSession } from "./Session";

export function useCampusData()
{
  const [session] = useSession();
  const [data, setData] = useState<Optional<CampusResponse>>(undefined);

  useEffect(() => {
    if (!!session.data)
      setData((session.data as CampusResponse));
  }, [session]);

  return [data];
}