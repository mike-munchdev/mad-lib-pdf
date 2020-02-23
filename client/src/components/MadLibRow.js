import React from 'react';
import PropTypes from 'prop-types';
import MadLibInput from './MadLibInput';

const MadLibRow = ({
  input1Id,
  input1Name,
  input1Placeholder,
  input1Value,
  input2Id,
  input2Name,
  input2Placeholder,
  input2Value,
  handleChange
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6 mb-3">
            <MadLibInput
              id={input1Id}
              name={input1Name}
              placeholder={input1Placeholder}
              value={input1Value}
              handleChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <MadLibInput
              id={input2Id}
              name={input2Name}
              placeholder={input2Placeholder}
              value={input2Value}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MadLibRow;

MadLibRow.propTypes = {
  input1Id: PropTypes.string,
  input2Id: PropTypes.string,
  input1Name: PropTypes.string,
  input2Name: PropTypes.string,
  input1Placeholder: PropTypes.string,
  input2Placeholder: PropTypes.string,
  input1Value: PropTypes.string,
  input2Value: PropTypes.string,
  handleChange: PropTypes.func
};
