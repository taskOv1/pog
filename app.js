const express = require('express');
const app = express();

app.use(express.static('public'));
// app.get('/', (req, res) => {
//   res.send('hello');
// })
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));