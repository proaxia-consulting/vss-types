import VizFrame from "sap/viz/ui5/controls/VizFrame";
import { TVFconsts } from "../types/CustomData";
export declare const _consts: {
    sPx: string;
    sIdVizFrame: string;
};
export declare function setInitialVizFrameHeight(iHeight: number, VFconsts: TVFconsts): string;
export declare function calculateVizLegendGroupWidth(cardWidth: number): object;
export declare function calculateVizLegendGroupHeight(iVizFrameHeight: number): object;
export declare function calculateVizFrameWidth(sCardName: string, oVizFrame: VizFrame, t: any): number;
export declare function calculateVizFrameHeight(sCardName: string, t: any): number;
