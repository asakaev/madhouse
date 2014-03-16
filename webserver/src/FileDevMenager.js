var Device = require('./Device');

function FileDevMenager()
{
    this.devices = new Array();
    this.GetDevice = function(name) //1.5
    {
       for(var i in this.devices) {
           if(this.devices[i].name == name)
            {
                return this.devices[i];
            }      
        }
        return undefined;
    }
    this.AddDevice = function(name,address,type) //1.1
    {
        var dev = new Device();
        dev.name = name;
        dev.address = address;
        dev.type = type;
        this.devices.push(dev);
        
    }
    this.RemoveDevice = function(name) //1.2
    {
        for(var i in this.devices) {
           if(this.devices[i].name == name)
            {
               this.devices.splice(i,1);
                return true;
            }      
        }
        return false;
    }
}
module.exports = FileDevMenager;