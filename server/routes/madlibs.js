const express = require('express');
const router = express.Router();
const path = require('path');
const pdftk = require('node-pdftk');

router.post('/', async (req, res, next) => {
  try {
    const input = pdftk.input(path.join(__dirname, '../files/madlib1.pdf'));
    const fillForm = input.fillForm(req.body);
    const result = await fillForm.output();
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-disposition': 'attachment; filename=madlib.pdf',
      'Content-Length': result.length,
      // 'Connection': 'keep-alive',
      'Content-Transfer-Encoding': 'binary',
      'Accept-Ranges': 'bytes'
    });

    res.end(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
