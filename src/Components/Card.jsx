import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { productQuantity, shortenText } from "../helpers/helper";
import styles from "./Card.module.css";
import { useCart } from "../Context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const [state, dispatch] = useCart();
  console.log(state);
  const quantity = productQuantity(state, data.id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
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
          {quantity == 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE_ITEM")}>-</button>
          )}
          {!!quantity && <span>{quantity}</span> }
          {quantity == 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
