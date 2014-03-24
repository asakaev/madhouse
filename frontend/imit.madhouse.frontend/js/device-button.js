function DeviceButton(addr, name, state) {
	this.deviceAddress = addr;
	this.deviceName = name;
	this.state = state;
	this.message = "";

    this.render = function() {
  	var buttonClass = "";
  	switch (this.state){
  		case 0 :
 		buttonClass = 'btn-grey';
  		break;
  		case 1 :
  		buttonClass = 'btn-success';
  		break;
  		case 2 :
  		buttonClass = 'btn-danger';
	  	break;
	  	case 3 :
	  	buttonClass = 'brn-warning';
	  	break;
	  	default:
	  	alert ("Ни понятно же");
	}
  	return "<button type=\"submit\" class=\"btn "+buttonClass+" btn-large\" id=\""+ this.deviceName+ "\" title=\''" +
            +this.message+'>'+this.deviceName+'</button>';
  }
  this.toggle = function(state) {
  	switchDeviceToState(state);	
  }
}
