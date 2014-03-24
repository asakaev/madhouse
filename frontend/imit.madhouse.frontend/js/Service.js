function Service()
{
    this.startService = function()
    {
        $.ajax({
            url: Config.url +'?cmd=serviceon',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                if (data.res===1) {
                    console.log(data.info);
                    return data.info;
                }
                else {
                    return 0;
                }
            }
        });
    };

    this.stopServive = function()
    {
        $.ajax({
            url: Config.url +'?cmd=serviceoff',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                if (data.res===1) {
                    console.log(data.info);
                    return data.info;
                }
                else {
                    return 0;
                }
            }
        });
    };


    this.getServiceInfo = function()
    {
        $.ajax({
            url: Config.url +'?cmd=serviceinfo',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                if (data.res===1) {
                    console.log(data.info);
                    return data.info;
                }
                else {
                    return 0;
                }
            }
        });
    };

    this.rebootRpi = function()
    {
        $.ajax({
            url: Config.url +'?cmd=rebootpc',
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                if (data.res===1) {
                    console.log(data.info);
                    return data.info;
                }
                else {
                    return 0;
                }
            }
        });
    };

    this.renameRpi = function(newname)
    {
        $.ajax({
            url: Config.url +'?cmd=servicerename&newname='+ newname,
            dataType : "json",                     // тип загружаемых данных
            success: function (data, textStatus) { // вешаем свой обработчик на функцию success
                if (data.res===1) {
                    console.log(data.info);
                    return data.info;
                }
                else {
                    return 0;
                }
            }
        });
    };
}
