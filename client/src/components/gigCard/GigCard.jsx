/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./GigCard.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";

const GigCard = ({ item }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isPending ? (
            "Loading..."
          ) : error ? (
            "Something went wrong..."
          ) : (
            <div className="user">
              <img src={data.img ? data.img : "images/noimg.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src="./images/star.png" alt="" />
            <p>
              {!isNaN(item.totalStar / item.starNumber) &&
                Math.round(item.totalStar / item.starNumber)}
            </p>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./images/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
