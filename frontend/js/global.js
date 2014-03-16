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

            $('#button-container').append(buttonHtml).on('click', function(){
                // получить информацию о состоянии кнопки
                // в зависимости от состояния включать или выключать устройство
                var devManipulate = new DeviceManipulate();
                var requestResult = devManipulate.enableDevice(devicesArr[i]);

                if (requestResult.res===1)
                {
                    alert(requestResult.info);
                }
                else {
                    $('\''+devicesArr[i].name+'\'').removeClass('btn-danger');
                    $('\''+devicesArr[i].name+'\'').removeClass('brn-warning');
                    $('\''+devicesArr[i].name+'\'').removeClass('brn-grey');
                    $('\''+devicesArr[i].name+'\'').addClass('brn-success');
                }

            });

        }

    });




}




