import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetails from '../components/animalCrossing/CharacterDetails';
import { useDetails } from '../hooks/detailsHook';

const DetailsContainer = ({ match }) => {
  const { loading, character } = useDetails(match);

  if(loading) return <h1>Loading...</h1>;
  return (
    <CharacterDetails character={character}/>
  );
};

DetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default DetailsContainer;
