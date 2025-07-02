import PageController from "sap/fe/core/PageController";
import type { ManagedObject$ModelContextChangeEvent } from "sap/ui/base/ManagedObject";
import type { MenuItem$PressEvent } from "sap/m/MenuItem";
/**
 * @controller
 * @namespace dbme.w.lib.core.upselling.controller
 */
export default class UpsellingPartnerObjectPage extends PageController {
    onInit(): void;
    onOperMenuBtnCtxChange(event: ManagedObject$ModelContextChangeEvent): void;
    onOperMenuItemPress(event: MenuItem$PressEvent): void;
}
