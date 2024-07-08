const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./authRoutes');

const app = express();

app.use(session({ secret: 'YOUR_SESSION_SECRET', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});