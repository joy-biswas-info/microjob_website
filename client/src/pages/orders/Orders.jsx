import { Link } from "react-router-dom";
import "./Orders.scss";

const Orders = () => {
  const user = {
    username: "User_Name",
    userId: 1,
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{user.isSeller ? "Buyer" : "Seller"}</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/321298575/original/25f395dd4eb66267d6d6bc47255a90ea30ece1ab/create-a-professional-wordpress-website-for-your-business.png"
                alt=""
              />
            </td>

            <td>Wordpress website</td>
            <td>99</td>
            <td>BuyerId</td>
            <td>
              <Link to="/messages">
                <img className="messages" src="/images/message.png" alt="" />
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
