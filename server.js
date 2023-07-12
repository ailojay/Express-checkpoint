const express = require('express');
const router = require('./router');
const app = express();

// Middleware to check the time of the request
app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  const hours = date.getHours();

  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next(); // Continue to the next middleware or route handler
  } else {
    res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
});

// Set up the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));


app.use('/',router);

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });
  
