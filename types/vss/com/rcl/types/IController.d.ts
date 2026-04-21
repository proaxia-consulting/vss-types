import type PageController from "sap/fe/core/PageController";
import type ListReportController from "sap/fe/templates/ListReport/ListReportController.controller";
import type FilterBar from "sap/ui/mdc/FilterBar";
export interface InvokablePageController extends PageController {
    invokeStart(): void;
}
export interface IFilterAwareController extends ListReportController {
    _getFilterBarControl(): FilterBar;
}
