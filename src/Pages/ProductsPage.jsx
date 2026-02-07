import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";
function ProductsPage() {
  const Products = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!Products.length &&  <Loader />}
        {Products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductsPage;
