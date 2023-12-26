import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right <span>freelance</span> service, right away
          </h1>
          <div className="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for any services..."
            />
            <button>
              {" "}
              <img src="./images/search.png" alt="" />
              Search
            </button>
          </div>
          <div className="popular">
            <p>Popular: </p>
            <button>website design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>Ai Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
