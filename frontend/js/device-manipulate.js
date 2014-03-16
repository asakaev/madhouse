function enableDevice(device) {
    //http://....?cmd=on&name=value
    $.ajax({
        url: Config.url +'?cmd=on&name=' + device.name,
        dataType : "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

function disableDevice(device) {

    //http://....?cmd=off&name=value
    $.ajax({
        url: Config.url +'?cmd=off&name=' + device.name,
        dataType : "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

