import type ExtensionAPI from "sap/fe/templates/ListReport/ExtensionAPI";
import type GroupHeaderListItem from "sap/m/GroupHeaderListItem";
import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type Table from "sap/m/Table";
import type UI5Element from "sap/ui/core/Element";
import jQuery from "sap/ui/thirdparty/jquery";
import type { DeliveryEntity } from "vss/com/rcl/types/EntitySet";
export declare const DataKey: {
    readonly eventAttached: "eventAttached";
};
export declare function isGroupHeaderListItem(obj: UI5Element): obj is GroupHeaderListItem;
/**
 * @nonui5
 * @namespace vss.com.rcl.templates.ListReport
 */
export default abstract class AbstractDeliveryListReportExtension {
    protected _api: ExtensionAPI;
    protected _table: Table;
    constructor(_api: ExtensionAPI, _table: Table);
    protected _initTableEvents(): void;
    onTableUpdateFinished(event: ListBase$UpdateFinishedEvent): void;
    onGroupItemPressed(event?: jQuery.Event, groupEntity?: DeliveryEntity): void;
}
