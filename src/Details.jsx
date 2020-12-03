import React, { useEffect, useState } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

const Details = function Details({ id }) {
  const [animal, setAnimal] = useState({});

  useEffect(() => {
    pet.animal(id).then((result) => {
      const animal = result.animal;
      setAnimal(animal);
    });
  }, [id]);

  if (!Object.keys(animal).length || animal.id != id) {
    return <h1>Loading ...</h1>;
  } else {
    const { name, type, breeds, description, photos } = animal;
    const { primary } = { ...breeds };

    return (
      <div className="details">
        <Carousel photos={photos}></Carousel>
        <div>
          <h1>{name}</h1>
          <h2>{`${type} - ${primary}`}</h2>
          <button>{`Adopt ${name}`}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default Details;
