import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import type { IListReportExtension } from "vss/com/fe/ListReport";
import type Event from "sap/ui/base/Event";
/**
 * @namespace pacg.com.rcm.ext.controller.RootListReportExtension.controller
 * @controller
 */
export default class RootListReportExtension extends ControllerExtension {
    static overrides: {
        onInit(this: IListReportExtension): void;
        onBeforeRendering(this: IListReportExtension, event: Event): void;
        onAfterRendering(this: IListReportExtension, event: Event): void;
        onPendingFilters(this: IListReportExtension): void;
        onViewNeedsRefresh(this: IListReportExtension, event: Event): void;
    };
}
