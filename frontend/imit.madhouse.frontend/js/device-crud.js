function DeviceCrud()
{
    this.createDevice = function(name, type, addr) {

        /*http://....?cmd=add&name=value&address=value&type=value                           */
        $.ajax({
            url: Config.url +'?cmd=add&name='+name+'&address='+addr+ 'value&type'+ type+'&tmp='+Math.floor(Math.random()*1000),
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };

    this.deleteDevice =  function(device) {

        //http://....?cmd=remove&name=value
        $.ajax({
            url: Config.url + '?cmd=remove&name=' + device.name + '&tmp=' + Math.floor(Math.random() * 1000),
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };

    this.getListDevice = function (callback) {
        var result = [];
        $.ajax({
            url: Config.url +'?cmd=getdevices'+'&tmp='+Math.floor(Math.random()*1000),
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
            url: Config.url + '?cmd=set&name=' + device.name + '&newname=' + newname + '&tmp=' + Math.floor(Math.random() * 1000),
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };

    this.updateAddressDevice =  function(device, newaddress) {
        $.ajax({
            url: Config.url + '?cmd=set&name=' + device.name + '&newaddress=' + newaddress + '&tmp=' + Math.floor(Math.random() * 1000),
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };

    this.updateTypeDevice = function (device, newtype) {
        $.ajax({
            url: Config.url + '?cmd=set&name=' + device.name + '&newaddress=' + newtype + '&tmp=' + Math.floor(Math.random() * 1000),
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    };
}


function AddDevice() {
    var t = document.getElementById('typ').value;
    var name = document.getElementById('name').value;
    var addr = document.getElementById('addr').value;

    //DeviceCrud.AddDevice(name, t, addr)

    $.ajax({
        url: Config.url + '?cmd=add&name=' + name + '&address=' + addr + 'value&type=' + t + '&tmp=' + Math.floor(Math.random() * 1000),
        dataType: "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

function DelDevice() {
    var name = document.getElementById('name').value;
    
   $.ajax({
       url: Config.url + '?cmd=remove&name=' + name +'&tmp=' + Math.floor(Math.random() * 1000),
        dataType: "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success

            //alert(da.)

            console.log(data);
        }
    });
}
