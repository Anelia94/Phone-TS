import { CallModel } from "../models/models";

export class Call implements CallModel {
    date: string;
    time: string;
    dialedPhoneNumber: string;
    duration: number;

    constructor(
        date: string,
        time: string,
        dialedPhoneNumber: string,
        duration: number) {
        this.date = date;
        this.time = time;
        this.dialedPhoneNumber = dialedPhoneNumber;
        this.duration = duration;
    }
}