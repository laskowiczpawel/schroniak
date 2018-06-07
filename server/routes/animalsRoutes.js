const pets = require('./pets');
const animals = require('./animals');

module.exports = app => {
  app.get('/api/pets', (req, res) => res.send(pets));

  app.get('/api/animals', (req, res) => {
    const [city, breed] = [req.query.city, req.query.breed];
    let start = [...animals];
    if (city) {
      start = start.filter(a => a.city === city);
    }
    if (breed) {
      start = start.filter(a => a.breed === breed);
    }
    res.send(start);
  });
};
