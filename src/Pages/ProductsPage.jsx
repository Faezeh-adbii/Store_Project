import { ImSearch } from "react-icons/im";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
function ProductsPage() {
  const Products = useProducts();
  const [search, setSearch] = useState("");
  const searchHandler = () => {};
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    console.log(category);
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
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronices</li>
            <li>Jewelery</li>
            <li>men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
