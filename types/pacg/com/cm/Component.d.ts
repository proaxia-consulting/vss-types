import AppComponent from "vss/com/rcl/component/AppComponentAbstract";
import InstanceManagerOverride from "dbme/c/util/InstanceManagerOverride";
/**
 * @namespace pacg.com.cm
 */
export default class Component extends AppComponent {
    static metadata: {
        manifest: string;
    };
    private _instanceManager;
    constructor(settings?: object);
    init(): void;
    getInstanceManager(): InstanceManagerOverride;
}
