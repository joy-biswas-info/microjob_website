import { useEffect, useRef, useState } from "react";
import GigCard from "../../components/gigCard/gigCard.jsx";
import "./Gigs.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();
  let { search } = useLocation();
  if (!search) {
    search = "?";
  }

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  const reSort = (sort) => {
    setSort(sort.target.value);
  };

  const apply = (e) => {
    e.preventDefault();
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  return (
    <div className="gigs">
      <div className="container">
        <div className="breadcumbs">Home &gt; Design</div>
        <h1>Ai Artist</h1>
        <p className="explore">
          Explore the boundaries of art and technology with Fiverr&apos;s AI
          artists
        </p>
        <div className="option">
          <div className="left">
            <form onSubmit={apply}>
              <span>Budget : </span>
              <input type="number" placeholder="Min" ref={minRef} />
              <input type="number" placeholder="Max" ref={maxRef} />
              <input type="submit" value="Apply" />
            </form>
          </div>
          <div className="right">
            <form action="#">
              <span>Sort By : </span>

              <select name="sort" id="sort" onChange={reSort}>
                <option value="createdAt">Created At</option>
                <option value="sales">Best selling</option>
                <option value="price">Price</option>
              </select>
            </form>
          </div>
        </div>
        <div className="gig-count">
          {data ? data.length : "0"} <span>Services available</span>
        </div>
        <div className="gig-items">
          {isPending
            ? "Loading"
            : error
            ? "Something went wrong"
            : data?.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
