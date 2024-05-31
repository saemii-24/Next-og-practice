import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.
//예제: https://vercel.com/guides/using-emoji-in-image

export default async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        👋, 🌎 안녕!
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // Supported options: 'twemoji', 'blobmoji', 'noto', 'openmoji', 'fluent' and 'fluentFlat'
      // Default to 'fluent'
      emoji: "noto",
    }
  );
}
