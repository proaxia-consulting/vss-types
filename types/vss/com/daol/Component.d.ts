import InstanceManagerOverride from "dbme/c/util/InstanceManagerOverride";
import BaseComponent from "sap/fe/core/AppComponent";
import type JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace vss.com.daol
 */
export default class Component extends BaseComponent {
    static metadata: {
        manifest: string;
    };
    private _instanceManager;
    constructor(settings?: object);
    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init(): void;
    updateUserOrgData(): void;
    getOrgDataModel(): JSONModel;
    exit(): void | undefined;
    getInstanceManager(): InstanceManagerOverride;
}
