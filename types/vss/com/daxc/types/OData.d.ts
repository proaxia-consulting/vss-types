import Time from "sap/ui/model/odata/type/Time";
export type TODataTime = {
    ms: number;
    __edmType: Time;
};
export type TODataResultObject = Record<string, unknown>;
export type TODataResponseData = {
    __count: number;
    results: TODataResultObject[];
};
