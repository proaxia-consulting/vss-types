import type { IListReportExtension } from "vss/com/fe/ListReport";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
/**
 * @namespace pacg.com.cm.ext.controller.ContractList
 * @controller
 */
export default class ContractList extends ControllerExtension {
    static overrides: {
        onInit(this: IListReportExtension): void;
    };
}
