import ServiceFactory from "sap/ui/core/service/ServiceFactory";
import Service from "sap/ui/core/service/Service";
import ServiceContext from "sap/ui/core/service/ServiceContext";
type TServiceSettings = {
    entitySet?: string[];
};
export interface IEntitySetProvider {
    getEntitySet(): string[];
}
export declare class EntityPropertiesService extends Service<TServiceSettings> {
    private _component?;
    private _entitySetProvider?;
    private static _mEntityProperties;
    init(): void;
    private loadProperties;
    private setProperties;
    hasProperties(entitySet: string): boolean;
    getProperties(entitySet: string): string[];
    setEntitySetProvider(provider: IEntitySetProvider): void;
    getInterface(): unknown;
}
/**
 * @namespace dbme.c.service
 */
export default class EntityPropertiesServiceFactory extends ServiceFactory<TServiceSettings> {
    createInstance(context: ServiceContext<TServiceSettings>): Promise<EntityPropertiesService>;
}
export {};
