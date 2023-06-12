import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const IconButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;