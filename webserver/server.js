var http = require('http');
var url = require ('url');
var util = require('util');
var port = 1337;

function Result()
{
    this.res = 0;
    this.info= " ";
    }

http.createServer(function (req, res) {
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    var urlParsed= url.parse(req.url, true);


    if(urlParsed.query.cmd == 'add') //1.1
    {   
        var result = new Result();
        if(urlParsed.query.name && urlParsed.query.adress && urlParsed.query.type )
        {
            result.info = "Устройство добавлено";
        }
        else
        {
            result.res = 1;
            result.info = "Возникла ошибка при добавлении устройства";
        }          
    }
    if(urlParsed.query.cmd == 'remove') //1.2
    {   
        var result = new Result();
        if(urlParsed.query.name )
        {
            result.info = "Устройство удалено ";
        }
        else
        {
            result.res = 1;
            result.info = "Возникла ошибка при удалении устройства";
        }          
    }
    if(urlParsed.query.cmd == 'on') //1.3
    {   
        var result = new Result();
        if(urlParsed.query.name)
        {
            result.info = "Устройство включено";
        }
        else
        {
            result.res = 1;
            result.info = "Возникла ошибка при включении устройства";
        }          
    }
    if(urlParsed.query.cmd == 'off') //1.4
    {   
        var result = new Result();
        if(urlParsed.query.name && urlParsed.query.adress && urlParsed.query.type )
        {
            result.info = "Устройство выключено";
        }
        else
        {
            result.res = 1;
            result.info = "Возникла ошибка при выключении устройства";
        }          
    }
    if(urlParsed.query.cmd == 'getdevices') //1.5
    {   
        // ТУТ ДОЛЖЕН БЫТЬ СУПЕРМОДУЛЬ
                  
    }
    if(urlParsed.query.cmd == 'set') //1.6
    {   
        
        var result = new Result();
        if(urlParsed.query.name && (urlParsed.query.newname || urlParsed.query.newadress || urlParsed.query.newtype) )
        {
            result.info = "Информация об устройстве обновлена";
        }
        else
        {
            result.res = 1;
            result.info = "Возникла ошибка при обновлении информации об устройстве";
        }          
    }
    if(urlParsed.query.cmd == 'info' && urlParsed.query.name) //1.7
    {     
        var result = new Result();    
            //ТУТ ДОЛЖЕН БЫТЬ СУПЕРМОДУЛЬ
                      
    }
    if(urlParsed.query.cmd == 'serviceon') //2.1
    {   
        
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена";
     }
     if(urlParsed.query.cmd == 'serviceoff') //2.2
     {   
        
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена";
     }
     if(urlParsed.query.cmd == 'rebootpc') //2.3
     {   
        
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена";
     }
     if(urlParsed.query.cmd == 'serviceinfo') //2.4
     {   
        
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена";
     }
     if(urlParsed.query.cmd == 'servicerename') //2.5
     {   
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена"; 
     }
    res.end(util.inspect(result));

}).listen(port);
//var timer = setInterval(function(){
//    console.log("Hello!")}, 2000);