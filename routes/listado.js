var express = require('express');
const axios = require('axios');
// import got from {got};
var http = require('http');
var router = express.Router();
// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!

// Demo showing the server in action

/* GET home page. */
router.get('/', function (req, res, next) {
	console.log('entra a server');
	// app.get("/getListado", (req, resp) => {
	// 1. Crea un nuevo objeto XMLHttpRequest
	// req.body; // JavaScript object containing the parse JSON
	var respuesta = {'vacio': ''};
	const respaxios = axios.post('http://c1300044.ferozo.com/getListado.php', {
	}).then( resp => {
		// console.log(resp);
		respuesta = resp;
	});
    // // res.json(req.body);
	// return respaxios.data;
	//     http.post('http://c1300044.ferozo.com/getListado.php', { retry: { limit: 3, methods: ["GET", "POST"] }, json: true }).then(response_ => {
	//       console.log(response_.body.url);
	//    //    console.log(response.body_.explanation);
	//       response = response_;
	//     }).catch(error => {
	//       console.log(error);
	//     });

	// return resp.json();
	//    });
	console.log(respuesta);
	res.send({'respuesta': 'respuestita'});
});

module.exports = router;
