import Review from "../review/review.jsx";
import newRequest from "../../utils/newRequest.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "./Reviews.scss";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    e.target[0].value = "";
    e.target[1].value = 1;
    mutation.mutate({ desc, star, gigId });
  };
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something went wrong"
      ) : (
        <>
          {data.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </>
      )}

      <div className="create-review">
        <form action="" onSubmit={handleSubmit}>
          <textarea rows={5} cols={4}></textarea>
          <select name="review" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Review" />
        </form>
      </div>
    </div>
  );
};

export default Reviews;
