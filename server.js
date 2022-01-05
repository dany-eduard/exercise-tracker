import cors from 'cors';
import express from 'express';
import { PORT } from './config.js';
import connectiondb from './connectiondb.js';

const app = express();
connectiondb();

app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
