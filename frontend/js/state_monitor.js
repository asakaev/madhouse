
$(document).ready(function(e) {
    $('#BTN').on('click', function(){ 
        var BTN = $('#BTN');
        if (BTN.hasClass('btn-grey')) {
            BTN.removeClass('btn-grey');
            BTN.addClass('btn-success');
			BTN.html('ON')
        }
        else {
            if (BTN.hasClass('btn-success')){
            BTN.removeClass('btn-success');
            BTN.addClass('btn-danger');
			BTN.html('OFF');
            }
            else
            { 
                if(BTN.hasClass('btn-danger')){
                BTN.removeClass('btn-danger');
                BTN.addClass('btn-warning');
                        BTN.html('Danger');
                    }
               else 
               {
                  BTN.removeClass('btn-warning');
                  BTN.addClass('btn-grey');
               }
            }
        }
        
       		
    });
    
    
});


