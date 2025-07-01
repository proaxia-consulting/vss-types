import AppComponent from "sap/fe/core/AppComponent";
import InstanceManagerOverride from "dbme/c/util/InstanceManagerOverride";
/**
 * @namespace pacg.com.cm
 */
export default class Component extends AppComponent {
    static metadata: {
        manifest: string;
    };
    private _instanceManager;
    constructor();
    init(): void;
    getInstanceManager(): InstanceManagerOverride;
}
