import { PhoneModel, BatteryModel, DisplayModel } from "../models/models";
import { Call } from "./Class";

const PRICE_PER_MINUTE: number = 1.20;

export class Phone implements PhoneModel {
  private _model: string;
  private _manufacturer: string;
  private _price: number;
  private _owner: string;
  public battery: BatteryModel;
  public display: DisplayModel;
  public callHistory: Call[];

  get model(): string {
    return this._model;
  }
  get manufacturer(): string {
    return this._manufacturer;
  }
  get price(): number {
    return this._price;
  }
  get owner(): string {
    return this._owner;
  }

  set model(model: string) {
    this._model = model;
  }

  set manufacturer(manufacturer: string) {
    this._manufacturer = manufacturer;
  }

  set price(price: number) {
    this._price = price;
  }

  set owner(owner: string) {
    this._owner = owner;
  }

  constructor(
    model: string,
    manufacturer: string,
    price?: number,
    owner?: string,
    battery?: BatteryModel,
    display?: DisplayModel
  ) {
    this._model = model;
    this._manufacturer = manufacturer;
    this._price = price;
    this._owner = owner;
    this.battery = battery;
    this.display = display;
  }

  public getInformation(): string {
    let information: string = `Model: ${this._model},
        Manufacturer: ${this._manufacturer}\n`;

    if (typeof this.battery !== 'undefined') {
      information += this.getBatteryInformation();
    }

    if (typeof this.display !== 'undefined') {
      information += this.getDisplayInformation();
    }

    return information;
  }

  public addCall(call: Call): void {
    if (typeof this.callHistory === 'undefined') {
      this.callHistory = [];
    }
    this.callHistory.push(call);
  }

  public deleteCall(call: Call): void {
    const callExist = this.callHistory.find(c => c === call) ? true : false;
    if (callExist) {
      const index = this.callHistory.findIndex(c => c === call);
      this.callHistory.splice(index,1);
    }
  }

  public clearCallHistory(): void {
    this.callHistory = [];
  }

  public getTotalPriceOfTheCalls(): number {
    const allSeconds = this.getAllSecondsOfTheCalls();

    let minutes: number = this.secondsToMinutes(allSeconds);
    let totalPrice = minutes * PRICE_PER_MINUTE;
    return totalPrice;
  }

  private secondsToMinutes(seconds: number): number {
    return seconds / 60;
  }

  private getAllSecondsOfTheCalls(): number {
    let allSeconds = 0;
    for (let index = 0; index < this.callHistory.length; index++) {
      const currentCall: Call = this.callHistory[index];
      const secondsForCurrentCall: number = currentCall.duration;
      allSeconds += secondsForCurrentCall;
    }
    return allSeconds;
  }

  private getBatteryInformation(): string {
    return `Battery: 
    -Model: ${this.battery.model}
    -Type: ${this.battery.batteryType}\n`;
  }

  private getDisplayInformation(): string {
    return `Display:
    -Size: ${this.display.size},
    -Colors: ${this.display.numberOfColors}`;
  }
}
