const ProductReview = async ({ params }) => {
  const paramsDetails = await params;
  console.log(paramsDetails);
  return <div>Product Review page and catch all routes/ segments</div>;
};

export default ProductReview;
