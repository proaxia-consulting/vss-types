export declare enum EIntegrationType {
    dpao = "DPA",
    psp = "PSP"
}
export declare enum EDPFApiErrorId {
    InternalError = "internal_error",
    Timeout = "timeout"
}
export declare enum EPaymentResultStatus {
    Cancelled = "A",
    Completed = "C",
    Failed = "F",
    InProgress = "P",
    Pending = "O",
    Rejected = "R"
}
export type TTargetDataError = {
    errorId: EDPFApiErrorId;
    message?: string;
};
export type TTargetDataFailure = {
    statusId: EPaymentResultStatus;
    redirectUrl: string;
};
export type TPaymentTransactionItem = {
    amount: number;
    currency: string;
    referenceName: string;
    referenceId: string;
};
export type TPaymentParameter = {
    name: string;
    value: string;
};
export type TPaymentTransactionPaymentType = {
    paymentTypeId: string;
    paymentTypeName: string;
    paymentTypeTitle: string;
    logoUrl: string;
    pspId: string;
    pspTransactionId: string;
    paymentUrl?: string;
    parameters?: TPaymentParameter[];
};
export type TPaymentTransactionRef = {
    text: string;
    link: string;
};
export type TPaymentTransactionInfo = {
    transactionId: string;
    paymentPageTitle: string;
    companyLogo: string;
    companyInfo: string;
    totalAmount: number;
    currency: string;
    referenceName: string;
    referenceId: string;
    items: TPaymentTransactionItem[];
    paymentTypes: TPaymentTransactionPaymentType[];
    selectedPaymentTypeId?: string;
    refs: TPaymentTransactionRef[];
    redirectUrl?: string;
    parameters?: TPaymentParameter[];
    loadedPaymentTypes?: TPaymentTransactionPaymentType[];
    singleSel?: boolean;
};
export type TPaymentTransactionStatus = {
    transactionId: string;
    statusId: EPaymentResultStatus;
    statusName: string;
    redirectUrl: string;
};
export type TRouteArguments = {
    "?query"?: {
        tr_id?: string;
        tbpsp?: string;
    };
};
