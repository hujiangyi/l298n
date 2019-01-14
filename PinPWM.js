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

Object.defineProperty(PinPWM.prototype, 'pin', {
    get: function(){
        return this.pin ;
    },
    set: function(value){
        this.pin = value;
    }
});

Object.defineProperty(PinPWM.prototype, 'clock', {
    get: function(){
        return this.clock ;
    },
    set: function(value){
        this.clock = value;
    }
});

Object.defineProperty(PinPWM.prototype, 'range', {
    get: function(){
        return this.range ;
    },
    set: function(value){
        this.range = value;
    }
});
exports = PinPWM;
