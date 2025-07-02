export declare enum EDpaoApiErrorId {
    Timeout = "timeout",
    Invalid_attribute = "invalid_attribute",
    Internal_error = "internal_error",
    Invalid_session = "invalid_session",
    Mandatory_attribute_missing = "mandatory_attribute_missing"
}
export declare enum EPaymentResultStatus {
    Completed = "C",
    InProgress = "P",
    Failed = "F",
    Rejected = "R"
}
export type TErrorData = {
    errorId: EDpaoApiErrorId;
    message?: string;
    description?: string;
    hasHistory?: boolean;
};
export type TPaymentTypeItem = {
    PaymentType: string;
    Name: string;
};
export type TPaymentTransactionItem = {
    amount: number;
    currency: string;
    referenceName: string;
    referenceId: string;
};
export type TPaymentTransactionPaymentType = {
    paymentType: string;
    paymentTypeName: string;
    logoUrl: string;
};
export type TPaymentTransactionDPAOInfo = {
    transactionId: string;
    paymentPageConfId: string;
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
    refs: TPaymentTransactionRef[];
    dpao: TPaymentTransactionDPAOInfo;
    selectedPaymentType?: string;
    redirectUrl?: string;
    failureReason?: string;
};
export type TPaymentTransactionStatus = {
    transactionId: string;
    statusId: EPaymentResultStatus;
    statusName: string;
};
