'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

(async () => {
  try {
    const madLibs = require('./server/routes/madlibs');

    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.use('/api/v1/madlibs', madLibs);
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '/client/build/index.html'));
    });

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log('error starting server', error);
  }
})();
