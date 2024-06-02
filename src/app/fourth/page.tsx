export const metadata = {
  // metadataBase: new URL("https://next-og-practice.vercel.app"),
  openGraph: {
    title: "4번째 페이지 연습",
    description: "4번째 페이지 오픈그래프 연습",
    url: "https://next-og-practice.vercel.app",
    siteName: "4번째 페이지 연습",
    images: [
      {
        url: "https://next-og-practice.vercel.app/fourth/opengraph-image",
      },
    ],
  },
  twitter: {
    title: "4번째 페이지 연습",
    description: "4번째 페이지 오픈그래프 연습",
    url: "https://next-og-practice.vercel.app",
    siteName: "4번째 페이지 연습",
    images: [
      {
        url: "https://next-og-practice.vercel.app/fourth/opengraph-image",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
};

export default function Fourth() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>FourthPage</h1>
    </main>
  );
}
