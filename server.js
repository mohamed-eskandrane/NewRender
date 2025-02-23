const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configure EJS template engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    active: { home: true }
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    active: { about: true }
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    active: { contact: true }
  });
});

// 404 Middleware
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
