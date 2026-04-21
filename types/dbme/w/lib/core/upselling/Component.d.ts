import BaseComponent from "dbme/w/lib/core/ui/AppComponentEmbedded";
/**
 * @namespace dbme.w.lib.core.upselling
 */
export default class Component extends BaseComponent {
    getComponentData: () => {
        [key: string]: unknown;
        order?: {
            PARTNER?: string;
        };
    };
    static metadata: {
        manifest: string;
        library: string;
    };
    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init(): void;
    protected _getObjectPageBindingPath(key: string): string;
    protected _getObjectPageId(): string;
    protected _getObjectPageTarget(): string;
}
