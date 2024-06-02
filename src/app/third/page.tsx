export const metadata = {
  metadataBase: new URL("https://next-og-practice.vercel.app"),
  openGraph: {
    images: [
      {
        url: "https://next-og-practice.vercel.app/third/opengraph-image",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://next-og-practice.vercel.app/third/opengraph-image",
      },
    ],
  },
};

export default function Third() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ThirdPage</h1>
    </main>
  );
}
