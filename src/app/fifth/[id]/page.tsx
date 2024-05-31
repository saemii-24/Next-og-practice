import { ImageResponse } from "next/og";
import posts from "../../../data.json";

export function generateImageMetadata({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const { id, title, og } = posts[postId];
  return [
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      alt: title + "오픈그래프",
      id: id,
      openGraph: {
        title: title + "오픈그래프 테스트",
        description: title + "오픈그래프 테스트" + id + "번 페이지",
        siteName: "연습용 사이트",
        locale: "ko_KR",
        type: "website",
      },
    },
  ];
}

export default function Fifth({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>FifthPage {params.id}</h1>
    </main>
  );
}
