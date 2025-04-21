import { createFileRoute } from "@tanstack/react-router";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Suspense } from "react";
import { ClusteredMarkers } from "../../components/example1/clustered-markers";

export const Route = createFileRoute("/example1/")({
  component: Example1Page,
});

function Example1Page() {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_KEY} version={"beta"}>
      <Map
        defaultCenter={{ lat: 37.498454033368, lng: 127.03229336072 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI
        className='w-screen h-screen'
      >
        <Suspense>
          <ClusteredMarkers />
        </Suspense>
      </Map>
    </APIProvider>
  );
}
