// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can choose any available port

app.use(bodyParser.json());

// Replace this with your actual flag
const correctFlag1 = 'helloworld';
const correctFlag2 = 'keyflagsosc';
const correctFlag3 = 'soscsteganoflag';
const correctFlag4 = 'requestpostflag';
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.post('/checkFlag', (req, res) => {
  const userFlag = req.body.flag;

  if (userFlag === correctFlag1) {
    res.json({ success: true, message: 'FLAG1' });
  } 
  else if (userFlag === correctFlag2) {
    res.json({ success: true, message: 'FLAG2' });
  } 
  else if (userFlag === correctFlag3) {
    res.json({ success: true, message: 'FLAG3' });
  }
  else if (userFlag === correctFlag4) {
    res.json({ success: true, message: 'FLAG4' });
  } else {
    res.status(403).json({ success: false, message: 'INCORRECT' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;
