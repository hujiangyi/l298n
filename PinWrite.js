const rpio = require('rpio');

function PinWrite(pin) {
    this.pin = pin;
    rpio.open(pin,rpio.OUTPUT,rpio.LOW);
}
Object.assign(PinPWM.prototype, {
    HIGH : function () {
        rpio.write(this.args.pin, rpio.HIGH);
    },
    LOW : function () {
        rpio.write(this.args.pin, rpio.LOW);
    },
    value : function () {
        return rpio.read(this.args.pin);
    },
});

Object.defineProperty(PinPWM.prototype, 'pin', {
    get: function(){
        return this.pin ;
    },
    set: function(value){
        this.pin = value;
    }
});
exports = PinWrite;