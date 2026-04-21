import type { TPaymentParameter, TPaymentTransactionInfo, TPaymentTransactionStatus } from "com/pacg/dpf_pp/types/types";
/**
 * @namespace com.pacg.dpf_pp.model
 */
export default class Payment {
    private _transactionId;
    private _containerElementId;
    constructor(_transactionId: string, _containerElementId: string);
    loadLibrary(): Promise<void>;
    initiatePayment(restoreSession?: boolean): Promise<TPaymentTransactionInfo>;
    finalizePayment(transByPmntSrvProv?: string): Promise<TPaymentTransactionStatus>;
    get transactionId(): string;
    private requestLoader;
    private requestInitiate;
    private requestFinalize;
    loadPaymentTypes(parameters?: TPaymentParameter[]): Promise<string[]>;
    selectPaymentType(paymentTypeId: string): Promise<string | undefined>;
    private setSessionId;
    private getSessionId;
    private loadScript;
    private _storage;
    private _apiWrapper;
}
export declare class PaymentFactory {
    /**
     * Factory method for delayed Payment singleton creation
     *
     * @param {string} transactionId id of the transaction
     * @returns {Promise<Payment>}
     */
    static getPayment(transactionId?: string): Promise<Payment>;
    private static _factoryPromise;
    private static _factoryResolve;
    private static _payment;
}
