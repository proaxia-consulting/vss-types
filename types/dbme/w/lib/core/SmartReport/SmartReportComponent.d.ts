import UIComponent, { type $UIComponentSettings } from "sap/ui/core/UIComponent";
import { EntityPropertiesService, IEntitySetProvider } from "dbme/c/service/EntityPropertiesServiceFactory";
import type { ScreenSectionEntity } from "dbme/w/lib/core/types/IEntity";
import type Context from "sap/ui/model/Context";
export type TComponentData = {
    section?: ScreenSectionEntity;
    orderContext?: Context;
};
export type TPropagatedProperties = {
    oBindingContexts: Record<string, Context>;
};
/**
 * @namespace dbme.w.lib.core.SmartReport
 */
export default abstract class SmartReportComponent extends UIComponent implements IEntitySetProvider {
    static metadata: Record<string, unknown>;
    oPropagatedProperties: TPropagatedProperties;
    getComponentData: () => TComponentData;
    /**
     * part of IEntitySetProvider interface; required for EntityPropertiesService
     */
    abstract getEntitySet(): string[];
    constructor(sId: string, mSettings: $UIComponentSettings);
    init(): void;
    getEntityPropertiesService(): Promise<EntityPropertiesService>;
    destroy(bSuppressInvalidate?: boolean): void;
}
