import type IndexController from "dbme/w/lib/core/vehicle/tdt/controller/Index.controller";
import type { Button$PressEvent } from "sap/m/Button";
import type { Link$PressEvent } from "sap/m/Link";
import type { BreadCrumbLocalEntity } from "dbme/w/lib/core/vehicle/tdt/type/IEntity";
declare const NavigationHelper: {
    onNavigteBack(this: IndexController, event: Button$PressEvent): void;
    onNavigteToPage(this: IndexController, event: Link$PressEvent | BreadCrumbLocalEntity["Current"]): void;
};
/**
 * @namespace dbme.w.lib.core.vehicle.tdt.helper
 */
export default NavigationHelper;
