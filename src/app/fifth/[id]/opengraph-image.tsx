import { ImageResponse } from "next/og";
import posts from "../../../data.json";

//https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata

export const runtime = "edge";

export function generateImageMetadata({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const { id, title, og } = posts[postId];
  return [
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      alt: title + "오픈그래프",
      id: id,
      title: title + "오픈그래프 테스트",
      description: title + "오픈그래프 테스트" + id + "번 페이지",
    },
  ];
}

export default async function Image({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const { id, title, og } = posts[postId];

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 150,
          background: `url('${og}')`,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>
    )
  );
}
