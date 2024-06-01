import { ImageResponse } from "next/og";
import posts from "../../../data.json";

export async function generateImageMetadata({
  params,
}: {
  params: { id: string };
}) {
  const { title, og } = posts[Number(params.id)];

  return [
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      id: "small",
    },
    {
      contentType: "image/png",
      size: { width: 72, height: 72 },
      id: "medium",
    },
  ];
}

export default async function Image({ params }: { params: { id: string } }) {
  const { title, og } = posts[Number(params.id)];
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 184,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          backgroundImage: og,
        }}
      >
        {title}
      </div>
    ),
    // ImageResponse options
    {
      width: 1200,
      height: 630,
    }
  );
}
