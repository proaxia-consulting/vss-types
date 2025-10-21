import type { IFilterBar, IListReportController } from "vss/com/fe/ListReport";
export type IFilterAwareController = {
    _getFilterBarControl(): IFilterBar;
} & IListReportController;
