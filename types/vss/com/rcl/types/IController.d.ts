import type PageController from "sap/fe/core/PageController";
import type ListReportController from "sap/fe/templates/ListReport/ListReportController.controller";
import type FilterBar from "sap/ui/mdc/FilterBar";
export type InvokablePageController = {
    invokeStart(): void;
} & PageController;
export type IFilterAwareController = {
    _getFilterBarControl(): FilterBar;
} & ListReportController;
