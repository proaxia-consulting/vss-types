import BaseComponent from "sap/ui/core/UIComponent";
/**
 * @namespace com.pacg.dpf_pp
 */
export default class Component extends BaseComponent {
    static metadata: {
        manifest: string;
    };
    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init(): void;
}
