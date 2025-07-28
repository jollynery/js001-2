import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as TwitterStrategy } from 'passport-twitter';

const app = express();

app.use(express.json()); // For parsing JSON POST bodies
app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Google OAuth2
passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Facebook
passport.use(new FacebookStrategy({
  clientID: 'FACEBOOK_APP_ID',
  clientSecret: 'FACEBOOK_APP_SECRET',
  callbackURL: '/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'photos', 'email']
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Twitter (X)
passport.use(new TwitterStrategy({
  consumerKey: 'TWITTER_CONSUMER_KEY',
  consumerSecret: 'TWITTER_CONSUMER_SECRET',
  callbackURL: '/auth/twitter/callback',
}, (token, tokenSecret, profile, done) => {
  return done(null, profile);
}));

// Telegram strategy temporarily removed due to compatibility issues.

// Routes
app.get('/', (req, res) => res.send('Backend running.'));

// Google
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('http://localhost:3000/'); // Redirect to React app after login
});

// Facebook
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  res.redirect('http://localhost:3000/'); // Redirect to React app after login
});

// Twitter (X)
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => {
  res.redirect('http://localhost:3000/'); // Redirect to React app after login
});

// Telegram routes temporarily removed due to compatibility issues.

// Admin login (non-OAuth)
app.post('/auth/admin', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin11') {
    req.session.user = { username: 'admin', role: 'admin' };
    res.status(200).json({ redirect: 'http://localhost:3000/' }); // Instruct frontend to redirect
  } else {
    res.status(401).json({ message: 'Invalid admin credentials' });
  }
});

app.listen(3001, () => console.log('Backend listening on http://localhost:3001'));
