import React from 'react';
import PropTypes from 'prop-types';

export default function AnimalCard({ diet, name, size }) {
  return(
    <div>
      <h3>{name}</h3>
      <div>{size}kg</div>
      <div>{diet.join(', ')}.</div>
    </div>
  )
}

AnimalCard.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}
