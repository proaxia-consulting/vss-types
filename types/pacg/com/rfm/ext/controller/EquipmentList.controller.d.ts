import type { IListReportExtension } from "vss/com/fe/ListReport";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * @namespace pacg.com.rfm.ext.controller
 * @controller
 */
export default class EquipmentList extends ControllerExtension {
    static overrides: {
        onInit(this: IListReportExtension): void;
        onExit(this: IListReportExtension): void;
    };
}
