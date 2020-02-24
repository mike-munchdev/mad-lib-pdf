import React, { useState } from 'react';
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';

import MadLibRow from './components/MadLibRow';
import Errors from './components/Errors';

let FileSaver;
const initialState = {
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answer5: '',
  answer6: '',
  answer7: '',
  answer8: '',
  answer9: '',
  answer10: '',
  answer11: '',
  answer12: '',
  answer13: '',
  answer14: '',
  answer15: '',
  answer16: '',
  answer17: '',
  answer18: '',
  answer19: '',
  answer20: '',
  answer21: '',
  answer22: '',
  answer23: '',
  answer24: '',
  answer25: '',
  answer26: ''
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  // const [madLibAnswers, setMadLibAnswers] = useState();

  const [madLibAnswers, setMadLibAnswers] = useState(initialState);

  const handleTextChange = e => {
    const target = e.target;
    setMadLibAnswers({
      ...madLibAnswers,
      [target.name]: target.value
    });
  };

  const clearForm = () => {
    setMadLibAnswers(initialState);
  };

  const fillWithDefaults = () => {
    setMadLibAnswers({
      answer1: 'dog',
      answer2: 'hamburger',
      answer3: 'friend',
      answer4: 'cat',
      answer5: 'play',
      answer6: 'skip',
      answer7: 'jump',
      answer8: 'hop',
      answer9: 'truck',
      answer10: 'home',
      answer11: 'treasure',
      answer12: 'chest',
      answer13: 'London',
      answer14: 'give',
      answer15: 'chicken',
      answer16: 'monopoly',
      answer17: 'trap',
      answer18: 'crayon',
      answer19: 'computer',
      answer20: 'blankets',
      answer21: 'television',
      answer22: 'flying',
      answer23: 'adore',
      answer24: 'umpires',
      answer25: 'strike',
      answer26: 'razor'
    });
  };

  const generateMadLib = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/v1/madlibs', madLibAnswers, {
        responseType: 'blob'
      });

      let contentDisposition = response.headers['content-disposition'];
      let contentType = response.headers['content-type'];
      if (!FileSaver) {
        FileSaver = await import('file-saver');
      }
      const file = response.data;
      let fileName;

      if (contentDisposition) {
        fileName = contentDisposition.split('=')[1];
      } else {
        fileName = 'madlib.pdf';
      }

      FileSaver.saveAs(new Blob([file], { type: contentType }), fileName);
      setLoading(false);
    } catch (error) {
      setErrors([error]);
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="pt-5 text-center">
        <h2>Mad Lib Generator</h2>
        <p className="lead">
          Enter the requested parts of speech to generate your mad lib!
          (downloaded as pdf)
        </p>
        <hr className="mb-4" />
      </div>
      <Errors errors={errors} />
      {loading ? (
        <ScaleLoader
          color={'#123abc'}
          loading={true}
          css={'text-align: center!important;'}
        />
      ) : (
        <>
          {/* row 1 */}
          <MadLibRow
            input1Id="answer1"
            input1Name="answer1"
            input1Placeholder="animal"
            input1Value={madLibAnswers['answer1']}
            handleChange={handleTextChange}
            input2Id="answer2"
            input2Name="answer2"
            input2Placeholder="food"
            input2Value={madLibAnswers['answer2']}
          />
          {/* end row 1 */}
          {/* row 2 */}
          <MadLibRow
            input1Id="answer3"
            input1Name="answer3"
            input1Placeholder="noun"
            input1Value={madLibAnswers['answer3']}
            handleChange={handleTextChange}
            input2Id="answer4"
            input2Name="answer4"
            input2Placeholder="noun"
            input2Value={madLibAnswers['answer4']}
          />
          {/* end row 2 */}
          {/* row 3 */}
          <MadLibRow
            input1Id="answer5"
            input1Name="answer5"
            input1Placeholder="verb"
            input1Value={madLibAnswers['answer5']}
            handleChange={handleTextChange}
            input2Id="answer6"
            input2Name="answer6"
            input2Placeholder="verb"
            input2Value={madLibAnswers['answer6']}
          />
          {/* end row 3 */}
          {/* row 4 */}
          <MadLibRow
            input1Id="answer7"
            input1Name="answer7"
            input1Placeholder="verb"
            input1Value={madLibAnswers['answer7']}
            handleChange={handleTextChange}
            input2Id="answer8"
            input2Name="answer8"
            input2Placeholder="verb"
            input2Value={madLibAnswers['answer8']}
          />
          {/* end row 4 */}
          {/* row 5 */}
          <MadLibRow
            input1Id="answer9"
            input1Name="answer9"
            input1Placeholder="noun"
            input1Value={madLibAnswers['answer9']}
            handleChange={handleTextChange}
            input2Id="answer10"
            input2Name="answer10"
            input2Placeholder="location"
            input2Value={madLibAnswers['answer10']}
          />
          {/* end row 5 */}
          {/* row 6 */}
          <MadLibRow
            input1Id="answer11"
            input1Name="answer11"
            input1Placeholder="noun"
            input1Value={madLibAnswers['answer11']}
            handleChange={handleTextChange}
            input2Id="answer12"
            input2Name="answer12"
            input2Placeholder="noun"
            input2Value={madLibAnswers['answer12']}
          />
          {/* end row 6 */}
          {/* row 7 */}
          <MadLibRow
            input1Id="answer13"
            input1Name="answer13"
            input1Placeholder="location"
            input1Value={madLibAnswers['answer13']}
            handleChange={handleTextChange}
            input2Id="answer14"
            input2Name="answer14"
            input2Placeholder="verb"
            input2Value={madLibAnswers['answer14']}
          />
          {/* end row 7 */}
          {/* row 8 */}
          <MadLibRow
            input1Id="answer15"
            input1Name="answer15"
            input1Placeholder="food"
            input1Value={madLibAnswers['answer15']}
            handleChange={handleTextChange}
            input2Id="answer16"
            input2Name="answer16"
            input2Placeholder="game"
            input2Value={madLibAnswers['answer16']}
          />
          {/* end row 8 */}
          {/* row 9 */}
          <MadLibRow
            input1Id="answer17"
            input1Name="answer17"
            input1Placeholder="verb"
            input1Value={madLibAnswers['answer17']}
            handleChange={handleTextChange}
            input2Id="answer18"
            input2Name="answer18"
            input2Placeholder="noun"
            input2Value={madLibAnswers['answer18']}
          />
          {/* end row 9 */}
          {/* row 10 */}
          <MadLibRow
            input1Id="answer19"
            input1Name="answer19"
            input1Placeholder="noun"
            input1Value={madLibAnswers['answer19']}
            handleChange={handleTextChange}
            input2Id="answer20"
            input2Name="answer20"
            input2Placeholder="plural noun"
            input2Value={madLibAnswers['answer20']}
          />
          {/* end row 10 */}
          {/* row 11 */}
          <MadLibRow
            input1Id="answer21"
            input1Name="answer21"
            input1Placeholder="noun"
            input1Value={madLibAnswers['answer21']}
            handleChange={handleTextChange}
            input2Id="answer22"
            input2Name="answer22"
            input2Placeholder="verb ending in -ing"
            input2Value={madLibAnswers['answer22']}
          />
          {/* end row 11 */}
          {/* row 12 */}
          <MadLibRow
            input1Id="answer23"
            input1Name="answer23"
            input1Placeholder="verb"
            input1Value={madLibAnswers['answer23']}
            handleChange={handleTextChange}
            input2Id="answer24"
            input2Name="answer24"
            input2Placeholder="plural noun"
            input2Value={madLibAnswers['answer24']}
          />
          {/* end row 12 */}
          {/* row 13 */}
          <MadLibRow
            input1Id="answer25"
            input1Name="answer25"
            input1Placeholder="verb"
            input1Value={madLibAnswers['answer25']}
            handleChange={handleTextChange}
            input2Id="answer26"
            input2Name="answer26"
            input2Placeholder="noun"
            input2Value={madLibAnswers['answer26']}
          />
          {/* end row 13 */}
          <Errors errors={errors} />
          <hr className="mb-4" />
          <div className="row">
            <div className="col-md-4">
              <button
                className="btn btn-primary btn-block"
                onClick={() => generateMadLib()}
              >
                Generate Mad Lib
              </button>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-secondary btn-block"
                onClick={() => fillWithDefaults()}
              >
                Use Defaults
              </button>
            </div>
            <div className="col-md-4">
              <button
                className="btn btn-danger btn-block"
                onClick={() => clearForm()}
              >
                Clear
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
