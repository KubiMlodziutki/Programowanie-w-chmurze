const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', { title: 'Strona główna' });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'O mnie' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Kontakt' });
});

app.get('/guestbook', (req, res) => {
  res.render('guestbook', { title: 'Księga gości' });
});

app.post('/submit-form', (req, res) => {
  console.log(req.body);
  res.send('Formularz został wysłany!');
});

app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'API działa!' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Nie znaleziono' });
});

if (require.main === module) {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Serwer działa lokalnie na porcie ${PORT}`);
    });
  }

module.exports = app; // dla vercel
