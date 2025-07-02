import type Event from "sap/ui/base/Event";
import type { Table$RowSelectionChangeEvent } from "sap/ui/table/Table";
import type IController from "dbme/w/lib/core/SmartReport/controller/SmartReportController";
import type { SmartTable$BeforeRebindTableEvent } from "sap/ui/comp/smarttable/SmartTable";
declare const SmartReportTableHandler: {
    onBeforeRebind(this: IController, event: SmartTable$BeforeRebindTableEvent): void;
    onRefresh(this: IController, event: Event): void;
    onSelectionChange(this: IController, event: Table$RowSelectionChangeEvent): void;
};
/**
 * @namespace dbme.w.lib.core.SmartReport.eh
 * @global
 */
export default SmartReportTableHandler;
