import ogImage from "./opengraph-image.jpg";

console.log(ogImage);

export const metadata = {
  metadataBase: new URL("https://next-og-practice.vercel.app"),
  title: "2번째 페이지",
  description: "2번째 페이지 설명",
  openGraph: {
    images: [
      {
        title: "2번째 페이지 오픈그래프",
        description: "2번째 페이지 설명 오픈그래프",
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        title: "2번째 페이지 트위터 카드",
        description: "2번째 페이지 설명 트위터 카드",
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function Second() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>SecondPage</h1>
    </main>
  );
}
