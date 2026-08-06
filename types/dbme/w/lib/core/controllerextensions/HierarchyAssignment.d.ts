import type ComboBox from "sap/m/ComboBox";
import type { Select$ChangeEvent } from "sap/m/Select";
import type Event from "sap/ui/base/Event";
import ManagedObject from "sap/ui/base/ManagedObject";
import type { GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
import type { IBaseController } from "dbme/w/lib/core/types/IController";
import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
export type HierarchyAssignment$AfterChangeEventParameters = {
    settings: HierarchyAssignmentEntity;
};
export type HierarchyAssignment$AfterChangeEvent = Event<HierarchyAssignment$AfterChangeEventParameters, HierarchyAssignment>;
export type HierarchyAssignment$BeforeChangeEventParameters = {
    settings: HierarchyAssignmentEntity;
};
export type HierarchyAssignment$BeforeChangeEvent = Event<HierarchyAssignment$BeforeChangeEventParameters, HierarchyAssignment>;
/**
 * @global
 * @namespace dbme.w.lib.core.controllerextensions
 */
export default class HierarchyAssignment extends ManagedObject {
    protected _controller: IBaseController;
    fireAfterChange: (params: HierarchyAssignment$AfterChangeEventParameters) => void;
    attachAfterChange: (handler: (event: HierarchyAssignment$AfterChangeEvent) => void, listener?: object) => this;
    detachAfterChange: (handler: (event: HierarchyAssignment$AfterChangeEvent) => void, listener?: object) => this;
    fireBeforeChange: (params: HierarchyAssignment$BeforeChangeEventParameters) => void;
    attachBeforeChange: (handler: (event: HierarchyAssignment$BeforeChangeEvent) => void, listener?: object) => this;
    detachBeforeChange: (handler: (event: HierarchyAssignment$BeforeChangeEvent) => void, listener?: object) => this;
    protected _settingsService: GlobalSettingsService;
    static metadata: {
        events: {
            afterChange: {
                parameters: {
                    settings: string;
                };
            };
            beforeChange: {
                parameters: {
                    settings: string;
                };
            };
        };
    };
    constructor(_controller: IBaseController);
    protected _init(): Promise<void>;
    onChange(event?: Select$ChangeEvent, entity?: HierarchyAssignmentEntity): void;
    onChangeComboBox(event: Event<{
        value: string;
    }, ComboBox>): void;
    protected _onChange(hierarchyAssignmentEntity: HierarchyAssignmentEntity): void;
    getModel(): import("sap/ui/model/json/JSONModel").default;
    getHierarchyAssignment(): HierarchyAssignmentEntity;
    getHierarchyAssignmentAsync(): Promise<HierarchyAssignmentEntity>;
    getItems(): HierarchyAssignmentEntity[];
}
