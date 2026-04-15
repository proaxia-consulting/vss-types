import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IListReportExtension } from "vss/com/fe/ListReport";
/**
 * @namespace pacg.com.cm.ext.controller.ContractList
 * @controller
 */
export default class ContractList extends ControllerExtension {
    static overrides: {
        onInit(this: IListReportExtension): void;
    };
}
