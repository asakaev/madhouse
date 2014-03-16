function Service()
{
    startService()
    {
        $.ajax({
            url: Config.url +'?cmd=serviceon',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    }

    stopServive()
    {
        $.ajax({
            url: Config.url +'?cmd=serviceoff',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    }

    getServiceInfo()
    {
        $.ajax({
            url: Config.url +'?cmd=serviceinfo',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    }

    rebootRpi()
    {
        $.ajax({
            url: Config.url +'?cmd=rebootpc',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    }

    renameRpi(newname)
    {
        $.ajax({
            url: Config.url +'?cmd=servicerename&newname='+ newname,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                console.log(data);
            }
        });
    }
}
