//var SerialPort = require("serialport").SerialPort
//var serialPort = new SerialPort("COM1", {
//  baudrate: 57600
//}, false);
//serialPort.open(function () {
//  console.log('open');
//  serialPort.on('data', function(data) {
//    console.log('data received: ' + data);
//  });
//  serialPort.write("wer1111111111222222", function(err, results) {
//    console.log('err ' + err);
//    console.log('results ' + results);
//  });
//});


































var http = require('http');
var url = require ('url');
var util = require('util');
var SerialPort = require("serialport").SerialPort;
var fs = require('fs');

var port = 1337;
var fileOn = "/some/fileOn";
var fileOff = "/some/fileOff";
var portCOM = "COM1";

var serialPort = new SerialPort(portCOM, { baudrate: 57600 }, false);
serialPort.open(function () {
  console.log('open');
  serialPort.write("start", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });
});


function Result()
{
    this.res = 0;
    this.info= " ";
}

http.createServer(function (req, res) {
    try{
			var urlParsed= url.parse(req.url, true);
			if(urlParsed.query.cmd == 'on') //1.3
			{   
				serialPort.write(fs.readFileSync(fileOn), function(err, results) {
						console.log('err ' + err);
						console.log('results ' + results);
				});
					
			}
			else if(urlParsed.query.cmd == 'off') //1.4
			{   
				serialPort.write(fs.readFileSync(fileOff), function(err, results) {
						console.log('err ' + err);
						console.log('results ' + results);
				}); 
			}

		var result = new Result();
					result.res = 1;
					result.info = "madhouse"; 
					res.end(JSON.stringify(result));
    }
    catch(e)
    {
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка:" + e; 
            res.end(JSON.stringify(result)); 
    }

}).listen(port);