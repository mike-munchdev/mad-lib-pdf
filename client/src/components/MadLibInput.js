import React from 'react';
import PropTypes from 'prop-types';

const MadLibInput = ({ id, name, placeholder, value, handleChange }) => {
  return (
    <input
      type="text"
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      required
      onChange={e => handleChange(e)}
    />
  );
};
export default MadLibInput;

MadLibInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func
};
