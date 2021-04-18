import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import AnimalDetails from '../AnimalDetails/AnimalDetails';

export default function AnimalCard({ name, size, ...props }) {
  return(
    <Card title="Animal">
      <h3>{name}</h3>
      <div>{size}kg</div>
      <AnimalDetails
        {...props}
      />
    </Card>
  )
}

AnimalCard.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}
