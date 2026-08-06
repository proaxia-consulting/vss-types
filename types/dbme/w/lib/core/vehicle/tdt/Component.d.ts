import type { $UIComponentSettings as $UIComponentSettingsBase } from "sap/ui/core/UIComponent";
import type { HierarchyAssignmentEntity } from "dbme/w/lib/core/types/IEntity";
import UIComponentBase from "dbme/w/lib/core/ui/UIComponentBase";
import type { OrderEntity, ScreenSectionEntity } from "dbme/w/lib/core/vehicle/tdt/type/IEntity";
type OwnerComponentData = {
    events?: {
        select?: CallableFunction;
        updateFinished?: CallableFunction;
    };
    hierarchy?: HierarchyAssignmentEntity;
    order?: OrderEntity;
    section?: ScreenSectionEntity;
};
type $UIComponentSettings = $UIComponentSettingsBase & {
    componentData: OwnerComponentData;
};
/**
 * @namespace dbme.w.lib.core.vehicle.tdt
 */
export default class Component extends UIComponentBase {
    getComponentData: () => OwnerComponentData;
    static metadata: {
        manifest: string;
        library: string;
    };
    constructor(mSettings?: $UIComponentSettings);
    init(): void;
    getDBMEComponent(): "TDT";
    isEmbedded(): boolean;
}
export {};
