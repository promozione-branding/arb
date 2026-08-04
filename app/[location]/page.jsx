import { notFound } from "next/navigation";
import { russiaLocations } from "@/lib/russiaLocations";
import { uaeLocations } from "@/lib/uaeLocations";

import RussiaLocation from "@/components/RussiaLocation";
import UAELocation from "@/components/UAELocation";

export default async function Page({ params }) {
  const { location } = await params;

  if (russiaLocations.includes(location)) {
    return <RussiaLocation />;
  }

  if (uaeLocations.includes(location)) {
    return <UAELocation />;
  }

  notFound();
}