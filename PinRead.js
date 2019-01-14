const rpio = require('rpio');

exports.args = {
    pin:null,
};
exports.init = function (pin) {
    this.args.pin = pin;
    rpio.open(pin,rpio.INPUT,rpio.LOW);
};
exports.value = function () {
    return rpio.read(this.args.pin);
};
