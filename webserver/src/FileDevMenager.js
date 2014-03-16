var Device = require('./Device');
var fs = require('fs');


function FileDevMenager()
{
    this.devices = new Array();
    this.devices = JSON.parse(fs.readFileSync('/some/test.txt', 'utf8'));
    this.AddDevice = function(name,address,type) //1.1
    {
        for(var i in this.devices) {
            if(this.devices[i].name == name)
            {
                return false; 
            }
        }
        var dev = new Device();
        dev.name = name;
        dev.address = address;
        dev.type = type;
        this.devices.push(dev);  
        fs.writeFileSync('/some/test.txt', JSON.stringify(this.devices));
        return true;
    }   
    this.RemoveDevice = function(name) //1.2
    {
        for(var i in this.devices) {
           if(this.devices[i].name == name)
            {
               this.devices.splice(i,1);
               fs.writeFileSync('/some/test.txt', JSON.stringify(this.devices));
                return true;
            }      
        }
        return false;
    }
    this.OnDevice = function(name) //1.3
    {
        for(var i in this.devices) {
           if(this.devices[i].name == name)
            {
                if(this.devices[i].status == false)
                {
                    this.devices[i].status = true;
                    this.devices[i].timespan = new Date();
                    fs.writeFileSync('/some/test.txt', JSON.stringify(this.devices));
                    return true;
                }
            }
            return false;
        }
    }
    this.OffDevice = function(name) //1.4
    {
        for(var i in this.devices) {
           if(this.devices[i].name == name)
            {
                if(this.devices[i].status == true)
                {         
                    this.devices[i].status = false;
                    this.devices[i].timespan = new Date();
                    fs.writeFileSync('/some/test.txt', JSON.stringify(this.devices));
                    return true;
                }
            }
            return false;
        }
    }
    this.GetDevices = function() //1.5
    {
        return this.devices;     

    }
    this.SetDevice = function(name, newname, newaddress, newtype) //1.6
    {
        var param = false;
        for(var i in this.devices) {
           if(this.devices[i].name == name)
            {
                
                if(newname != undefined) 
                {
                    this.devices[i].name = newname;
                    param = true;
                }
                if(newaddress != undefined)
                {
                    this.devices[i].address = newaddress;
                    param = true;
                }
                if(newtype != undefined)
                {
                    this.devices[i].type = newtype;
                    param = true;
                }
            }
        }
        fs.writeFileSync('/some/test.txt', JSON.stringify(this.devices));
        return param;
    }    

    this.InfoDevice = function(name) //1.7
    {
        for(var i in this.devices) {
           if(this.devices[i].name == name)
            {
                return this.devices[i];
            }
            return undefined;
        }
    }
}
module.exports = FileDevMenager;