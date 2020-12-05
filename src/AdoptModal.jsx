import React from "react";
import { navigate } from "@reach/router";

const AdoptModal = function AdoptModal({ handleClickNo, adoptUrl }) {
  const goToAdopt = () => navigate(adoptUrl);
  return (
    <div>
      <h1>Would you like to Adpot me?</h1>
      <div className="buttons">
        <button onClick={goToAdopt}>Yes</button>
        <button onClick={handleClickNo}>No</button>
      </div>
    </div>
  );
};

export default AdoptModal;
