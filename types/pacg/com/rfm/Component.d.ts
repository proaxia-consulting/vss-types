import AppComponentAbstract from "vss/com/rcl/component/AppComponentAbstract";
import InstanceManagerOverride from "dbme/c/util/InstanceManagerOverride";
/**
 * @namespace pacg.com.rfm
 */
export default class Component extends AppComponentAbstract {
    static metadata: {
        manifest: string;
    };
    private _instanceManager;
    constructor(settings?: object);
    init(): void;
    getInstanceManager(): InstanceManagerOverride;
    exit(): void;
}
