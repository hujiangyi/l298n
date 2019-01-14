const rpio = require('rpio');

function PinRead(pin) {
    this.pin = pin;
    rpio.open(pin,rpio.INPUT,rpio.LOW);
}
Object.assign(PinRead.prototype, {
    value : function () {
        return rpio.read(this.args.pin);
    }
});
module.exports = PinRead;