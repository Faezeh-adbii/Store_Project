import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helpers/helper";
import styles from "./Sidebar.module.css";
import { categories } from "../Constans/list";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((i) => (
          <li
            key={i.id}
            className={
              i.type.toLowerCase() == query.category ? styles.selected : null
            }
          >
            {i.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
