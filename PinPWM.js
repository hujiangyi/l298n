const rpio = require('rpio');

function PinPWM(pin,clock,range) {
    this.pin = pin;
    this.clock = clock;
    this.range = range;
    rpio.open(pin,rpio.PWM);
    rpio.pwmSetClockDivider(clock);
    rpio.pwmSetRange(pin, range);
}
Object.assign(PinPWM.prototype, {
    setData : function (data) {
        rpio.pwmSetData(this.pin, data);
    }
});
module.exports = PinPWM;
