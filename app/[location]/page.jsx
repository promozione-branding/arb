import { notFound } from "next/navigation";
import { russiaLocations } from "@/lib/russiaLocations";
import { uaeLocations } from "@/lib/uaeLocations";

import RussiaLocation from "@/components/RussiaLocation";
import UAELocation from "@/components/UAELocation";
import LatinAmerica from "@/app/ball-bearing-in-latin-countries/LatinAmerica";
import { latinCountriesLocations } from "@/lib/latinCountriesLocations";

export default async function Page({ params }) {
  const { location } = await params;
  console.log(location)

  if (russiaLocations.includes(location)) {
    return <RussiaLocation />;
  } 

  if (uaeLocations.includes(location)) {
    return <UAELocation />;
  }
  
  if (latinCountriesLocations.includes(location)) {
    return <LatinAmerica />;
  }

  notFound();
}