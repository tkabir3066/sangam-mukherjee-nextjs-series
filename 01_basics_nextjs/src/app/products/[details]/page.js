const ProductsDetails = async ({ params }) => {
  const paramsDetails = await params;
  console.log(paramsDetails);
  return <div>ProductsDetails</div>;
};

export default ProductsDetails;
