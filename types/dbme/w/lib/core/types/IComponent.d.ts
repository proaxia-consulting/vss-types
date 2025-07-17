import type UIComponent from "sap/ui/core/UIComponent";
import type { DBMEComponentType } from "dbme/w/lib/core/ui/Enums";
import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
export type $UISettingsKey = {
    [key: string]: string | undefined;
    PlanningMode?: string;
};
export interface IDBMEComponentBase extends UIComponent {
    getDBMEComponent(): DBMEComponentType;
    getDefaultModel(): ODataModel;
    getGlobalSettingsService(): Promise<GlobalSettingsService>;
}
export interface IDBMEComponent extends IDBMEComponentBase {
    UISettingsKey: $UISettingsKey;
    /**
     * @deprecated Use (await this.getGlobalSettingsService()).getHierarchyAssignmentModel() instead!
     */
    getHASModel(): JSONModel;
    /**
     * @deprecated Use (await this.getGlobalSettingsService()).setRootHierarchyAssignment(...) instead!
     */
    setRootHierarchyAssignment(oAssignmentData: HierarchyAssignmentEntity, bRefreshData?: boolean): void;
}
