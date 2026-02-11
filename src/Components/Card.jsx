import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { shortenText } from "../helpers/helper";
import styles from "./Card.module.css";
import { useCart } from "../Context/CartContext";

function Card({ data }) {
  const [state, dispatch] = useCart();
  console.log(state);

  const clickHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} />
      <h3>{shortenText(data.title)}</h3>
      <p>{data.price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${data.id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
