import { IObjectPageController } from "vss/com/fe/ObjectPage";
import Event from "sap/ui/base/Event";
declare const override: {
    onInit(this: IObjectPageController): void;
    onBeforeRendering(this: IObjectPageController, event: Event): void;
    onAfterRendering(this: IObjectPageController, event: Event): void;
    onPageReady(this: IObjectPageController, state: any): void;
    onPendingFilters(this: IObjectPageController, event: Event): void;
    onViewNeedsRefresh(this: IObjectPageController, event: Event): void;
};
/**
 * @namespace vss.com.dama.ext.controller
 */
export default override;
