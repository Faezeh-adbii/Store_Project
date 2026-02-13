import { PiShoppingBagBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import styles from "./Layout.module.css";

function Layoute({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">BotoShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingBagBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>Developer by Milad With 🖤 </footer>
    </>
  );
}

export default Layoute;
