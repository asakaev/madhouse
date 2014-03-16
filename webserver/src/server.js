var http = require('http');
var url = require ('url');
var util = require('util');
var port = 1337;
var FileDevMenager = require('./FileDevMenager');



var devMenager = new FileDevMenager();
//devMenager.AddDevice("Табуретка",1212,"Мебель");
//devMenager.AddDevice("Чайник",2452,"Электро");
//devMenager.AddDevice("Кондишн",7799,"Электро");
//devMenager.AddDevice("Телевизор",4356,"Электро");
//devMenager.AddDevice("Холодильник",1341,"Электро");
//devMenager.AddDevice("Светильник",1122,"Электро");
//console.log(devMenager.GetDevice());
//devMenager.RemoveDevice("Табуретка");
//devMenager.OnDevice("Светильник");
//devMenager.InfoDevice("Светильник");


//var GetDev = devMenager.GetDevice(2);
//console.log(GetDev.address);


function Result()
{
    this.res = 0;
    this.info= " ";
    }

http.createServer(function (req, res) {
   // res.writeHead(200, { 'Content-Type': 'text/plain' });
    try{
    var urlParsed= url.parse(req.url, true);

    
    if(urlParsed.query.cmd == 'add') //1.1
    {   
        var result = new Result();
        if(urlParsed.query.name && urlParsed.query.address && urlParsed.query.type )
        {
            devMenager.AddDevice(urlParsed.query.name,urlParsed.query.address,urlParsed.query.type);
            result.info = "Устройство добавлено";
            res.end(JSON.stringify(result));
        }
        else
        {
            result.res = 1;
            result.info = "Возникла ошибка при добавлении устройства";
            res.end(JSON.stringify(result));
        }          
    }
    if(urlParsed.query.cmd == 'remove') //1.2
    {   
        var result = new Result();
        if(urlParsed.query.name )
        {
            if(devMenager.RemoveDevice(urlParsed.query.name))
            {
                result.info = "Устройство удалено ";
                res.end(JSON.stringify(result));
            }
            else
            {
                result.res = 1;
                result.info = "Возникла ошибка при удалении устройства";
                res.end(JSON.stringify(result));
            }  
        }        
    }
    if(urlParsed.query.cmd == 'on') //1.3
    {   
        var result = new Result();
        if(urlParsed.query.name)
        {
            if(devMenager.OnDevice(urlParsed.query.name))
            {
                result.info = "Устройство включено";
                res.end(JSON.stringify(result));
            }
            else
            {
                result.res = 1;
                result.info = "Возникла ошибка при включении устройства";
                res.end(JSON.stringify(result));
            } 
        }         
    }
    if(urlParsed.query.cmd == 'off') //1.4
    {   
        var result = new Result();
        if(urlParsed.query.name)
        {
            if(devMenager.OffDevice(urlParsed.query.name))
            {
            
                result.info = "Устройство выключено";
                res.end(JSON.stringify(result));
            }
            else
            {
                result.res = 1;
                result.info = "Возникла ошибка при выключении устройства";
                res.end(JSON.stringify(result));
            } 
         }         
    }
    if(urlParsed.query.cmd == 'getdevices') //1.5
    {   
       res.end(JSON.stringify(devMenager.GetDevices()));             
    }
    if(urlParsed.query.cmd == 'set') //1.6
    {   
        
        var result = new Result();
        if(urlParsed.query.name && (urlParsed.query.newname || urlParsed.query.newaddress || urlParsed.query.newtype) )
        {
            result.info = "Информация об устройстве обновлена";
            res.end(JSON.stringify(result));
        }
        else
        {
            result.res = 1;
            result.info = "Возникла ошибка при обновлении информации об устройстве";
            res.end(JSON.stringify(result));
        }          
    }
    if(urlParsed.query.cmd == 'info' && urlParsed.query.name) //1.7
    {            
        res.end(JSON.stringify(devMenager.InfoDevice(urlParsed.query.name)));                     
    }
    if(urlParsed.query.cmd == 'serviceon') //2.1
    {   
        
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена";
            res.end(JSON.stringify(result));
     }
     if(urlParsed.query.cmd == 'serviceoff') //2.2
     {   
        
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена";
            res.end(JSON.stringify(result));
     }
     if(urlParsed.query.cmd == 'rebootpc') //2.3
     {   
        
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена";
            res.end(JSON.stringify(result));
     }
     if(urlParsed.query.cmd == 'serviceinfo') //2.4
     {   
        
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена";
            res.end(JSON.stringify(result));
     }
     if(urlParsed.query.cmd == 'servicerename') //2.5
     {   
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка. Работа со службой пока не предусмотрена"; 
            res.end(JSON.stringify(result));
     }
    }
    catch(e)
    {
        var result = new Result();
            result.res = 1;
            result.info = "Возникла ошибка:" + e; 
            res.end(JSON.stringify(result)); 
    }

}).listen(port);
//var timer = setInterval(function(){
//    console.log("Hello!")}, 2000);