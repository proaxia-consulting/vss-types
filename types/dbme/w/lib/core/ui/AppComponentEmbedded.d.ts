import AppComponent from "sap/fe/core/AppComponent";
/**
 * @namespace dbme.w.lib.core.ui
 */
export default abstract class AppComponentEmbedded extends AppComponent {
    static readonly metadata: object;
    protected _localIdSuffix: string;
    protected _pendingObjectPageNavigation: boolean;
    protected abstract _getObjectPageBindingPath(key: string): string;
    protected abstract _getObjectPageId(): string;
    protected abstract _getObjectPageTarget(): string;
    constructor(settings: Record<string, unknown>);
    /**
     * @see sap.fe.core.services.TemplatedViewServiceFactory uses `${this.getMetadata().getComponentName()}::VehicleObjectPage` as stable ID.
     * We override this behavior to avoid duplicated ID's when component is embedded multiple times
     */
    getLocalId(globalId: string): string;
    protected _bindObjectPage(key?: string, navigate?: boolean): Promise<void>;
    protected _navigateToObjectPage(key: string): Promise<void>;
    protected _initServices(): Promise<void>;
    destroy(bSuppressInvalidate?: boolean): void;
}
