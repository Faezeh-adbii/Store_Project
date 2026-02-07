import { ImSearch } from "react-icons/im";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";
import { useState } from "react";
function ProductsPage() {
  const Products = useProducts();
  const [search, setSearch] = useState("");
  const searchHandler = () => {
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!Products.length && <Loader />}
          {Products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>SideBar</div>
      </div>
    </>
  );
}

export default ProductsPage;
