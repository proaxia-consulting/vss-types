import UIComponent from "sap/ui/core/UIComponent";
/**
 * @namespace dbme.f.timeclockingcorrection
 */
export default class Component extends UIComponent {
    static metadata: {
        manifest: string;
    };
    private _contentDensityClass;
    init(): void;
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     *
     * @public
     * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass(): string;
}
