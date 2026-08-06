import type Event from "sap/ui/base/Event";
import type Control from "sap/ui/core/Control";
import type { IListReportController } from "vss/com/fe/ListReport";
/**
 * Called when action has been selected form the dropdown list
 *
 * @namespace pacg.com.rfm.eh
 */
export declare function onActionSelect(this: IListReportController, event: Event<{}, Control>): void;
