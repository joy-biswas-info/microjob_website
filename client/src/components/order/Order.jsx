import { Link } from "react-router-dom";
import "./Order.scss";

const Order = ({ order }) => {
  return (
    <tr>
      <td>
        <img src={order?.img} alt="" className="order-img" />
      </td>

      <td>{order.title}</td>
      <td>${order.price}</td>
      <td>
        <Link to="/messages">
          <img className="messages" src="/images/message.png" alt="" />
        </Link>
      </td>
    </tr>
  );
};

export default Order;
