import "./Orders.scss";
import newRequest from "../../utils/newRequest.js";
import { useQuery } from "@tanstack/react-query";
import Order from "../../components/order/Order.jsx";

const Orders = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get("/orders/").then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {isLoading ? (
              "Loading..."
            ) : error ? (
              "Something went wrong"
            ) : (
              <>
                {data.map((order) => (
                  <Order key={order._id} order={order} />
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
