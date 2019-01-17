const express = require('express');
const http = require('http');
const routes = require('./routes/index');

const app = express();
const port = 8080;

app.use((req, res, next) => {
	console.log("this is where we would verify");
	next();
});
routes(app);
http.createServer(app).listen(8080);

console.log('Server started on: ' + port);


/*
	resources:
		https://expressjs.com/en/api.html

*/