var Config =
{
    url: 'http://192.168.123.109:1337/'
};

function start() {

    var service = new Service();
    service.startService();

    var deviceCrud = new DeviceCrud();
    deviceCrud.getListDevice(function(devicesArr){
        var buttons = [];
        for (var i in devicesArr){
            // создать кнопку
            var devBtn = new DeviceButton(devicesArr[i].address,
                                          devicesArr[i].name);
            buttons.push(devBtn);

            var buttonHtml = devBtn.render();

            $('#button-container').append(buttonHtml).on('click', function(sender){
                // получить информацию о состоянии кнопки
                // в зависимости от состояния включать или выключать устройство
                var devManipulate = new DeviceManipulate();
                var requestResult = devManipulate.enableDevice(devicesArr[i], function(info){
                    if (info!=0)
                    {
                        //alert(info);
                        var ii = i;
                        var btnControl = $('#'+sender.target.id);
                        btnControl.removeClass('btn-danger')
                        btnControl.removeClass('btn-success');
                        btnControl.removeClass('btn-grey');
                        btnControl.addClass('btn-warning');
                    }
                    else {
                        btnControl.removeClass('btn-danger');
                        btnControl.removeClass('btn-warning');
                        btnControl.removeClass('btn-grey');
                        btnControl.addClass('btn-success');
                    }
                });



            });

        }

    });




}




