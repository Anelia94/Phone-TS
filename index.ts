import { Call } from './classes/Call';
import { Phone } from './classes/Phone';
import { BatteryType } from './models/models';

function main() {
    const phone: Phone = new Phone('model', 'manufacturer');
    phone.price = 100;
    phone.battery = { model: 'baterryModel', hoursIdle: 100, hoursTalks: 200, batteryType: BatteryType.NiMH };
    phone.display = { size: 100, numberOfColors: 5000 };
    console.log(phone.model);
    console.log(phone.getInformation());

    const call1 = new Call('01012010', '20:30', '08556851', 60);
    const call2 = new Call('12052018', '00:15', '08985448', 3);
    const call3 = new Call('23012021', '14:31', '09845874', 240);

    phone.addCall(call1);
    phone.addCall(call3);
    phone.addCall(call2);
    console.log(phone.getTotalPriceOfTheCalls());
    phone.deleteCall(call2);
    //  phone.clearCallHistory();

};

main();