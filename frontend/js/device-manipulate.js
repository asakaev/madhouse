function DeviceManipulate(){
    this.enableDevice =  function fn(device, callback) {

        $.ajax({
            url: Config.url +'?cmd=on&name=' + device.name,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                if (data.res===1)
                {
                    callback(data.info);
                }
                else {
                    callback(0) ;
                }

            }
        });
    }

    this.disableDevice = function(device) {

        //http://....?cmd=off&name=value
        $.ajax({
            url: Config.url +'?cmd=off&name=' + device.name,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                if (data.res===1)
                {
                    return (data.info);
                }
                else{
                    return 0;
                }
            }
        });
    }
}



