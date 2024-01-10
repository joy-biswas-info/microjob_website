import { Link } from "react-router-dom";
import "./Messages.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import moment from "moment";

const Messages = () => {
  const queryClient = useQueryClient();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get("/conversations/").then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/update/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "something went wrong"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tbody>
              <tr>
                <th>{user.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
              {data?.map((c) => (
                <tr
                  className={
                    ((user.isSeller && !c.readBySeller) ||
                      (!user.isSeller && !c.readByBuyer)) &&
                    "active"
                  }
                  key={c._id}
                >
                  <td>{c?._id}</td>
                  <td>
                    <Link
                      to={`/message/${c?.id}`}
                      onClick={() => handleRead(c.id)}
                    >
                      {data?.lastMessage?.substring(0, 80)}...
                    </Link>
                  </td>
                  <td>{moment(c.updateAt).fromNow()}</td>
                  <td>
                    {((user.isSeller && !c.readBySeller) ||
                      (!user.isSeller && !c.readByBuyer)) && (
                      <button onClick={() => handleRead(c.id)}>
                        Mark as Read
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
