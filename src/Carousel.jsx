import React, { useState } from "react";

const Carousel = function Carousel({ photos }) {
  const [active, setActive] = useState(0);
  const largePhotos = photos.map(({ large }) => large);

  function handleClick(event) {
    setActive(event.target.dataset.index);
  }

  return (
    <div className="carousel">
      <img src={largePhotos[active]} alt="animal"></img>;
      <div className="carousel-smaller">
        {largePhotos.map(function toImg(photo, index) {
          return (
            // eslint-disable-next-line
            <img
              className={index == active ? "active" : ""}
              onClick={handleClick}
              key={photo}
              data-index={index}
              src={photo}
              alt={index}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
