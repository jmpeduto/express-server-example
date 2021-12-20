var express = require('express');
// const axios = require('axios');
// const superagent = require('superagent');
// import got from {got};
var http = require('http');
const got = require('got');
var router = express.Router();
// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!

// Demo showing the server in action

/* GET home page. */
router.get('/', function (req, resp, next) {
	console.log('entra a server');
	var respuesta = { 'vacio': '' };
	// const respaxios = axios.post('http://c1300044.ferozo.com/getListado.php', {
	// }).then( resp => {
	// 	// console.log(resp);
	// 	respuesta = resp;
	// });
	// //

	// superagent
	// 	.post('http://c1300044.ferozo.com/getListado.php')
	// 	.query({ })
	// 	.end((err, res) => {
	// 		if (err) {
	// 			return console.log(err);
	// 		}
	// 		respuesta = res;
	// 		// console.log(res.body.url);
	// 		// console.log(res.body.explanation);
	// 	});

	got('http://clarin.com', { json: true })
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		});
	console.log(respuesta);
	resp.send({ 'respuesta': 'respuestita' });
});

module.exports = router;
