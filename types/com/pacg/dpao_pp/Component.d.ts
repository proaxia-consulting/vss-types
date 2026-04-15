import UIComponent from "sap/ui/core/UIComponent";
import Dpao from "./Dpao";
/**
 * @namespace com.pacg.dpao_pp
 */
export default class Component extends UIComponent {
    static metadata: {
        manifest: string;
    };
    private contentDensityClass;
    private dpao;
    init(): void;
    initDpao(transactionId: string): Dpao;
    getDpao(): Dpao;
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @returns css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass(): string;
}
