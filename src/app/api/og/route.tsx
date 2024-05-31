import { ImageResponse } from "next/og";

export const runtime = "edge";
export async function GET(request: Request, response: Response) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "음악";

    return new ImageResponse(
      (
        <div>
          <h1>{title}</h1>
        </div>
      )
    );
  } catch (e: any) {
    return new Response("실패", { status: 500 });
  }
}
