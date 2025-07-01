import AppComponent from "sap/fe/core/AppComponent";
/**
 * @namespace vss.com.dadm
 */
export default class Component extends AppComponent {
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
