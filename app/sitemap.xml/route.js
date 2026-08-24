export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = "https://www.bearingmanufacturers.com";

  const currentDate = new Date().toISOString();

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
      loc: `${baseUrl}/products/ball-bearing`,
      priority: 0.8,
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

    {
      loc: `${baseUrl}/products/wheel-bearing`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/wheel-bearing/wheel-bearings`,
      priority: 0.8,
      changefreq: "weekly",
    },

    {
      loc: `${baseUrl}/products/roller-bearings`,
      priority: 0.8,
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





    {
      loc: `${baseUrl}/products/wheel-bearing-hub`,
      priority: 0.8,
      changefreq: "weekly",
    },
    {
      loc: `${baseUrl}/products/wheel-bearing-hub/wheel-bearings-hub`,
      priority: 0.8,
      changefreq: "weekly",
    },



  
  ];

  const urls = staticPages
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
