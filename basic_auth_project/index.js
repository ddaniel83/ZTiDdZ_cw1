// Requiring module
const express = require("express");
var path = require('path');

const app = express(); //wymagania modułu (frameworku)

function authentication(req, res, next) {  //funkcja określająca co się dzieję po udanym i nieudanym logowaniu
	var authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1]; //zapisanie w zmiennej hasła i loginu

	if (user == '' && pass == '') {

		// If Authorized user
		next();
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running"); //działanie na porcie 3000 + wyświetlenie logu w konsoli
})
