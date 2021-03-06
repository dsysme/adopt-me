import React from "react";
import { Link } from "@reach/router";

const Pet = function Pet({ id, name, animal, breed, media, location }) {
  const image = media.length ? media[0].small : "http://placecorgi.com/300/300";
  console.log(image);
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={image} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
