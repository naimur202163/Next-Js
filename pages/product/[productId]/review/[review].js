import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h2>
        This is Review {reviewId} for Product {productId}
      </h2>
    </div>
  );
}
export default Review;
