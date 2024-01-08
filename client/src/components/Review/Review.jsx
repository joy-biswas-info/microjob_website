import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";

/* eslint-disable react/prop-types */
const Review = ({ review }) => {
  const { desc, userId, star } = review;
  const { isLoading, error, data } = useQuery({
    queryKey: ["userId"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="item">
      {isLoading ? (
        "Loading.."
      ) : error ? (
        "Something went wrong"
      ) : (
        <>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="info">
              <span>{data.username}</span>
              <div className="country">
                <span>{data.country}</span>
              </div>
            </div>
          </div>

          <div className="stars">
            {Array(Math.round(star))
              .fill()
              .map((item, i) => (
                <img src="/images/star.png" alt="" key={i} />
              ))}
            <span>{Math.round(star)}</span>
          </div>

          <p>{desc}</p>
          <div className="helpful">
            <span>Helpful?</span>
            <img src="/images/like.png" alt="" />
            <span>Yes</span>
            <img src="/images/dislike.png" alt="" />
            <span>No</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Review;
