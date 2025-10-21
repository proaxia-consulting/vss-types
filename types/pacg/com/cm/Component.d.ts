import InstanceManagerOverride from "dbme/c/util/InstanceManagerOverride";
import AppComponent from "sap/fe/core/AppComponent";
/**
 * @namespace pacg.com.cm
 */
export default class Component extends AppComponent {
    static metadata: {
        manifest: string;
    };
    private _instanceManager;
    constructor(...args: unknown[]);
    init(): void;
    getInstanceManager(): InstanceManagerOverride;
}
