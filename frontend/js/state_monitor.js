
$(document).ready(function(e) {
    $('#ON').on('click', function(){ 
        var ON = $('#ON');
        if (ON.hasClass('btn-success')) {
            ON.removeClass('btn-success');
            ON.addClass('btn-danger');
			ON.html('OFF')
        }
        else {
            ON.removeClass('btn-danger');
            ON.addClass('btn-success');
			ON.html('ON');
	
        }
        
       		
    });
    
    
});


