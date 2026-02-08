import { ImSearch } from "react-icons/im";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useProducts } from "../Context/ProductContext";
import styles from "./ProductPage.module.css";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { filterProducts, searchProducts } from "../helpers/helper";
function ProductsPage() {
  const Products = useProducts();

  const [displayed, setDisplayed] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(Products);
  }, [Products]);

  useEffect(() => {
    let finalProducts = searchProducts(Products, query.search);
    finalProducts=filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((q) => ({ ...q, category }));
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
          {!displayed.length && <Loader />}
          {displayed.map((Product) => (
            <Card key={Product.id} data={Product} />
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
