/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable consistent-return */

import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('*', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
