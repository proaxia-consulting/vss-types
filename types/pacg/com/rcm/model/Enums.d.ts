export { FixedString, ModelName } from "vss/com/rcl/model/Enums";
export declare const EventId: {
    readonly ContractCreateFinished: "ContractCreateFinished";
    readonly MainListComponentOnInit: "MainListComponentOnInit";
    readonly MainListControllerOnInit: "MainListControllerOnInit";
    readonly MainListControllerOnViewNeedsRefresh: "MainListControllerOnViewNeedsRefresh";
    readonly MainListControllerOnPendingFilters: "MainListControllerOnPendingFilters";
    readonly MainListControllerOnAfterRendering: "MainListControllerOnAfterRendering";
    readonly MainListControllerOnBeforeRendering: "MainListControllerOnBeforeRendering";
    readonly MainListOnActionButtonAddToCartPress: "MainListOnActionButtonAddToCartPress";
    readonly MainListOnActionButtonRemoveFromCartPress: "MainListOnActionButtonRemoveFromCartPress";
};
export type EventIdType = (typeof EventId)[keyof typeof EventId];
export declare const RouteName: {
    readonly Default: "RootList";
    readonly cc: {
        readonly ContractCreateList: "ContractCreateList";
        readonly ContractCreateObjectPage: "ContractCreateObjectPage";
    };
};
export declare const ControlId: {
    /**
     * @link https://sapui5.hana.ondemand.com/resources/sap/fe/templates/ObjectPage/view/fragments/FooterContent.fragment.xml
     */
    readonly cancelButton: "fe::FooterBar::StandardAction::Cancel";
    readonly classificationFilter: "idClassificationFilter";
    readonly contractItemsTable: "fe::table::_Items::LineItem";
    readonly fcl: "appContent";
    readonly materialTable: "fe::table::MaterialTab::LineItem";
    readonly rootControl: "appRootView";
    readonly rootFilter: "fe::FilterBar::Root";
    readonly rootTable: "fe::table::RootTab::LineItem";
    readonly saveButton: "fe::FooterBar::StandardAction::Save";
};
export declare const FieldGroupId: {
    readonly ColumnActions: "ColumnActions";
    readonly headerToolbar: "headerToolbar";
};
export declare const ComponentEventId: {
    readonly controllerRegistered: "controllerRegistered";
};
export declare const ControllerKey: {
    readonly ClassificationFilter: "pacg.com.rcm.controller.ClassificationFilter";
};
export declare const CustomDataKey: {
    readonly badge: "badge";
};
export declare enum RAPAction {
    Prepare = "com.sap.gateway.srvd.pacg.rso_cm.v0001.Prepare"
}
