export declare const EventChannel: {
    readonly RentalContractManagement: "RentalContractManagement";
};
export type EventChannelType = (typeof EventChannel)[keyof typeof EventChannel];
export declare const CharacteristicDataType: {
    readonly Numeric: "NUM";
    readonly String: "CHAR";
    readonly Currency: "CURR";
    readonly Date: "DATE";
    readonly Time: "TIME";
    readonly UserDefined: "UDEF";
};
export type CharacteristicDataTypeType = (typeof CharacteristicDataType)[keyof typeof CharacteristicDataType];
export declare const FieldDataType: {
    readonly Flag: "FLAG";
    readonly Numeric: "NUM";
    readonly String: "CHAR";
    readonly Currency: "CURR";
    readonly Date: "DATE";
    readonly Time: "TIME";
    readonly UserDefined: "UDEF";
};
export type FieldDataTypeType = (typeof FieldDataType)[keyof typeof FieldDataType];
export declare const EditMode: {
    readonly Display: "Display";
    readonly Editable: "Editable";
};
export declare const FixedString: {
    readonly eol: "\n\r";
};
export declare const ModelName: {
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
export type ModelNameType = (typeof ModelName)[keyof typeof ModelName];
export declare const AttachmentModelFunction: {
    readonly GetAttachmentCount: "GetAttachmentCount";
};
export declare const RentalClassType: {
    readonly Accessory: "A";
    readonly MainDevice: "M";
};
export type RentalClassTypeType = (typeof RentalClassType)[keyof typeof RentalClassType];
export declare const RentalAppUrl: {
    readonly ContractManagement: "/sap/bc/ui5_ui5/pacg/rsf_rcm";
    readonly ContractMaintenance: "/sap/bc/ui5_ui5/pacg/rsf_cm";
    readonly FleetManagement: "/sap/bc/ui5_ui5/pacg/rsf_rfm";
    readonly Handover: "/sap/bc/ui5_ui5/pacg/rsf_hdr";
};
export declare const SemanticObject: {
    readonly AssetDisplay: "pacg_rs_tcode_as03-display";
    readonly ContractManagement: "pacg_rsf_rcm";
    readonly ContractManagementDisplay: "pacg_rsf_rcm-display";
    readonly ContractMaintenance: "pacg_rsf_cm";
    readonly ContractMaintenanceDisplay: "pacg_rsf_cm-display";
    readonly Delivery: "pacg_rsf_dlv";
    readonly DeliveryDisplay: "pacg_rsf_dlv-display";
    readonly FleetManagement: "pacg_rsf_rfm";
    readonly FleetManagementDisplay: "pacg_rsf_rfm-display";
    readonly Handover: "pacg_rsf_hdr";
    readonly HandoverCreate: "pacg_rsf_hdr-create";
    readonly HandoverDisplay: "pacg_rsf_hdr-display";
    readonly EquipmentDisplay: "pacg_rs_tcode_ie03-display";
    readonly MaterialDisplay: "pacg_rs_tcode_mm03-display";
    readonly MeasurementDocumentCreate: "pacg_rs_tcode_ik22-create";
    readonly SalesContractDisplay: "pacg_rs_tcode_va43-display";
    readonly QuotationDisplay: "pacg_rs_tcode_va23-display";
    readonly VSSOrderCreate: "pacg_rs_tcode_dbe_order01-create";
};
export declare const ObjectPageSection: {
    readonly Accessories: "Accessories";
    readonly EquipmentHierarchy: "EquipmentHierarchy";
};
export declare const EntitySet: {
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
export type EntitySetType = (typeof EntitySet)[keyof typeof EntitySet];
/**
 * @deprecated use DocumentIOType instead
 */
export declare const DeliveryIOType: {
    readonly Inbound: "I";
    readonly Outbound: "O";
};
export type DeliveryIOTypeType = (typeof DeliveryIOType)[keyof typeof DeliveryIOType];
export declare const DocumentIOType: {
    readonly Inbound: "I";
    readonly Outbound: "O";
};
export type DocumentIOTypeType = (typeof DocumentIOType)[keyof typeof DocumentIOType];
export declare const SemanticObjectAction: {
    readonly create: "create";
    readonly display: "display";
};
export declare const PreferredMode: {
    readonly display: "display";
    readonly edit: "edit";
    readonly create: "create";
};
export declare const CreationMode: {
    readonly Async: "Async";
    readonly CreationRow: "CreationRow";
    readonly Deferred: "Deferred";
    readonly External: "External";
    readonly Inline: "Inline";
    readonly NewPage: "NewPage";
    readonly Sync: "Sync";
};
export declare const UnitOfMeasure: {
    readonly Piece: "PC";
    readonly PieceInternal: "ST";
};
