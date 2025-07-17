import { IconColor, URI, ValueState } from "sap/ui/core/library";
import { TConditionLimits } from "../types/Entity";
import Button from "sap/m/Button";
declare const vhcFormatter: {
    isRepairEnabled(this: Button, repairCode: string): void;
    getGeneralState(vhcStatus: number): ValueState;
    tirePressureState(pressure: number, limits: TConditionLimits): ValueState;
    tireTreadDepthState(treadDepth: number, limits: TConditionLimits): ValueState;
    getStatusIcon(vhcStatus: number): URI;
    getCompletenessListIcon(vhcStatus: number): URI;
    getListTypeColor(listTypeComplete: number, isConfirmed: boolean): IconColor;
    getListColor(listComplete: number, isConfirmed: boolean): IconColor;
};
/**
 * @namespace vss.com.dama.model
 * @global
 */
export default vhcFormatter;
