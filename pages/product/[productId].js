import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h2>This is Product Details{productId}</h2>
    </div>
  );
}

export default ProductDetails;
