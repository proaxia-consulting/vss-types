export declare const ModelName: {
    readonly actionData: "actionData";
    readonly action: "action";
    readonly attachment: "att";
    readonly cart: "cart";
    readonly cartMeta: "cartMeta";
    readonly device: "device";
    readonly i18n: "i18n";
    readonly local: "local";
    readonly ui: "ui";
    readonly pageInternal: "pageInternal";
    readonly internal: "internal";
    readonly rentalApp: "rentalApp";
    readonly tree: "tree";
    readonly sign: "sign";
};
export declare enum ActionType {
    Elementary = "",
    Interlinking = "I"
}
export type ActionTypeType = (typeof ActionType)[keyof typeof ActionType];
export declare const ActionId: {
    readonly dataField: "DataFieldForAction";
    readonly codePrefix: "com.sap.gateway.srvd.pacg.rso_fm.v0001.";
};
export declare const EntitySet: {
    readonly Action: "Action";
    readonly ActionDefaults: "ActionDefaults";
    readonly CharcFilter: "CharcFilter";
    readonly Charc: "CMCharc";
    readonly Contract: "Contract";
    readonly ContractCreate: "ContractCreate";
    readonly EquipmentHierarchyCustom: "EquipmentHierarchyCustom";
    readonly Root: "Root";
    readonly MaterialNS: "MaterialNS";
    readonly MainDeviceAccessory: "MainDeviceAccessory";
    readonly MainDeviceAccessoryCustom: "MainDeviceAccessoryCustom";
    readonly RentalEquipment: "RentalEquipment";
    readonly RentalEquipmentBase: "RentalEquipmentBase";
    readonly Delivery: "Delivery";
    readonly DeliveryItem: "DeliveryItem";
    readonly Handover: "Handover";
    readonly HandoverItem: "HandoverItem";
    readonly HandoverItemCheckListType: "HandoverItemCheckListType";
    readonly HandoverItemSection: " HandoverItemSection";
    readonly HandoverItemField: "HandoverItemField";
    readonly CheckListTypeDetermination: "CheckListTypeDetermination";
    readonly CheckListType: "CheckListType";
    readonly CheckListTypeSection: "CheckListTypeSection";
    readonly CheckListSection: "CheckListSection";
    readonly CheckListSectionField: "CheckListSectionField";
    readonly CheckListField: "CheckListField";
    readonly UnitOfMeasure: "I_UnitOfMeasure";
};
export declare const ControlId: {
    readonly mainTable: "fe::table::Equipment::LineItem";
};
export declare const FieldGroupId: {
    readonly ActionNonDialog: "ActionNonDialog";
    readonly TableItemButton: "TableItemButton";
    readonly ColumnEquipmentStructure: "ColumnEquipmentStructure";
};
export declare const RemoteAppId: {
    readonly RentalFleetManagement: "/PACG/RST";
};
export declare const RemoteMessageId: {
    readonly ActionExecute: "ACTION_EXECUTE";
};
export declare const InvocationGrouping: {
    readonly ChangeSet: "ChangeSet";
};
export declare const EquipmentSection: {
    readonly ActionLogs: "ActionLogs";
};
