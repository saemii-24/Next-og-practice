import { ImageResponse } from "next/og";
import posts from "../../../data.json";

//https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata

export const runtime = "edge";

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
