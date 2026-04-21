import type ResourceBundle from "sap/base/i18n/ResourceBundle";
import Service from "sap/ui/core/service/Service";
import type ServiceContext from "sap/ui/core/service/ServiceContext";
import ServiceFactory from "sap/ui/core/service/ServiceFactory";
type TServiceSettings = void;
export declare class SharedTranslationsService extends Service<TServiceSettings> {
    private _component;
    private _resourceBundle;
    init(): void;
    private ehnanceResourceModel;
    getInterface(): unknown;
    getResourceBundle(): ResourceBundle;
}
/**
 * @namespace dbme.w.lib.core.service
 */
export default class SharedTranslationsServiceFactory extends ServiceFactory<TServiceSettings> {
    createInstance(context: ServiceContext<TServiceSettings>): Promise<SharedTranslationsService>;
}
export {};
