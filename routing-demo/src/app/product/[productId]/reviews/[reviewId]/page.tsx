import { Suspense } from "react";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ productId: string; reviewId: string }>;
};

export default function ReviewPage({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading review...</p>}>
      <ReviewDetails params={params} />
    </Suspense>
  );
}

async function ReviewDetails({ params }: Props) {
  const { productId, reviewId } = await params;
  if ((parseInt(reviewId) > 1000) && (parseInt(productId) > 1000)){
    notFound();
  }
  return <h1>Review {reviewId} of Product {productId}!!</h1>;
}