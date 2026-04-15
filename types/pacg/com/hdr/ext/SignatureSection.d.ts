import type { SignPadPanel$ChangeEvent } from "dbme/c/control/signature/SignPadPanel";
import type { Button$PressEvent } from "sap/m/Button";
import JSONModel from "sap/ui/model/json/JSONModel";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
declare const SignatureSection: {
    onValueClear(this: IObjectPageExtensionAPI, event: Button$PressEvent): void;
    /**
     * Update image binaries
     */
    onValueChange(this: IObjectPageExtensionAPI, event: SignPadPanel$ChangeEvent): void;
    createModel(): JSONModel;
};
/**
 * @global true
 */
export default SignatureSection;
