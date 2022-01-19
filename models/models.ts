export interface PhoneModel {
    model: string;
    manufacturer: string;
    price?: number;
    owner?: string;
    battery?: BatteryModel;
    display?: DisplayModel;
}

export interface CallModel {
    date: string;
    time: string;
    dialedPhoneNumber: string;
    duration: number;
}

export interface BatteryModel {
    model: string;
    hoursIdle: number;
    hoursTalks: number;
    batteryType: BatteryType;
}

export interface DisplayModel {
    size: number;
    numberOfColors: number;
}

export enum BatteryType {
    LiIon = "LI-ION",
    NiMH = "NIMH",
    NiCd = "NICD"
}