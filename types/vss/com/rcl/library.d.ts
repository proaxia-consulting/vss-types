import * as Enums from "vss/com/rcl/model/Enums";
declare const thisLib: {
    [key: string]: unknown;
};
/**
 * @deprecated use vss.com.rcl.Enums.EntitySet instead
 */
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
/**
 * @deprecated use vss.com.rcl.Enums.EventChannel instead
 */
export declare const EventChannel: {
    readonly RentalContractManagement: "RentalContractManagement";
};
/**
 * @deprecated use vss.com.rcl.Enums.EventChannelType instead
 */
export type EventChannelType = Enums.EventChannelType;
/**
 * @namespace vss.com.rcl
 */
export default thisLib;
