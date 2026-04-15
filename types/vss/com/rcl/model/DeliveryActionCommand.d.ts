import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
/**
 * Keep in sync with the /PACG/RSO_I_LMDELIVERY behavior definition
 */
export declare const DeliveryAction: {
    readonly OutboundDelivery: "OutboundDelivery";
    /** @deprecated Do not use! */
    readonly PartialDelivery: "PartialDelivery";
    readonly ManufacturerSerialNo: "ManufacturerSerialNo";
    readonly GoodsIssue: "GoodsIssue";
    readonly ReverseGoodsMvmnt: "ReverseGoodsMvmnt";
    readonly DeleteDelivery: "DeleteDelivery";
    readonly InboundDelivery: "InboundDelivery";
    readonly GoodsReceipt: "GoodsReceipt";
    readonly SerialNoUpdate: "SerialNoUpdate";
};
export type DeliveryActionType = (typeof DeliveryAction)[keyof typeof DeliveryAction];
export declare function ODataActionName(a: DeliveryActionType, withDots?: boolean): string;
export declare function knownDeliveryActions(model: ODataModel): string[];
