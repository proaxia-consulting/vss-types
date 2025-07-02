import UIComponentBase from "dbme/w/lib/core/ui/UIComponentBase";
import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
import type { $UISettingsKey, IDBMEComponent } from "dbme/w/lib/core/types/IComponent";
import { type GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
import { type SharedTranslationsService } from "dbme/w/lib/core/service/SharedTranslationsServiceFactory";
import type { DBMEComponentType } from "dbme/w/lib/core/ui/Enums";
import type Service from "sap/ui/core/service/Service";
/**
 * @deprecated Use dbme.w.lib.core.service.Enums.ServiceName instead!
 */
export declare enum ServiceName {
    GlobalSettings = "GlobalSettingsService",
    SharedTranslations = "SharedTranslationsService"
}
/**
 * @namespace dbme.w.lib.core.ui
 */
export default abstract class UIComponent extends UIComponentBase implements IDBMEComponent {
    protected _serviceMap: Map<string, Service<unknown>>;
    static metadata: Record<string, unknown>;
    UISettingsKey: $UISettingsKey;
    init(): void;
    /**
     * @deprecated Use (await this.getGlobalSettingsService()).getHierarchyAssignmentModel() instead!
     */
    getHASModel(): import("sap/ui/model/json/JSONModel").default;
    /**
     * @deprecated Use (await this.getGlobalSettingsService()).setHierarchyAssignment(...) instead!
     */
    setRootHierarchyAssignment(assignmentData: HierarchyAssignmentEntity, refreshData?: boolean): void;
    setCustomHeaders(component?: DBMEComponentType): void;
    getGlobalSettingsService(): Promise<GlobalSettingsService>;
    getSharedTranslationsService(): Promise<SharedTranslationsService>;
}
