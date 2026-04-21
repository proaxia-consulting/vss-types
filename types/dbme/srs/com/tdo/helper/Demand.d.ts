import type { Button$PressEvent } from "sap/m/Button";
import type ColumnListItem from "sap/m/ColumnListItem";
import type Context from "sap/ui/model/Context";
import type { ICreatedDemandData, IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
declare const Demand: {
    _addDemand(this: IDemandsAwareController, itemOrigin: ICreatedDemandData["origin"], bReloadLocations?: boolean): Promise<ColumnListItem>;
    _removeDemand(this: IDemandsAwareController, demandControl: ColumnListItem | Context): void;
    onDemandCopy(this: IDemandsAwareController, event: Button$PressEvent): Promise<ColumnListItem>[];
    onDemandRestore(this: IDemandsAwareController, event: Button$PressEvent): void;
    onDemandDelete(this: IDemandsAwareController, event?: Button$PressEvent): void;
    /**
     * @see ScreenSectionEventHandler
     */
    _clearDeselectedDemands(this: IDemandsAwareController, aDeselected?: unknown[]): void;
    _destroy(this: IDemandsAwareController): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default Demand;
