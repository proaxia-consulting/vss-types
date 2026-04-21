import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IListReportExtension } from "vss/com/fe/ListReport";
/**
 * overridesToOverride must be enabled in babel settings of transform-ui5
 * @link https://github.com/ui5-community/babel-plugin-transform-modules-ui5
 *
 * @namespace pacg.com.dlv.ext.controller
 * @controller
 */
export default class ListReportExtension extends ControllerExtension {
    static overrides: {
        editFlow: {
            onAfterActionExecution(this: IListReportExtension, actioName: string): void;
        };
        onInit(this: IListReportExtension): void;
    };
}
