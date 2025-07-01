import { TODataTime } from "./OData";
export type TCardMyAppointments = {
    AppointmentDate: Date;
    Counter: string;
    IsCustomerWaiting: boolean;
    IsOrderDelayed: boolean;
    LicPlate: string;
    OrderNumber: string;
    Source: string;
    StartTime: TODataTime;
    Type: string;
};
export type TCardNps = {
    Value: number;
    Average: string;
    MaxValue: string;
    CounterRatings: string;
    CounterOrders: string;
};
export type TCardServiceOrders = TATaskIdentifier & {
    TaskStatusID: string;
    ExternalStatusID: string;
    Status: string;
    TaskName: string;
    Counter: string;
};
export type TCardServiceQuotations = TCardServiceOrders;
export type TCardMaj = {
    TaskStatus: string;
    TaskId: string;
    Description: string;
    Counter: number;
    Link: string;
};
export type TATaskIdentifier = {
    TaskID: string;
    TaskName: string;
};
export type TCardServiceOrdersClicked = TCardServiceOrders & {
    "Status.d": string;
};
export type TCardServiceQuotationsClicked = TCardServiceQuotations & {
    "Status.d": string;
};
