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
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
app.use(express.static('.'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
app.post('/maxnumber', urlencodedParser, function(req, res) {
    // Prepare output in JSON format
    var maxnum = [{
        "no1": "100"
    }, {
        "no1": "200"
    }, {
        "no1": "300"
    }, {
        "no1": "400"
    }, {
        "no1": "500"
    }];

    function maxnumber(maxnum) {
        var max = 0;
        var i = 0;
        arrlength = maxnum.length;
        for (i = 0; i < arrlength; i++) {
            var value = Number(maxnum[i].no1);
            if (value > max) {
                max = value;
            }
        }
        res.send(JSON.stringify({
            "max": max,
        }));
    }
    maxnumber(maxnum);
});
app.post('/averageNumber', urlencodedParser, function(req, res) {
    var avgnum = [{
        "num2": "1"
    }, {
        "num2": "2"
    }, {
        "num2": "3"
    }, {
        "num2": "4"
    }, {
        "num2": "5"
    }];

    function findaveragenumber(avgnum) {
        var averageNumber = 0;
        var avgresult = 0;
        var avgarrlength = avgnum.length;
        for (var i = 0; i < avgarrlength; i++) {
            averageNumber = averageNumber + Number(avgnum[i]["num2"]);
        }
        avgresult = averageNumber / avgarrlength;
        res.send(JSON.stringify({
            "avg": avgresult,
        }));
    }
    findaveragenumber(avgnum);
});
app.post('/oneevenNumber', urlencodedParser, function(req, res) {
    var evennum = [{
        "num3": "1"
    }, {
        "num3": "2"
    }, {
        "num3": "3"
    }, {
        "num3": "4"
    }, {
        "num3": "5"
    }];

    function evennumber(evennum) {
        var evenarrlength = evennum.length;
        for (var i = 0; i < evenarrlength; i++) {
            var check = Number(evennum[i]["num3"]);
            if (check % 2 === 0) {
                res.end(JSON.stringify({
                    "result": "true"
                }));
            }
        }
        res.end(JSON.stringify({
            "result": "false"
        }));
    }
    evennumber(evennum);
});
app.post('/allevenNumber', urlencodedParser, function(req, res) {
    var allevennum = [{
        "num4": "2"
    }, {
        "num4": "4"
    }, {
        "num4": "6"
    }, {
        "num4": "8"
    }, {
        "num4": "10"
    }];

    function checkwheatheralleven(allevennum) {
        var allevenarrlength = allevennum.length;
        for (var i = 0; i < allevenarrlength; i++) {
            var check = Number(allevennum[i]["num4"]);
            if (check % 2 === 1) {
                res.send(JSON.stringify({
                    "result1": "false"
                }));
            }
        }
        res.send(JSON.stringify({
            "result1": "true"
        }));
    }
    checkwheatheralleven(allevennum);
});
app.post('/getTwiceString/:string1', function(req, res) {
    var somevar = req.params.string1;
    var stringchecktwice = [{
        "num5": "red"
    }, {
        "num5": "blue"
    }, {
        "num5": "blue"
    }, {
        "num5": "green"
    }, {
        "num5": "yellow"
    }, {
        "num5": "red"
    }];

    function findStringInArrayTwice(stringchecktwice, somevar) {
        var stringlength = stringchecktwice.length;
        for (var i = 0; i < stringlength; i++) {
            console.log("------++++-----" + req.params.string1);
            if (somevar.trim() === (String(stringchecktwice[i][
                "num5"
            ]).trim())) {
                for (var j = i + 1; j < stringlength; j++) {
                    if (somevar.trim() === (String(stringchecktwice[
                        j]["num5"]).trim())) {
                        console.log("------++++-----" + req.params.string1);
                        res.end(JSON.stringify({
                            "result": "true"
                        }));
                    }
                }
            }
        }
        res.end(JSON.stringify({
            "result": "false"
        }));
    }
    findStringInArrayTwice(stringchecktwice, somevar);
});
app.post('/checkstringonce/:string2', function(req, res) {
    var somevar2 = req.params.string2;
    var stringcheckonce = [{
        "num6": "red"
    }, {
        "num6": "blue"
    }, {
        "num6": "green"
    }, {
        "num6": "yellow"
    }, ];

    function findStringInArrayOnce(stringcheckonce, somevar2) {
        var stringlength = stringcheckonce.length;
        for (var i = 0; i < stringlength; i++) {
            console.log("------++++-----" + req.params.string2);
            if (somevar2.trim() === (String(stringcheckonce[i][
                "num6"
            ]).trim())) {
                res.end(JSON.stringify({
                    "result1": "true"
                }));
            }
        }
        res.end(JSON.stringify({
            "result1": "false"
        }));
    }
    findStringInArrayOnce(stringcheckonce, somevar2);
});
app.listen(3000);
console.log("listening to port 3000");