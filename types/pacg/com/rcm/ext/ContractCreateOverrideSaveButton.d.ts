import type { IObjectPageController } from "vss/com/fe/ObjectPage";
/**
 * replace save button in footer
 *
 * @namespace pacg.com.rcm.ext
 * @nonui5
 */
export default class ContractCreateOverrideSaveButton {
    private _ctrl;
    constructor(_ctrl: IObjectPageController);
    /**
     * @link https://ui5.sap.com/resources/sap/fe/templates/ObjectPage/view/fragments/FooterContent.fragment.xml
     */
    private createSaveButton;
}
