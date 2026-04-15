import type UIComponent from "sap/ui/core/UIComponent";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
import type { DBMEComponentType } from "dbme/w/lib/core/ui/Enums";
export type $UISettingsKey = {
    [key: string]: string | undefined;
    PlanningMode?: string;
};
export type IDBMEComponentBase = {
    getDBMEComponent(): DBMEComponentType;
    getDefaultModel(): ODataModel;
    getGlobalSettingsService(): Promise<GlobalSettingsService>;
} & UIComponent;
export type IDBMEComponent = {
    UISettingsKey: $UISettingsKey;
    /**
     * @deprecated Use (await this.getGlobalSettingsService()).getHierarchyAssignmentModel() instead!
     */
    getHASModel(): JSONModel;
    /**
     * @deprecated Use (await this.getGlobalSettingsService()).setRootHierarchyAssignment(...) instead!
     */
    setRootHierarchyAssignment(oAssignmentData: HierarchyAssignmentEntity, bRefreshData?: boolean): void;
} & IDBMEComponentBase;
