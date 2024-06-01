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
    title: title + " 제목" || "default title",
    description: title + " 설명" || "default description",
    openGraph: {
      images: [
        {
          url: og,
          width: 800,
          height: 600,
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
