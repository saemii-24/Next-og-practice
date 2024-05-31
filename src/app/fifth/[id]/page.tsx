export default function Fifth({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>FifthPage {params.id}</h1>
    </main>
  );
}
