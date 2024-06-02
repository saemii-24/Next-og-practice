import posts from "../../../data.json";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = Number(params.id);
  const { title, og } = posts[id];

  return {
    title: title + " 설명" || "default title",
    openGraph: {
      title: title + "오픈그래프 제목" || "오픈그래프 제목",
      description: title + "오픈그래프 설명" || "오픈그래프 설명",
      images: [
        {
          url: `https://next-og-practice.vercel.app/api/og?id=${id}`,
          width: 800,
          height: 600,
          alt: title + "오픈그래프 이미지",
        },
      ],
    },
    twitter: {
      title: title + "트위터 제목" || "트위터 제목",
      description: title + "트위터 설명" || "트위터 설명",
      images: [
        {
          url: `https://next-og-practice.vercel.app/api/og?id=${id}`,
          width: 800,
          height: 600,
          alt: title + "트위터 이미지",
        },
      ],
    },
  };
}
export default function Page({ params, searchParams }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>FifthPage {params.id}</h1>
    </main>
  );
}
