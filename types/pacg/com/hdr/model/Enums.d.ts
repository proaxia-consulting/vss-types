export declare const ControlId: {
    readonly ActionCreate: "fe::table::DeliveryItem::LineItem::StandardAction::Create";
    readonly ActionEdit: "fe::StandardAction::Edit";
    readonly ActionDelete: "fe::StandardAction::Delete";
    readonly SectionHandoverItem: "fe::FacetSection::Items";
    readonly SectionHandoverCompare: "fe::FacetSection::Compare";
    readonly TableDeliveryItem: "fe::table::DeliveryItem::LineItem";
    readonly TableDeliveryItemGlobal: "pacg.com.hdr::DeliveryItemList--fe::table::DeliveryItem::LineItem";
    readonly TableHandoverItem: "fe::table::_Item::LineItem";
    readonly TableHandover: "fe::table::_Handover::LineItem";
    readonly SignatureHandover: "fe::CustomSubSection::Signature--SignatureHandover";
    readonly SignatureReceiving: "fe::CustomSubSection::Signature--SignatureReceiving";
};
export declare const RouteName: {
    readonly DeliveryItemList: "DeliveryItemList";
    readonly DeliveryItemObjectPage: "DeliveryItemObjectPage";
    readonly HandoverObjectPage: "HandoverObjectPage";
};
export declare const BOType: {
    readonly Handover: "/PACG/RSLH";
    readonly HandoverItem: "/PACG/RSLI";
};
export declare const AbapBool: {
    readonly True: "X";
    readonly False: "";
};
export declare const FieldGroupId: {
    readonly FieldValueWrapper: "FieldValueWrapper";
    readonly VoiceRecognitionWrapper: "VoiceRecognitionWrapper";
};
export declare const HandoverItemProperty: {
    readonly SignatureHandoverBinary: "SignatureHandover";
    readonly SignatureHandoverJson: "SignatureHandoverJson";
    readonly SignatureReceivingBinary: "SignatureReceiving";
    readonly SignatureReceivingJson: "SignatureReceivingJson";
};
export declare const EventId: {
    readonly dataReceived: "dataReceived";
};
export declare const QueryParam: {
    readonly Action: "i-action";
    readonly Delivery: "DeliveryDocument";
    readonly DeliveryItem: "DeliveryDocumentItem";
    readonly Handover: "Handover";
};
export declare const PrintoutArea: {
    readonly Rental: "/PACG/RS";
};
export declare const PrintoutObject: {
    readonly Handover: "HANDOVER";
};
export declare const ServiceNamespace: {
    Handover: string;
};
export declare const RAPAction: {
    readonly Edit: "Edit";
    readonly HandoverCreate: "HandoverCreate";
};
