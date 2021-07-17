const express = require('express');

const app = express();

const router_en = require('./routers/router_en');
const router_ru = require('./routers/router_ru');

app.use(express.static('./public'));
app.use('/', express.static('./public/en'));
app.use('/en/', express.static('./public'));
app.use('/ru', express.static('./public'));
app.use('/en',router_en);
app.use('/ru', router_ru)
app.use('/game', (req, res) => {
  const file = `${__dirname}/public/en/PawnOfTheGods.rar`;
  res.download(file);
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
})
// app.use('/', router);
// app.get('/', (req, res) => {
//   res.send('hello');
// })
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));