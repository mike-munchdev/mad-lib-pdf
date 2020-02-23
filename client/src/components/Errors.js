import React from 'react';

import PropTypes from 'prop-types';

const Errors = ({ errors, title, color }) => {
  const itemRenderer = (error, index) => {
    return (
      <li
        className={`list-group-item ${color ? `list-group-item-${color}` : ''}`}
        key={index.toString()}
      >
        {error.message}
      </li>
    );
  };

  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <div className="container mb-3">
      <ul className="list-group">
        {title && <h4>{title}</h4>}
        {errors.map(itemRenderer)}
      </ul>
    </div>
  );
};

Errors.defaultProps = {
  title: '',
  color: 'danger'
};

Errors.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  errors: PropTypes.array
};

export default Errors;
