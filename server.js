const express = require('express');

const app = express();

const films = [
    {
      name: "titanic",
      year: 1998,
      link: "http://baskino.me/films/dramy/585-titanik.html",
      director: "Kendrick Lamar",
      rating: 8.88,
    },
    {
      name: "black widow",
      year: 2012,
      link: "http://baskino.me/films/boeviki/28579-chernaya-vdova.html",
      director: "J. Lopez",
      rating: 8.88,
    },
    {
      name: "sherlok",
      year: 2005,
      link: "http://baskino.me/serial/2334-sherlok.html",
      director: "C. Diaz",
      rating: 8.88,
    },
    {
      name: "bond",
      year: 1961,
      link: "http://baskino.me/films/boeviki/12500-007-spektr.html",
      director: "P. Brosnan",
      rating: 8.88,
    },
    {
      name: "turtles",
      year: 1990,
      link: "http://baskino.me/films/boevie-iskustva/9830-cherepashki-nindzya.html",
      director: "M. Jackson",
      rating: 8.88,
    },
  ];

const movieData = {
    img: 'http://baskino.me/uploads/images/2012/092/ezlc94.jpg',
    name: "Топ Ган: Мэверик",
    originalName: "Top Gun: Maverick",
    rateImdb: 8.3,
    year: 2022,
    country: "США",
    director: "Джозеф Косински",
    genre: "Боевики",
    duration: "02:10:32",
    storyLine:
      "Пит Митчелл - один из лучших пилотов, которому дали прозвище Мэверик. Он уже тридцать лет занимается любимым делом, но так и остается инструктором. Герой и сам не заинтересован в повышении по службе, поскольку это помешает ему проводить много времени за штурвалом самолета. В очередной группе новобранцев оказывается лейтенант Брэдли Брэдшоу, сын Ника Брэдшоу. С этого момента Питу предстоит сильно постараться, чтобы справиться с давними переживаниями. Он просто не имеет права отвлекаться от работы, поскольку ему необходимо отобрать группу лучших пилотов для выполнения особо важного задания...",
  };

app.get('/films-list', (req, res) => {
   res.json({films});
});

app.get('/movie-data', (req, res) => {
    res.json({movieData});
 });

app.listen(3003, () => console.log('Example app is listening on port 3003.'));