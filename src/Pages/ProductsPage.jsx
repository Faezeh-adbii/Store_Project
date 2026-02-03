import { useProducts } from "../Context/ProductContext";
function ProductsPage() {
  const Products = useProducts();
  console.log(Products);
  return <div>ProductsPage</div>;
}

export default ProductsPage;
