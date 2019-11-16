if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '../.env' });
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const cors = require('cors');
const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
  console.log('runing 5000');
});

module.exports.stripeSecretKey = stripeSecretKey;