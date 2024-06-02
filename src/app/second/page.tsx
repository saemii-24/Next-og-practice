import ogImage from "./opengraph-image.jpg";

console.log(ogImage);

export const metadata = {
  metadataBase: new URL("https://next-og-practice.vercel.app"),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
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
