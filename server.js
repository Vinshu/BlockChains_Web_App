var express = require('express')
  , cors = require('cors')
  , app = express();


//Used for accessing ajax post data at backend
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//session configs
var expressSession = require('express-session');
var cookieParser = require('cookie-parser'); // the session is stored in a cookie, so we use this to parse it


app.use(cookieParser());

app.use(expressSession({
    secret: 'test_session',
    resave: false,
    saveUninitialized: true
}));


//For enabling CORS
app.use(cors());

//for usign Web3 javascript API
var Web3 = require('web3');



//initialising etheium
if (typeof web3 !== 'undefined') {
  var web3 = new Web3(web3.currentProvider);
} else {
  var web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.0.105:8545"));

}

//Api for registering Admin created polls on etherium blockchain

app.post('/api/createPollEtherium', function (req, res) {

console.log("This session belongs to the user:- "+req.session.visitor_email);
console.log(req.body);
console.log("*****************************");
console.log("Session parameter is:-"+req.session.visitor_email);
//do some processing on etherium
/*
    web3.eth.defaultAccount = ''; // Exchange Address 
    var defaultAccount = web3.eth.defaultAccount;
    


console.log('Etherium server is processing your request...');
*/
//end of etherium processing
});
 
//Api to handle user votes etherium transactions
app.post('/api/castVoteEtherium', function (req, res) {

console.log("This session belongs to the user:- "+req.session.visitor_email);
console.log(req.query.choice);
console.log("*****************************");
console.log("Session parameter is:-"+req.session.visitor_email);
//do some processing on etherium
/*
    web3.eth.defaultAccount = ''; // Exchange Address 
    var defaultAccount = web3.eth.defaultAccount;
    


console.log('Etherium server is processing your request...');
*/
//end of etherium processing
});
 

//Api to handle user logins
app.post('/api/login', function (req, res) {

req.session.visitor_email=req.query.visitor;
console.log("Query parameter is:-"+req.query.visitor);
console.log("*****************************");
console.log("Session parameter is:-"+req.session.visitor_email);
res.send("Redirecting "+req.session.visitor_email+" to polling dashboard...");
//do some processing on etherium

/*
    web3.eth.defaultAccount = ''; // Exchange Address 
    var defaultAccount = web3.eth.defaultAccount;
    


console.log('Etherium server is processing your request...');
*/
//end of etherium processing
});


//Server listens on port 4080
app.listen(4080);
console.log("Access server on http://localhost:4080");