import { Suspense } from "react";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default function DocsPage({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading docs...</p>}>
      <DocsContent params={params} />
    </Suspense>
  );
}

async function DocsContent({ params }: Props) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <h1>Docs Home Page!!</h1>;
  }

  if (slug.length === 2) {
    return (
      <h1>
        Viewing docs feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  }

  if (slug.length === 1) {
    return <h1>Viewing the docs for feature {slug[0]}</h1>;
  }

  return <h1>Docs page not found</h1>;
}
