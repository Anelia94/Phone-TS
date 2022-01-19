"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
const PRICE_PER_MINUTE = 1.20;
class Phone {
    constructor(model, manufacturer, price, owner, battery, display) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
        this.battery = battery;
        this.display = display;
    }
    get model() {
        return this._model;
    }
    get manufacturer() {
        return this._manufacturer;
    }
    get price() {
        return this._price;
    }
    get owner() {
        return this._owner;
    }
    set model(model) {
        this._model = model;
    }
    set manufacturer(manufacturer) {
        this._manufacturer = manufacturer;
    }
    set price(price) {
        this._price = price;
    }
    set owner(owner) {
        this._owner = owner;
    }
    getInformation() {
        let information = `Model: ${this._model},
        Manufacturer: ${this._manufacturer}\n`;
        if (typeof this.battery !== 'undefined') {
            information += this.getBatteryInformation();
        }
        if (typeof this.display !== 'undefined') {
            information += this.getDisplayInformation();
        }
        return information;
    }
    addCall(call) {
        if (typeof this.callHistory === 'undefined') {
            this.callHistory = [];
        }
        this.callHistory.push(call);
    }
    deleteCall(call) {
        const callExist = this.callHistory.find(c => c === call) ? true : false;
        if (callExist) {
            const index = this.callHistory.findIndex(c => c === call);
            this.callHistory.splice(index, 1);
        }
        console.log(this.callHistory);
    }
    clearCallHistory() {
        this.callHistory = [];
    }
    getTotalPriceOfTheCalls() {
        const allSeconds = this.getAllSecondsOfTheCalls();
        let minutes = this.secondsToMinutes(allSeconds);
        let totalPrice = minutes * PRICE_PER_MINUTE;
        return totalPrice;
    }
    secondsToMinutes(seconds) {
        return seconds / 60;
    }
    getAllSecondsOfTheCalls() {
        let allSeconds = 0;
        for (let index = 0; index < this.callHistory.length; index++) {
            const currentCall = this.callHistory[index];
            const secondsForCurrentCall = currentCall.duration;
            allSeconds += secondsForCurrentCall;
        }
        return allSeconds;
    }
    getBatteryInformation() {
        return `Battery: 
    -Model: ${this.battery.model}
    -Type: ${this.battery.batteryType}\n`;
    }
    getDisplayInformation() {
        return `Display:
    -Size: ${this.display.size},
    -Colors: ${this.display.numberOfColors}`;
    }
}
exports.Phone = Phone;
