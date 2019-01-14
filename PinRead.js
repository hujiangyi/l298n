const rpio = require('rpio');

function PinRead(pin) {
    this.pin = pin;
    rpio.open(pin,rpio.INPUT,rpio.LOW);
}
Object.assign(PinPWM.prototype, {
    value : function () {
        return rpio.read(this.args.pin);
    }
});

Object.defineProperty(PinPWM.prototype, 'pin', {
    get: function(){
        return this.pin ;
    },
    set: function(value){
        this.pin = value;
    }
});
exports = PinRead;