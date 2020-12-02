import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./UseDropdown";
import Results from "./Results";

const SearchParams = function SearchParams() {
  const [location, setLocation] = useState("Seattle, WA");
  const [pets, setPets] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed: breed,
      type: animal,
    });
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
      <Results pets={pets}></Results>
    </div>
  );
};

export default SearchParams;
