function createDevice(device) {

/*http://....?cmd=add&name=value&address=value&type=value                           */
    $.ajax({
        url: Config.url +'?cmd=add&name='+device.name+'&address='+device.address+ 'value&type'+ device.typeDevice,
        dataType : "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

function deleteDevice(device) {

    //http://....?cmd=remove&name=value
    $.ajax({
        url: Config.url +'?cmd=remove&name=' + device.name,
        dataType : "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

function getListDevice(device) {

    //http://....?cmd=getdevices
    $.ajax({
        url: Config.url +'?cmd=getdevices',
        dataType : "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

function updateNameDevice(device, newname) {
    $.ajax({
        url: Config.url +'?cmd=set&name='+ device.name + '&newname='+newname,
        dataType : "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

function updateAddressDevice(device, newaddress) {
    $.ajax({
        url: Config.url +'?cmd=set&name='+ device.name + '&newaddress='+newaddress,
        dataType : "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

function updateTypeDevice(device, newtype) {
    $.ajax({
        url: Config.url +'?cmd=set&name='+ device.name + '&newaddress='+newtype,
        dataType : "json",                     // тип загружаемых данных
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
            console.log(data);
        }
    });
}

/*
$.ajax({
    url: '?cmd=set&name=value&newname=value&newaddress=value&newtype=value',
    dataType : "json",                     // тип загружаемых данных
    success: function (data, textStatus) { // вешаем свой обработчик на функцию success
        console.log(data);
    }
});
    */