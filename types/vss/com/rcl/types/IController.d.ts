import type { IFilterBar, IListReportController } from "vss/com/fe/ListReport";
export interface IFilterAwareController extends IListReportController {
    _getFilterBarControl(): IFilterBar;
}
