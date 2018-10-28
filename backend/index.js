let express = require('express');
const middlewares = require('./middlewares');
const getRoutes = require('./routes');
let app = express();

middlewares.forEach(middleware => app.use(middleware));

app.use('/api/v1', getRoutes());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
