import { MainTable } from "vss/com/dapv/entities/Entities";
import { AvailabilityBar, AvailabilityBarProperty, AvailabilityBarStatus } from "vss/com/dapv/entities/Types";
export declare function resetAvailabilityMap(): void;
export declare function pushAvailabilityMap(sOrderNumber: MainTable["OrderNumber"], oAvailabilityBar: AvailabilityBar): void;
export declare function getAvailabilityMap(sOrderNumber?: MainTable["OrderNumber"]): any;
export declare function getAvailabilityTooltipMap(): Map<any, any>;
export declare function getAvailabilityValue(sOrderNumber: MainTable["OrderNumber"], sAvailabilityBar: string, sStatus: AvailabilityBarStatus, sProperty: AvailabilityBarProperty): string | number;
export declare function getAvailabilityTooltip(sOrderNumber: MainTable["OrderNumber"], sAvailabilityBar: string, sStatus: AvailabilityBarStatus, sProperty: AvailabilityBarProperty): string;
