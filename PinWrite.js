const rpio = require('rpio');

function PinWrite(pin) {
    this.pin = pin;
    rpio.open(pin,rpio.OUTPUT,rpio.LOW);
}
Object.assign(PinWrite.prototype, {
    HIGH : function () {
        rpio.write(this.pin, rpio.HIGH);
    },
    LOW : function () {
        rpio.write(this.pin, rpio.LOW);
    },
    value : function () {
        return rpio.read(this.pin);
    },
});
module.exports = PinWrite;