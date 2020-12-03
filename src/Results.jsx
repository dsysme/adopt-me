import React from "react";
import Pet from "./Pet";

const Results = function ({ pets, animal, breed, location }) {
  return (
    <div className="search">
      {pets.length === 0
        ? `${animal} ${breed} ${location} not found...`
        : pets.map(function toPetComponent(pet) {
            console.log(
              `pet: name: ${pet.name} animal: ${pet.type} breed: ${pet.breeds.primary}`
            );
            return (
              <Pet
                name={pet.name}
                key={pet.id}
                animal={pet.type}
                breed={pet.breeds.primary}
                media={pet.photos}
                location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                id={pet.id}
              ></Pet>
            );
          })}
    </div>
  );
};

export default Results;
