import Context from "sap/ui/model/odata/v4/Context";
export type $HandoverNavigationContextInfo = {
    bindingContext?: Context;
    sourceBindingContext?: {
        Handover?: string;
        OutboundHandover?: string;
        DeliveryDocument?: string;
        OutboundDelivery?: string;
        InboundDelivery?: string;
        DeliveryDocumentItem?: string;
        OutboundDeliveryItem?: string;
        InboundDeliveryItem?: string;
    };
};
