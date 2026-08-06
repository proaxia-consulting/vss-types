import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type Event from "sap/ui/base/Event";
/**
 * @namespace vss.com.dacw.eh
 */
export default class MaterialTransferEventHandler {
    static onConversionQtyChange(this: ExtensionAPI, event: Event): Promise<void>;
}
