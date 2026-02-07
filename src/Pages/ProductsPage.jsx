import Card from "../Components/Card";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css"
function ProductsPage() {
  const Products = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!Products.length && <p>Loading</p> }
        {Products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductsPage;
