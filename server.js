var express = require('express')
var app = express()
var path = require('path')

var chipotleMenu = [
	{ type: "entree", name: "burrito"},
	{ type: "entree", name: "salad"},
	{ type: "entree", name: "tacos"},
	{ type: "entree", name: "bowl"},
	{ type: "filling", name: "chicken", price: 6.50},
	{ type: "filling", name: "barbacoa", price: 7.50},
	{ type: "filling", name: "carnitas", price: 6.95},
	{ type: "filling", name: "sofritas", price: 6.50},
	{ type: "filling", name: "steak", price: 7.50},
	{ type: "filling", name: "veggies", price: 6.50},
	{ type: "topping", name: "guacamole", price: 2.05}
];

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static('static'))

app.get('/', function (req, res) {
  res.send('ahnyeong world')
})

app.get('/chipotleMenu', function(req, res) {
	res.send(chipotleMenu)
})

var port = 8000
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})
