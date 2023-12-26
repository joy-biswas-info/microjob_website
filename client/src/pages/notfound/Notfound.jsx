import { Link } from "react-router-dom";
import "./Notfound.scss";
const Notfound = () => {
  return (
    <div className="notFound">
      <div className="container">
        <h2>Opps! 404 Not found!</h2>
        <button>
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default Notfound;
