import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./UseDropdown";

const SearchParams = function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA");
  const [, setPets] = useState([]);
  const [breads, setBreeds] = useState([]);
  const [bread, BreedDropdown, setBreed] = useDropdown("Breed", "", breads);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

  async function requestPets() {
    const { animals } = await pet.animals({ location, bread, type: animal });
    setPets(animals || []);
    console.log(`pets: ${animals}`);
  }

  useEffect(() => {
    setBreed("");
    setBreeds([]);
    pet.breeds(animal).then(({ breeds }) => {
      const breedsStrings = breeds.map(({ name }) => name);
      setBreeds(breedsStrings);
    });
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
