import type ListBase from "sap/m/ListBase";
import type Event from "sap/ui/base/Event";
import type Context from "sap/ui/model/Context";
import Filter from "sap/ui/model/Filter";
import type IController from "dbme/srs/com/tdo/controller/CreateApt.controller";
import type { ISelectableControl } from "dbme/srs/com/tdo/types/IController";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
declare const LocationList: {
    getLocationList(this: IController, bRecalc?: boolean): Promise<ListBase>;
    /**
     * reload workshop locations according to selected demands
     */
    reloadLocations(this: IController, selectionChangedItems?: ISelectableControl[]): void;
    onLocationDataReceived(this: IController, event: Event): void;
    onLocationListSelectionChange(this: IController, oEvent: ListBase$SelectionChangeEvent): Context[];
    getFilters(this: IController, selectionChangedItems?: ISelectableControl[]): Filter[];
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default LocationList;
