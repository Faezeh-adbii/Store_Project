import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { shortenText } from "../helpers/helper";
import styles from "./Card.module.css";

function Card({ data }) {
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
          <button>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
