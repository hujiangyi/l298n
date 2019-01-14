const rpio = require('rpio');

exports.args = {
    pin:null,
    clock:null,
    range:null,
};
exports.init = function (pin,clock,range) {
    this.args.pin = pin;
    this.args.clock = clock;
    this.args.range = range;
    rpio.open(pin,rpio.PWM);
    rpio.pwmSetClockDivider(clock);
    rpio.pwmSetRange(pin, range);
};
exports.setData = function (data) {
    rpio.pwmSetData(this.args.pin, data);
};