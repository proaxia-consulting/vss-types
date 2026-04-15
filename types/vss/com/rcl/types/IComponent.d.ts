import type AppComponent from "sap/fe/core/AppComponent";
import type { $UIComponentSettings } from "sap/ui/core/UIComponent";
export type EquipmentStructureSettings = {
    equipment: string;
    hierarchyRoot: string;
};
export type $IEquipmentAwareComponentSettings = $UIComponentSettings & EquipmentStructureSettings;
export type IEquipmentAwareComponent = {
    getEquipmentId(): string;
    setEquipmentId(value: string): void;
} & AppComponent;
