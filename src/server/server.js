import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('*', (req, res) => {
  res.send('everything is cool here');
});

app.listen(PORT, () => {});
