import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('This is the API of Blues en el Balcón');
});

export default app;
