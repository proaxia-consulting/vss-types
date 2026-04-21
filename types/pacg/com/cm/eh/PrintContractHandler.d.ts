import type { Button$PressEvent } from "sap/m/Button";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
declare const PrintContractHandler: {
    onPrint(this: IObjectPageExtensionAPI, event: Button$PressEvent): Promise<void>;
};
/**
 * @namespace pacg.com.cm.eh
 */
export default PrintContractHandler;
