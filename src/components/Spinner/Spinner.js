import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FontAwesomeIcon icon="spinner" spin size="lg" />
    </div>
    <footer><p>MADE WITH LOVE BY SUVRAT JAIN</p></footer>
  );
};

export default Spinner;
