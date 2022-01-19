"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = require("./classes/Class");
const Phone_1 = require("./classes/Phone");
const models_1 = require("./models/models");
function main() {
    const phone = new Phone_1.Phone('model', 'manufacturer');
    phone.price = 100;
    phone.battery = { model: 'baterryModel', hoursIdle: 100, hoursTalks: 200, batteryType: models_1.BatteryType.NiMH };
    phone.display = { size: 100, numberOfColors: 5000 };
    console.log(phone.model);
    console.log(phone.getInformation());
    const call1 = new Class_1.Call('01012010', '20:30', '08556851', 60);
    const call2 = new Class_1.Call('12052018', '00:15', '08985448', 3);
    const call3 = new Class_1.Call('23012021', '14:31', '09845874', 240);
    phone.addCall(call1);
    phone.addCall(call3);
    phone.addCall(call2);
    console.log(phone.getTotalPriceOfTheCalls());
    phone.deleteCall(call2);
    phone.clearCallHistory();
}
;
main();
