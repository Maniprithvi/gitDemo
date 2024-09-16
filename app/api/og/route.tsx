// import { ImageResponse } from "next/og";
// import { NextRequest } from "next/server";

// // Route segment config
// export const runtime = "edge";

// // Define a function to handle GET requests
// export async function GET(req: NextRequest) {
//   // Extract title from query parameters
//   const { searchParams } = req.nextUrl;
//   const postTitle = searchParams.get("title");

//   // Fetch the Outfit font from the specified URL
//   const font = fetch(
//     new URL("../../../../public/fonts/outfit-semibold.ttf", import.meta.url)
//   ).then((res) => res.arrayBuffer());
//   const fontData = await font;

//   // Create an ImageResponse with dynamic content
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           height: "100%",
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           justifyContent: "center",
//           backgroundImage: `url(http://localhost:3000/og-bg.png)`,
//         }}
//       >
//         <div
//           style={{
//             marginLeft: 190,
//             marginRight: 190,
//             display: "flex",
//             fontSize: 140,
//             fontFamily: "Outfit",
//             letterSpacing: "-0.05em",
//             fontStyle: "normal",
//             color: "white",
//             lineHeight: "120px",
//             whiteSpace: "pre-wrap",
//           }}
//         >
//           {postTitle}
//         </div>
//       </div>
//     ),
//     // ImageResponse options
//     {
//       width: 1920,
//       height: 1080,
//       fonts: [
//         {
//           name: "Outfit",
//           data: fontData,
//           style: "normal",
//         },
//       ],
//     }
//   );
// }
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
        }}
      >
        <h1 style={{ fontSize: 64, color: "white", display: "block" }}>
          {searchParams.get("title")}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
