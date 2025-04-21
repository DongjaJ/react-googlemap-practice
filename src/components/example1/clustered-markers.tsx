import { getPlaceListFromGeojson } from "@/service/get-place-list";
import { useSuspenseQuery } from "@tanstack/react-query";

export const ClusteredMarkers = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["place-list"],
    queryFn: getPlaceListFromGeojson,
  });

  console.log("data", data);

  return <></>;
};
