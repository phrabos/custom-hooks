import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, species, handleError }) => {
  return (
    <>
      <img 
        src={image} 
        alt={name}
        style={{ height:'200px' }}
        onError={handleError}
      />
      <p style={{ margin:'0' }}>{name}</p>
      <p style={{ margin:'0' }}>{species}</p>
    </>
  );
};



Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  handleError: PropTypes.func.isRequired,
};

export default Character;
