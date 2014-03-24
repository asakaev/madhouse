function Device()
{
    this.name = "";
    this.address = "";
    this.typeDevice = "";
    this.status = false;
    this.timespan = new Date();   

}

var Device = function(name, address,type,status,timespan) {
    this.name = name;
    this.address = address;
    this.typeDevice = type;
    this.status = status;
    this.timespan =timespan;
}