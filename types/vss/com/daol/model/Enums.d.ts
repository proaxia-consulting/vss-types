export declare const ControlId: {
    readonly ActOrgDataButton: "fe::CustomAction::caUserOrgData";
    readonly ConversionItemTable: "fe::table::_ConversionItem::LineItem";
};
export declare const ActionId: {
    readonly dataField: "DataFieldForAction";
    readonly gatewayPrefix: "com.sap.gateway.srvd.dbe.daol_conv.v0001.";
};
export declare const actionDataKey = "actionData";
export type ActionNameType = (typeof ActionName)[keyof typeof ActionName];
export declare const ActionName: {
    readonly TransferMaterial: "TransferMaterial";
    readonly Something: "Someting";
};
export type TActionEntity = {
    Action: string;
    ActionText?: string;
    Icon?: string;
    IsBehaviorAction: boolean;
    IsDialogAction: boolean;
};
export declare const Entity: {
    Header: string;
    Item: string;
};
export declare const ModelName: {
    i18n: string;
    orgData: string;
};
