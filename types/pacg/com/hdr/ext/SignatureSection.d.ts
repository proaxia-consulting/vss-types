import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
import type Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
declare const SignatureSection: {
    onValueClear(this: IObjectPageExtensionAPI, event: Event): void;
    /**
     * Update image binaries
     */
    onValueChange(this: IObjectPageExtensionAPI, event: Event): void;
    /**
     * Update image binaries
     *
     * @deprecated Draft values already updated
     */
    onBeforeSaveEntity(this: IObjectPageExtensionAPI): Promise<void>;
    createModel(): JSONModel;
};
/**
 * @global true
 */
export default SignatureSection;
