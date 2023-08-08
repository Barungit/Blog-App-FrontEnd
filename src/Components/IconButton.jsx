import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
