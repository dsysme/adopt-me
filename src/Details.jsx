import React, { useEffect, useState } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
// import AdoptModal from "./AdoptModal";
import Modal from "./Modal";
import { navigate } from "@reach/router";

const Details = function Details({ id }) {
  const [animal, setAnimal] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    pet.animal(id).then((result) => {
      const animal = result.animal;
      setAnimal(animal);
    });
  }, [id]);

  const toggleShowModal = function toggleShowModal() {
    setShowModal(!showModal);
  };

  if (!Object.keys(animal).length || animal.id != id) {
    return <h1>Loading ...</h1>;
  } else {
    const { name, type, breeds, description, photos, url } = animal;
    const { primary } = { ...breeds };

    return (
      <div className="details">
        <Carousel photos={photos}></Carousel>
        <div>
          <h1>{name}</h1>
          <h2>{`${type} - ${primary}`}</h2>
          <button onClick={toggleShowModal}>{`Adopt ${name}`}</button>
          <p>{description}</p>
        </div>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to Adpot me?</h1>
              <div className="buttons">
                <button onClick={() => navigate(url)}>Yes</button>
                <button onClick={toggleShowModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
};

export default Details;
