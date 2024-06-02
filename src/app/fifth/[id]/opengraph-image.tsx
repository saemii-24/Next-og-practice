import { ImageResponse } from "next/og";
import posts from "../../../data.json";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const { title, og } = posts[Number(params.id)];

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          backgroundImage: `url("${og}")`,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </div>
    ),
    {
      ...size,
    }
  );
}
