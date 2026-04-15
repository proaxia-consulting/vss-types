import { TPaymentTransactionInfo, TPaymentTransactionStatus, TPaymentTypeItem } from "./types";
/**
 * @namespace com.pacg.dpao_pp
 */
export default class Dpao {
    private transactionId;
    private apiSessionId;
    private dpApi;
    private storage;
    constructor(transactionId: string);
    /**
     * Load DPAO JS library and initialize DPAO API instance
     * @param serviceId DPF Service Id
     * @returns Promise resolved when API has been initialized and is available
     */
    initLibrary(): Promise<void>;
    /**
     * Initiate payment via DPAO and load list of possible payment types
     * @returns Promise resolved to payment initialization data
     */
    initiatePayment(): Promise<TPaymentTransactionInfo>;
    /**
     * Get payment types from DPAO
     * @param paymentPageConfId Payment Page configuration Id (result of initiatePayment)
     * @param transactionId Transaction Id (result of initiatePayment)
     * @param buttonsContainerId Id of the container element for Payment Provider button controls
     * @returns Promise resolved to array of payment types (TPaymentTypeItem[])
     */
    getPaymentTypes(paymentPageConfId: string, dpaoTransactionId: string, buttonsContainerId: string): Promise<TPaymentTypeItem[]>;
    /**
     * Choose payment type and proceed with payment
     * @param paymentType Selected Payment Type code
     * @returns Promise resolved to TransactionByPaytSrvcPrvdr value returned by successfull payment
     */
    selectPaymentType(paymentType: string): Promise<string | null>;
    /**
     * Finalize payment after PSP processing finished
     * @param [transByPaytSrvcPrvdr]
     * @returns Promise resolved to transaction status
     */
    finalizePayment(transByPaytSrvcPrvdr?: string): Promise<TPaymentTransactionStatus>;
    /**
     * Load DPAO library script, if not already loaded
     * @param loaderUrl URL of DPAO JS library source
     * @returns Promise resolved when script loaded successfully
     */
    private loadScript;
    getTransactionId(): string;
    private setSessionId;
    private getSessionId;
}
