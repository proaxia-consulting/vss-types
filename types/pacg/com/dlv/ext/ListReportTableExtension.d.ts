import type Table from "sap/m/Table";
import type Event from "sap/ui/base/Event";
import { RootEntity } from "../model/Entity";
import jQuery from "sap/ui/thirdparty/jquery";
export default class ListReportTableExtension {
    private _table;
    constructor(_table: Table);
    private initTableEvents;
    onTableUpdateFinished(event: Event): void;
    onGroupItemPressed(event?: jQuery.Event, groupEntity?: RootEntity): void;
}
