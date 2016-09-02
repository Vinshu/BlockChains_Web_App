var express = require('express')
  , cors = require('cors')
  , app = express();

var bodyParser = require('body-parser')
  
 
app.use(cors());
var Web3 = require('web3');



//initialising etheium
if (typeof web3 !== 'undefined') {
  var web3 = new Web3(web3.currentProvider);
} else {
  var web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.0.105:8545"));

}

//API for getting trading history from etherium

app.post('/api/createPollEtherium', function (req, res) {


console.log(req.body);

//do some processing on etherium
/*
    web3.eth.defaultAccount = ''; // Exchange Address 
    var defaultAccount = web3.eth.defaultAccount;
    


console.log('Etherium server is processing your request...');
*/
//end of etherium processing
});
 
 

app.listen(process.env.port | 4080);
console.log("Access server on http://192.168.0.136:4080");