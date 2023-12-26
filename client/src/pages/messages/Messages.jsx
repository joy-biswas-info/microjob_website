import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const user = {
    username: "User_Name",
    userId: 1,
    isSeller: true,
  };
  const message = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate quae aspernatur quod natus delectus ipsa animi, dolores illo rerum.`;
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{user.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>{user.username}</td>
            <td>
              <Link to={`/message/${user.userId}`}>
                {message.substring(0, 80)}...
              </Link>
            </td>
            <td>2 days ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="">
            <td>{user.username}</td>
            <td>
              <Link to={`/message/${user.userId}`}>
                {message.substring(0, 80)}...
              </Link>
            </td>
            <td>2 days ago</td>
            <td></td>
          </tr>
          <tr className="">
            <td>{user.username}</td>
            <td>
              <Link to={`/message/${user.userId}`}>
                {message.substring(0, 80)}...
              </Link>
            </td>
            <td>2 days ago</td>
            <td></td>
          </tr>
          <tr className="">
            <td>{user.username}</td>
            <td>
              <Link to={`/message/${user.userId}`}>
                {message.substring(0, 80)}...
              </Link>
            </td>
            <td>2 days ago</td>
            <td></td>
          </tr>
          <tr className="">
            <td>{user.username}</td>
            <td>
              <Link to={`/message/${user.userId}`}>
                {message.substring(0, 80)}...
              </Link>
            </td>
            <td>2 days ago</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
