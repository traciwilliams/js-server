var express = require('express');
var ctrl = express.Router();

var users = [
{
	email:"thaota@gmail.com",
	password: "this"
},
{
	email:"thaota@gmail.com",
	password: "that"
},
{
	email:"thaota@gmail.com",
	password: "other"
}
];

function findUserById(id) {
	var offsetIndex = id -1;
	return users[offsetIndex];
};

/* GET home page. */
ctrl.get('/', function(req, res,next) {
  res.json(users);
});

ctrl.get('/:id', function(req,res,next){
	//console.log(req.params);
	var id = parseInt(req.params.id);
	if (typeof id === 'number'){
		res.json(findUserById(id));
	}
	//console.log('ROUTE PARAMS');
	//fallback if the IF fails
	res.json({
		message: 'user not found'
	});
});
module.exports = ctrl;
