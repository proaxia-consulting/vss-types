import type Table from "sap/m/Table";
import { RootEntity } from "pacg/com/so/model/Entity";
import jQuery from "jquery";
import { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
export default class ListReportTableExtension {
    private _table;
    constructor(_table: Table);
    private initTableEvents;
    onTableUpdateFinished(event: ListBase$UpdateFinishedEvent): void;
    onGroupItemPressed(event?: jQuery.Event, groupEntity?: RootEntity): void;
}
