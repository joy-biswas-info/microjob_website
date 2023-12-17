/* eslint-disable react/prop-types */
import Slide from "../slide/Slide";
import Carousel from "better-react-carousel";
import "./Slider.scss";

const Slider = ({ items, slidePerRow, gap, rowCount }) => {
  if (!items || items.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="category-slider">
      <div className="container">
        <h2>Popular services</h2>
        <Carousel cols={slidePerRow} rows={rowCount} gap={gap} loop>
          {items?.map((card) => (
            <Carousel.Item key={card.id}>
              <Slide item={card} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
