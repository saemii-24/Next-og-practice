import { ImageResponse } from "next/og";
import posts from "../../../data.json";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export async function GET(request: Request, response: Response) {
  try {
    const { searchParams } = new URL(request.url);
    const hasId = searchParams.has("id");

    if (hasId) {
      const id = Number(searchParams.get("id"));
      const { og, title } = posts[id];
      return new ImageResponse(
        (
          // ImageResponse JSX element
          <div
            style={{
              fontSize: 128,
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
    } else {
      return new ImageResponse(<div>이미지없음</div>);
    }
  } catch (e: any) {
    return new Response("실패", { status: 500 });
  }
}
