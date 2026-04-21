import type { TPaymentParameter } from "com/pacg/dpf_pp/types/types";
import { EIntegrationType } from "com/pacg/dpf_pp/types/types";
/**
 * @namespace com.pacg.dpf_pp.model
 */
export default class ApiWrapper {
    private _integrationType;
    private _apiSessionId;
    private _containerElementId;
    constructor(_integrationType: EIntegrationType, _apiSessionId: string, _containerElementId: string);
    attachErrorMessage(handler: (message: string) => void): void;
    initLibrary(): Promise<void>;
    loadPaymentTypes(transactionId: string, parameters?: TPaymentParameter[]): Promise<string[]>;
    selectPaymentType(paymentTypeId: string): Promise<string | undefined>;
    get integrationType(): EIntegrationType;
    get loaded(): boolean;
    private _handleDpfNotification;
    private _sendErrorMessage;
    private _dpaoApi;
    private _dpfApi;
    private _msgHandlers;
}
