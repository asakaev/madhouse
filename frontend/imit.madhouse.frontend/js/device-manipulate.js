function DeviceManipulate(){
    this.cmdDevice = function (device, cmd, callback) {

        $.ajax({
            url: Config.url +'?cmd='+cmd+'&name=' + device.name+ '&tmp=' + Math.floor(Math.random() * 1000),
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
}



