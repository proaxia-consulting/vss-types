import PageController from "sap/fe/core/PageController";
import type MenuButton from "sap/m/MenuButton";
import type { MenuItem$PressEvent } from "sap/m/MenuItem";
import type Event from "sap/ui/base/Event";
import type { ManagedObject$ModelContextChangeEventParameters } from "sap/ui/base/ManagedObject";
/**
 * @controller
 * @namespace dbme.w.lib.core.upselling.controller
 */
export default class UpsellingPartnerObjectPage extends PageController {
    onInit(): void;
    onOperMenuBtnCtxChange(event: Event<ManagedObject$ModelContextChangeEventParameters, MenuButton>): void;
    onOperMenuItemPress(event: MenuItem$PressEvent): void;
}
