export type TSrvRequest = {
    token: string;
    action?: string;
};
export type TSrvResponse = {
    status: string;
    message: string;
    details?: TDiscountDetails;
};
export type TDiscountDetails = {
    orderNo: string;
    orderTxt: string;
    itemNo: string;
    itemTxt: string;
    currency: string;
    customerNo: string;
    customerName: string;
    requester: string;
    requesterName: string;
    discountValue: number;
    discountAmount: number;
    netAmount: number;
    marginAmount: number;
};
export type TModelData = {
    token: string;
    message?: string;
    actionDone?: string;
    details: TDiscountDetails;
};
export type TActionCode = "APP" | "REJ";
