const express = require('express');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const router = express.Router();
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// const router_en = require('./routers/router_en');
// const router_ru = require('./routers/router_ru');
const router_ejs_en = require('./routers/router_ejs_en');
const router_ejs_ru = require('./routers/router_ejs_ru')

// app.use(express.static('./public'));
// app.use('/', express.static('./public/en')); // always use en version as basic
app.use('/', express.static('./public'));
app.use('/en', express.static('./public'));
app.use('/ru', express.static('./public'));


app.set('view engine', 'ejs');
app.use('/', router_ejs_en);
app.use('/en', router_ejs_en);
app.use('/ru', router_ejs_ru);
// app.use('/en/', express.static('./public'));
// app.use('/ru', express.static('./public'));
// app.use('/en',router_en);
// app.use('/ru', router_ru);
app.use('/game', (req, res) => {
  const file = `${__dirname}/public/PawnOfTheGods.rar`;
  res.download(file);
})




app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

// app.all('*', (req, res) => {
//   res.status(404).send('resource not found')
// })
// app.use('/', router);
// app.get('/', (req, res) => {
//   res.send('hello');
// })
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));