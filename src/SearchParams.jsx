import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./UseDropdown";

const SearchParams = function SearchParams() {
  const [location, setLocation] = useState("Gedera");
  const [breads, setBreeds] = useState([]);
  const [, BreedDropdown, setBreed] = useDropdown("Breed", "", breads);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

  console.log("rendered");

  useEffect(() => {
    setBreed("");
    setBreeds([]);
    pet.breeds(animal).then(({ breeds }) => {
      const breedsStrings = breeds.map(({ name }) => name);
      setBreeds(breedsStrings);
      console.log(breedsStrings);
    });
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
