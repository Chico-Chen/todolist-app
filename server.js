
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/assignment-8-Chico-Chen', {});
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//allow serving static files
app.use(express.static(__dirname + '/dist/assignment8'));

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const initApp = require('./app/app');
initApp(app);

app.listen(port);
console.log('Order RESTful API server started on: ' + port);