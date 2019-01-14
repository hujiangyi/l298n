const rpio = require('rpio');

exports.args = {
    pin:null,
};
exports.init = function (pin) {
    this.args.pin = pin;
    rpio.open(pin,rpio.OUTPUT,rpio.LOW);
};
exports.HIGH = function () {
    rpio.write(this.args.pin, rpio.HIGH);
};
exports.LOW = function () {
    rpio.write(this.args.pin, rpio.LOW);
};
exports.value = function () {
    return rpio.read(this.args.pin);
};
