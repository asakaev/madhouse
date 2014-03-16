function DeviceCrud()
{
    this.createDevice = function(device) {

        /*http://....?cmd=add&name=value&address=value&type=value                           */
        $.ajax({
            url: Config.url +'?cmd=add&name='+device.name+'&address='+device.address+ 'value&type'+ device.typeDevice,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };

    this.deleteDevice =  function(device) {

        //http://....?cmd=remove&name=value
        $.ajax({
            url: Config.url +'?cmd=remove&name=' + device.name,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };

    this.getListDevice = function (callback) {
        var result = [];
        $.ajax({
            url: Config.url +'?cmd=getdevices',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success

                for(var i in data){
                    var device = new Device(data[i].name, data[i].address,
                                            data[i].type, data[i].status,
                                            data[i].timespan );
                    result.push(device);
                }
                callback( result );
            }
        });

    };

    this.updateNameDevice =  function (device, newname) {
        $.ajax({
            url: Config.url +'?cmd=set&name='+ device.name + '&newname='+newname,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };

    this.updateAddressDevice =  function(device, newaddress) {
        $.ajax({
            url: Config.url +'?cmd=set&name='+ device.name + '&newaddress='+newaddress,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };

    this.updateTypeDevice = function (device, newtype) {
        $.ajax({
            url: Config.url +'?cmd=set&name='+ device.name + '&newaddress='+newtype,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };
}
