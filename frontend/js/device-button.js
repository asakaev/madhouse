function DeviceButton(addr, name) {
	this.deviceAddress = addr;
	this.deviceName = name;
	this.state = 0;
	this.message = "";
  this.render = function() {
  	var buttonClass = "";
  	switch (state){
  		case 0 :
 		buttonClass = btn-grey;
  		break;
  		case 1 :
  		buttonClass = btn-success;
  		break;
  		case 2 :
  		buttonClass = btn-danger;
	  	break;
	  	case 3 :
	  	buttonClass = brn-warning;
	  	break;
	  	default:
	  	alert ("Ни понятно же");
	}
  	return "<button type=\"submit\" class=\"btn btn-grey btn-large\" id=\"BTN\" title=\''+this.message+'\'>'+this.deviceName+'</button>";
  }
  this.toggle = function(state) {
  	switchDeviceToState(state);	
  	}
  }
}
