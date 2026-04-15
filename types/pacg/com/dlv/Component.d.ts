import BaseComponent from "vss/com/rcl/component/AppComponentAbstract";
/**
 * @namespace pacg.com.dlv
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
