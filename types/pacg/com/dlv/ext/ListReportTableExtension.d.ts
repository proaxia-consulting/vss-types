import type Table from "sap/m/Table";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import { RootEntity } from "pacg/com/dlv/model/Entity";
import jQuery from "sap/ui/thirdparty/jquery";
/**
 * @nonui5
 * @namespace pacg.com.dlv.ext
 */
export default class ListReportTableExtension {
    private _table;
    constructor(_table: Table);
    private initTableEvents;
    onTableUpdateFinished(event: ListBase$UpdateFinishedEvent): void;
    onGroupItemPressed(event?: jQuery.Event, groupEntity?: RootEntity): void;
}
