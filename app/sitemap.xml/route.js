import { russiaLocations } from "@/lib/russiaLocations";
import { uaeLocations } from "@/lib/uaeLocations";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://www.bearingmanufacturers.com";

  const currentDate = new Date().toISOString();

  // =========================
  // STATIC PAGES
  // =========================

  const staticPages = [
    {
      loc: `${baseUrl}/`,
      priority: 1.0,
      changefreq: "daily",
    },
    {
      loc: `${baseUrl}/about-us`,
      priority: 0.8,
      changefreq: "yearly",
    },
    {
      loc: `${baseUrl}/our-journey`,
      priority: 0.8,
      changefreq: "yearly",
    },
    {
      loc: `${baseUrl}/our-core-values`,
      priority: 0.8,
      changefreq: "yearly",
    },
    {
      loc: `${baseUrl}/contact`,
      priority: 0.8,
      changefreq: "yearly",
    },
    {
      loc: `${baseUrl}/our-blogs`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/brake-lining`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/clutch-plates`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/grease`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/pillow-blocks-units`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      priority: 0.5,
      changefreq: "yearly",
    },

    // =========================
    // BALL BEARINGS
    // =========================

    {
      loc: `${baseUrl}/products/ball-bearing`,
      priority: 0.9,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/ball-bearing/deep-groove-ball-bearing`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/ball-bearing/double-row-angular-contact-ball-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/ball-bearing/four-point-contact-ball-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/ball-bearing/self-aligning-ball-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/ball-bearing/thrust-ball-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },

    // =========================
    // WHEEL BEARINGS
    // =========================

    {
      loc: `${baseUrl}/products/wheel-bearing`,
      priority: 0.9,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/wheel-bearing/wheel-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },

    // =========================
    // ROLLER BEARINGS
    // =========================

    {
      loc: `${baseUrl}/products/roller-bearings`,
      priority: 0.9,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/roller-bearings/cylindrical-roller-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/roller-bearings/tapered-roller-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/roller-bearings/taper-roller-bearings-inch-series`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/roller-bearings/spherical-roller-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/roller-bearings/spherical-roller-thrust-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/roller-bearings/needle-roller-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },

    // =========================
    // WHEEL BEARING HUB
    // =========================

    {
      loc: `${baseUrl}/products/wheel-bearing-hub`,
      priority: 0.9,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/wheel-bearing-hub/wheel-bearings-hub`,
      priority: 0.8,
      changefreq: "weekly",
    },
  ];

  // =========================
  // STATIC URL XML
  // =========================

  const staticUrls = staticPages
    .map(
      (page) => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("");

  // =========================
  // RUSSIA LOCATIONS
  // =========================

  const russiaUrls = russiaLocations
    .map(
      (location) => `
  <url>
    <loc>${baseUrl}/${location}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
    )
    .join("");

  // =========================
  // UAE LOCATIONS
  // =========================

  const uaeUrls = uaeLocations
    .map(
      (location) => `
  <url>
    <loc>${baseUrl}/${location}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
    )
    .join("");

  // =========================
  // FINAL SITEMAP
  // =========================

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${staticUrls}

${russiaUrls}

${uaeUrls}

</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
