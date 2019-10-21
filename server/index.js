const express = require('express');
const app = express();

app.use(require('./routes/index'))

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
  console.log('sever', app.get('port'))
})

