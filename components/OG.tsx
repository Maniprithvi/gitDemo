import Head from "next/head";

interface OG {
  title: string;
  description: string;
  image: string;
  url: string;
  quote?: string;
  hashtag?: string;
}

export default function OG({
  title,
  description,
  image,
  url,
  quote,
  hashtag,
}: OG) {
  const currentUrl = "http://www.maasta.in" + url;
  const metaQuote = quote ?? "";
  const metaTitle = title ?? "Maasta - Platform for talents ";
  const metaImage = image ?? "";
  const metaDescription =
    description ??
    "Maasta - We're a community of passionate individuals who believe in the power of creativity, talent, and collaborations!";
  const metaHashtag = hashtag ?? "#Massta #eventPlatform";

  return (
    <html>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content={currentUrl} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={metaTitle} />
        <meta property="quote" content={metaQuote} />
        <meta name="description" content={metaDescription} />
        <meta property="image" content={metaImage} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:quote" content={metaQuote} />
        <meta property="og:hashtag" content={metaHashtag} />
        <meta property="og:image" content={metaImage} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Maasta" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <div tw="relative flex w-full h-full flex items-center justify-center">
          {/* Background */}
          <div tw="absolute flex inset-0">
            <img
              tw="flex flex-1"
              src={metaImage + "&w=1200&h=630&auto=format&q=75"}
              alt={metaTitle}
            />
            {/* Overlay */}
            <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
          </div>
          <div tw="flex flex-col text-neutral-50">
            {/* Title */}
            <div tw="text-7xl font-bold">{metaTitle}</div>
            {/* Tags */}
            <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
              <div
                tw={`font-medium ${
                  metaTitle === "Maasta" ? "text-orange-500" : "text-indigo-600"
                }`}
              >
                {metaDescription}
              </div>
              <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
              <div>{hashtag}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
// export async function getServerSideProps(context: any) {
//   const { req } = context;
//   const baseUrl = req ? `${req.protocol}://${req.headers.host}` : "";
//   const currentUrl = `${baseUrl}${req.url}`;

//   // You can fetch dynamic data here if needed, or set static values
//   const title = "Dynamic Page Title";
//   const description = "This is a dynamically generated page description.";
//   const image = "https://www.maasta.in/dynamic-og-image.jpg";

//   return {
//     props: {
//       title,
//       description,
//       image,
//       url: currentUrl,
//     },
//   };
// }
