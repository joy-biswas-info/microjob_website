import "./Slide.scss";
import { Link } from "react-router-dom";

const Slide = (item) => {
  const { title, desc, img } = item.item;
  return (
    <Link to="/gigs">
      <div className="slide">
        <div className="text">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
        <img src={img} />
      </div>
    </Link>
  );
};

export default Slide;
