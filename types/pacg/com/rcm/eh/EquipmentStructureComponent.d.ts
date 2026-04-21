import type { $EquipmentStructureTreeEvent } from "vss/com/rcl/eqs/types/EventParams";
declare const EquipmentStructureComponent: {
    onTreeUpdateFinished(this: void, channel: string, eventId: string, params: $EquipmentStructureTreeEvent): void;
};
export declare const EquipmentStructureEventId: {
    readonly TreeOnListUpdateFinished: "TreeOnListUpdateFinished";
};
export default EquipmentStructureComponent;
