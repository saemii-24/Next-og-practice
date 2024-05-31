import { url } from "inspector";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "second";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  // const interSemiBold = fetch(
  //   new URL("./Inter-SemiBold.ttf", import.meta.url)
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          backgroundSize: "cover", // 전체 영역을 커버하도록 설정
          backgroundPosition: "center", // 배경 이미지를 중앙에 위치시킴
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        third Page!
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Inter",
      //     data: await interSemiBold,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    }
  );
}
