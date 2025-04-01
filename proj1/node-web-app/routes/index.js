const path = require('path');
const express = require('express');
//const router = express.Router();

// do wdrażania - vercel
const app = express(); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
  res.render('index', { title: 'Strona główna'});
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'O mnie' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Kontakt' });
});

router.post('/submit-form', (req, res) => {
  console.log(req.body);
  res.send('Formularz został wysłany!');
});

router.get('/guestbook', (req, res) => {
  res.render('guestbook', { title: 'Księga gości' });
});

router.get('/api', (req, res) => {
    res.json({ status: "ok", message: "API działa!" });
});
  
module.exports = app; // lub router
