import type { FeatureCollection, Point } from "geojson";
import ky from "ky";

export type PlaceFeatureProps = {
  name: string;
  wikipedia: string;
  wikidata: string;
};

export type PlaceCollection = FeatureCollection<Point, PlaceFeatureProps>;

export async function getPlaceListFromGeojson() {
  const url = new URL("../fixture/place-list.json", import.meta.url);

  const response = await ky.get<PlaceCollection>(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch place data: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
}
