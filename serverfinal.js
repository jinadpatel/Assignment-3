/*{
    "node": true,
    "camelcase": true,
    "indent": 4,
    "undef": true,
    "quotmark": "single",
    "maxlen": 80,
    "trailing": true
    "curly": true,
    "eqeqeq": true,
    "forin": true,
    "immed": true,
    "latedef": true,
    "newcap": true,
    "nonew": true,
    "unused": true,
    "strict": true
}*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/maxnumber', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var num = 
[{"input" : "18"},
{"input" : "228"},
{"input" : "348"},
{"input" : "480"},
{"input" : "81"}];
var max = 0;

var i = 0;
arrlength = num.length;
for(i=0; i < num.length; i++){
  var val = Number([num[i]["input"]]);
      if(val>max){
         max = val;  
      }
   }

   
console.log(max);
res.end("Maximum number=" + max);

})

app.post('/Avgnumber', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var num = 
[{"input" : "10"},
{"input" : "20"},
{"input" : "30"},
{"input" : "40"},
{"input" : "50"}];
var avg = 0;
var i = 0;
arrlength = num.length;
for(; i < arrlength; i++){
  var val = Number([num[i]["input"]]);
      avg = avg + val;
      }
   var final = avg/arrlength;

   
console.log(final);
res.end("Average Number=" + final);

})


app.post('/Evennumber', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var num = 
[{"input" : "1"},
{"input" : "3"},
{"input" : "4"},
{"input" : "2"},
{"input" : "6"}];
var i = 0;
var set=false;
arrlength = num.length;
for(; i < arrlength; i++){
  var val = Number([num[i]["input"]]);
      if(val%2==0){
      set=true;
      }
}
console.log(set);
res.end("Even number:"+set);
})


app.post('/Evennumberall', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var num = 
[{"input" : "2"},
{"input" : "4"},
{"input" : "6"},
{"input" : "8"},
{"input" : "2"}];
var i = 0;
arrlength = num.length;
for(; i < arrlength; i++)
{
      var val = Number([num[i]["input"]]);
      if(val%2==0){
      set=true;
      }else {
        set=false;
        break;
      }
}
console.log(set);
res.end("All Even number:"+set);
})

app.post('/Stringcompare1', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var str = [{"String" : "hello"},
{"String" : "world"}];

var set=false;
arrlength = str.length;
for(var i = 0; i < arrlength; i++){
      if(str[i].String==="hello"){
      set=true;
      }
}
console.log(set);
res.end("String contained in array:"+set);
})

app.post('/Stringcompare2', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
var str = [{"String" : "hello"},
{"String" : "world"},
{"String" : "world"}];

var set=false;
var count=0;
arrlength = str.length;
for(var i = 0; i < arrlength; i++){
      if(str[i].String==="world"){
      count=count+1;
      
      if(count==2){
        set = true;
        break;
      }
}}
console.log(set);
res.end("String contained in array:"+set);
})

app.listen(3001);
console.log("Listening to Port 3001");