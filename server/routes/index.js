const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
//const stripe = require('stripe')(stripeSecretKey);
//const stripeSecretKey = require('../index');
//https://stripe.com/docs/connect/account-tokens

router.post('/checkout', async (req, res) => {
  console.log('method post JAJAJA');
  let status;
  try {
    const { token, product } = await req.body;
    const object = {
      client: token.client_ip,
      name: token.card.name,
      card: token.card.country,
      country: token.card.address_city,
      brand: token.card.brand,
      product: product.length,
      email: token.email
    }
    processEmail(object);
    status = 'success';
  }
  catch (err) {
    status = err;
    console.log(err);
  }
  if (status == 'succes') {
    res.json(
      req.body
    );
  }
})

function processEmail(data) {
  console.log(data)
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'geovanniam171078@gmail.com',
      pass: 'rmroihzuihsdarjw'
    }
  });

  const object = {
    from: 'geovanniam171078@gmail.com',
    to: (data).email,
    subject: (data).name,
    text: JSON.stringify(data)
  }

  console.log(object)
  trasnporEmail(transporter, object);
}

function trasnporEmail(transporter, object) {
  transporter.sendMail(object, (error, info) => {
    if (error) return console.log(error);
    console.log('Mensaje enviado: ' + info.response);
    transporter.close();
  });
}

module.exports = router;