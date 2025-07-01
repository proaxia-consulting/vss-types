import Event from "sap/ui/base/Event";
import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
declare const PrintContractHandler: {
    onPrint(this: IObjectPageExtensionAPI, event: Event): Promise<void>;
};
/**
 * @namespace pacg.com.cm.eh
 */
export default PrintContractHandler;
