import ServiceFactory from "sap/ui/core/service/ServiceFactory";
import Service from "sap/ui/core/service/Service";
import ServiceContext from "sap/ui/core/service/ServiceContext";
import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
import JSONModel from "sap/ui/model/json/JSONModel";
type TServiceSettings = void;
export declare class GlobalSettingsService extends Service<TServiceSettings> {
    private _component;
    private _hierarchyAssignmentModel;
    private static mComponentSettings;
    init(): void;
    getInterface(): unknown;
    getHierarchyAssignmentModel(): JSONModel;
    getHierarchyAssignment(): HierarchyAssignmentEntity | undefined;
    setHierarchyAssignment(assignmentData: HierarchyAssignmentEntity, refreshData?: boolean): void;
    private _initComponentContext;
    private _loadFromBackend;
    private _defaultModel;
    private _loadHierarchyAssignment;
}
/**
 * @namespace dbme.w.lib.core.service
 */
export default class GlobalSettingsServiceFactory extends ServiceFactory<TServiceSettings> {
    createInstance(context: ServiceContext<TServiceSettings>): Promise<GlobalSettingsService>;
}
export {};
