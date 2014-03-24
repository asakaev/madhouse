var Config =
{
    //url: '/redirector.aspx?http://192.168.123.100:1337/'

    //url: '/redirector.aspx?http://192.168.123.144:8081/'
    url: '/redirector.aspx?http://192.168.123.142:8081/'
   
};


function start() {

   var service = new Service();
   // service.startService();

    var deviceCrud = new DeviceCrud();
    deviceCrud.getListDevice(function(devicesArr){
        var buttons = [];
        for (var i in devicesArr){
            // создать кнопку
            state = 0;
            if (devicesArr[i].status == true) { state = 1;}
            var devBtn = new DeviceButton(devicesArr[i].address,
                                          devicesArr[i].name, state);
            buttons.push(devBtn);

            var buttonHtml = devBtn.render();
            $('#button-container').append(buttonHtml);

            (function (device) {
                $('#'+device.name).on('click', function (sender) {
                    // получить информацию о состоянии кнопки
                    // в зависимости от состояния включать или выключать устройство
                    var devManipulate = new DeviceManipulate();
                    var cmd = 'on';
                    if (device.status == true)
                    {
                        cmd = 'off';
                    }

                    var requestResult = devManipulate.cmdDevice(device, cmd, function (info) {
                        var btnControl = $('#' + sender.target.id);
                        if (info != 0) {                                               
                            btnControl.removeClass('btn-danger')
                            btnControl.removeClass('btn-success');
                            btnControl.removeClass('btn-grey');
                            btnControl.removeClass('btn-warning');

                            btnControl.addClass('btn-warning');
                        }
                        else {
                            btnControl.removeClass('btn-danger');
                            btnControl.removeClass('btn-warning');
                            btnControl.removeClass('btn-grey');
                            btnControl.removeClass('btn-success');

                            device.status = !device.status;
                            if (device.status == true)
                            {
                                btnControl.addClass('btn-success');
                            }
                            else
                            {
                                btnControl.addClass('btn-grey');
                            }

                           
                        }
                    });



                });
            })(devicesArr[i]);
        }

    });




}




