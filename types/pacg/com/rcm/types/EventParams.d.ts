import type Event from "sap/ui/base/Event";
import type MdcTable from "sap/ui/mdc/Table";
import type Context from "sap/ui/model/odata/v4/Context";
import type IAppComponent from "vss/com/fe/IAppComponent";
import type { IFilterBar, IListReportController } from "vss/com/fe/ListReport";
export type $MainListComponentOnInit = {
    component: IAppComponent;
};
export type $MainListControllerEvent = {
    controller: IListReportController;
    controls: MdcTable[];
    filterBar?: IFilterBar;
    event?: Event;
    state?: unknown;
};
export type $NavigationContextInfo = {
    bindingContext: Context;
};
