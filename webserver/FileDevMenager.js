

function DeviceMenager()
{
    this.devices = new Array();
    this.GetDevice = function(name)
    {
       for(var device in devices) {
           if(device.name == name)
            {
                return device;
            }      
        }
        return {};
    }
}
