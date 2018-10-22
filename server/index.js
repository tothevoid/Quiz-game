const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Server started!');
  });

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.route('/api/get_categories').get((req, res) => {
    console.log('New request: '+req.route);
    res.send([
        { name: 'Фильмы', href: 'https://filmhubatl.com/wp-content/uploads/2017/07/Film-Production-FilmHubATL.jpg' },
        { name: 'Музыка', href: 'https://www.techbooky.com/wp-content/uploads/2018/05/music-staff_b1d89oyes__F0000.png'},
        { name: 'Сериалы', href: 'https://tvseriesfinale.com/wp-content/uploads/2013/03/showtime-tv-show-ratings-24.jpg'}
    ]);
    
});