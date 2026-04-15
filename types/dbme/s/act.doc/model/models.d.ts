import JSONModel from "sap/ui/model/json/JSONModel";
export declare const Severity: {
    readonly info: "info";
    readonly error: "error";
    readonly success: "success";
    readonly warning: "warning";
};
export type SeverityType = (typeof Severity)[keyof typeof Severity];
export type MessageResponse = {
    code: string;
    message: string;
    responseText?: string;
    severity: SeverityType;
    target?: string;
    transition?: boolean;
};
export type BatchResponse = MessageResponse & {
    __batchResponses: {
        __changeResponses?: {
            headers: {
                [key: string]: string;
                "sap-message"?: string;
            };
        }[];
        response?: {
            body?: string;
        };
    }[];
    details?: MessageResponse[];
    error?: {
        innererror?: {
            errordetails?: MessageResponse[];
        };
    };
    statusCode?: string;
};
declare const models: {
    createDeviceModel(): JSONModel;
};
/**
 * @namespace dbme.s.act.doc.model
 */
export default models;
