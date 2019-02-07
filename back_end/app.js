const express = require('express');
const http = require('http');
const routes = require('./routes/index');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
routes(app);
http.createServer(app).listen(port);

console.log('Server started on: ' + port);


/*
	resources:
		https://expressjs.com/en/api.html

*/