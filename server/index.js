if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../.env' });
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
console.log(stripeSecretKey);
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

const stripe = require('stripe')(stripeSecretKey);
const uuid = require('uuid/v4');

app.get('/', (req, res) => {
  res.send('hola alva')
})

app.post('/checkout', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})


app.listen(4000);

