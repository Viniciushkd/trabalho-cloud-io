var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var router = express.Router();

app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser('pclound'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);


app.listen(5000, function () {
  console.log("Aplicação no ar.");
}); 