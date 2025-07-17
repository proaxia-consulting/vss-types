export declare const FixedString: {
    readonly eol: "\n\r";
};
export declare const ServiceStartupOptions: {
    readonly lazy: "lazy";
    readonly eager: "eager";
    readonly waitFor: "waitFor";
};
export declare const ServiceName: {
    readonly GlobalSettings: "GlobalSettingsService";
    readonly ManifestMiddleware: "ManifestMiddlewareService";
};
export declare const EntitySet: {
    readonly GlobalParameters: "GlobalParameters";
    readonly ContractShipToParty: "ContractShipToParty";
};
export type EntitySetType = (typeof EntitySet)[keyof typeof EntitySet];
export declare const ActionId: {
    readonly dataField: "DataFieldForAction";
    readonly codePrefix: "com.sap.gateway.srvd.pacg.rso_cm.v0001.";
};
export declare const RAPAction: {
    readonly Prepare: "com.sap.gateway.srvd.pacg.rso_cm.v0001.Prepare";
    readonly ContractShipToPartyAddrMaintain: "com.sap.gateway.srvd.pacg.rso_cm.v0001.ShipToAddrMaintain";
    readonly ConsignmentOrderCreate: "com.sap.gateway.srvd.pacg.rso_cm.v0001.ConsignmentOrderCreate";
    readonly ConsignmentReturnCreate: "com.sap.gateway.srvd.pacg.rso_cm.v0001.ConsignmentReturnCreate";
};
export declare const ControlId: {
    /**
     * @link https://sapui5.hana.ondemand.com/resources/sap/fe/templates/ObjectPage/view/fragments/FooterContent.fragment.xml
     */
    readonly cancelButton: "fe::FooterBar::StandardAction::Cancel";
    readonly saveButton: "fe::FooterBar::StandardAction::Save";
};
export declare const ModelName: {
    readonly action: "action";
    readonly device: "device";
    readonly i18n: "i18n";
    readonly local: "local";
    readonly ui: "ui";
    readonly pageInternal: "pageInternal";
    readonly internal: "internal";
    readonly GlobalParameters: "GlobalParameters";
};
export type ModelNameType = (typeof ModelName)[keyof typeof ModelName];
export declare const RouteName: {
    readonly ContractObjectPage: "ContractObjectPage";
    readonly ContractItemOVObjectPage: "ContractItemOVObjectPage";
};
export declare const PrintoutArea: {
    readonly Rental: "/PACG/RS";
};
export declare const PrintoutObject: {
    readonly Contract: "CONTRACT";
    readonly Quotation: "QUOTATION";
};
export declare const DocumentCategory: {
    readonly Quotation: "B";
};
export declare const QueryParam: {
    readonly SalesDocument: "SalesDocument";
    readonly CurrentContract: "CurrentContract";
    readonly Contract: "Contract";
};
