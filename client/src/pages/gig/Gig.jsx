/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import "./Gig.scss";
import Carousel from "better-react-carousel";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest.js";
import Reviews from "../../components/reviews/reviews.jsx";

const Gig = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;
  const {
    isLoading: userLoading,
    error: userError,
    data: userData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something Went wrong"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Liverr {">"} {data?.cat} {">"}
            </span>
            <h1>{data?.shortTitle}</h1>
            <div className="user">
              <img
                className="pp"
                src={
                  data.img ||
                  "https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt=""
              />
              {userLoading ? (
                "Loading"
              ) : userError ? (
                "Something went Wrong"
              ) : (
                <span>{userData.username}</span>
              )}
              {!isNaN(data.totalStar / data.starNumber) && (
                <div className="stars">
                  {Array(Math.round(data.totalStar / data.starNumber))
                    .fill()
                    .map((item, i) => (
                      <img src="/images/star.png" alt="" key={i} />
                    ))}
                  <span>{Math.round(data.totalStar / data.starNumber)}</span>
                </div>
              )}
            </div>
            <div className="slider">
              <Carousel cols={1} rows={1} gap={1}>
                {data.Images.map((img) => (
                  <Carousel.Item key={img}>
                    <img src={img} alt="" />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            <div className="seller">
              <h2>About The Seller</h2>
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>{userData?.username}</span>
                  {!isNaN(data.totalStar / data.starNumber) && (
                    <div className="stars">
                      {!isNaN(data.totalStar / data.starNumber) && (
                        <div className="stars">
                          {Array(Math.round(data.totalStar / data.starNumber))
                            .fill()
                            .map((item, i) => (
                              <img src="/images/star.png" alt="" key={i} />
                            ))}
                          <span>
                            {Math.round(data.totalStar / data.starNumber)}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <button>Contact Me</button>
                </div>
              </div>
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{userData?.country}</span>
                  </div>
                  <div className="item">
                    <span className="title">Member since</span>
                    <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                    <span className="title">Avg. response time</span>
                    <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                    <span className="title">Last delivery</span>
                    <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                    <span className="title">Languages</span>
                    <span className="desc">English</span>
                  </div>
                </div>
                <hr />
                <p>{userData?.desc}</p>
              </div>
            </div>
            {data._id && <Reviews gigId={data._id} />}
          </div>
          <div className="right">
            <div className="price">
              <h3>1 AI generated image</h3>
              <h2>$ 59.99</h2>
            </div>
            <p>
              I will create a unique high quality AI generated image based on a
              description that you give me
            </p>
            <div className="details">
              <div className="item">
                <img src="/images/clock.png" alt="" />
                <span>2 Days Delivery</span>
              </div>
              <div className="item">
                <img src="/images/recycle.png" alt="" />
                <span>3 Revisions</span>
              </div>
            </div>
            <div className="features">
              <div className="item">
                <img src="/images/greencheck.png" alt="" />
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <img src="/images/greencheck.png" alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="item">
                <img src="/images/greencheck.png" alt="" />
                <span>Image upscaling</span>
              </div>
              <div className="item">
                <img src="/images/greencheck.png" alt="" />
                <span>Additional design</span>
              </div>
            </div>
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
