import prisma from "@/prisma";

const EXTERNAL_DATA_URL = "https://maasta.in";

const Sitemap = () => {
  // This function will be empty, as it will never be executed
};

export const getServerSideProps = async ({ res }: any) => {
  const userdata = await prisma.user.findMany();

  const productData = await prisma.event.findMany();

  const staticPages = [
    `${EXTERNAL_DATA_URL}`,
    `${EXTERNAL_DATA_URL}/about`,
    `${EXTERNAL_DATA_URL}/contests`,
    `${EXTERNAL_DATA_URL}/magazines`,
  ];

  const dynamicEventsPages = productData.map((event: any) => {
    return `${EXTERNAL_DATA_URL}/events/${event.id}`;
  });
  const dynamicUserPages = userdata.map((user: any) => {
    return `${EXTERNAL_DATA_URL}/${user.id}`;
  });

  const allPages = [...staticPages, ...dynamicEventsPages, ...dynamicUserPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
