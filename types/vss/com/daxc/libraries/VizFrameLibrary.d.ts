import type LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
import type VizFrame from "sap/viz/ui5/controls/VizFrame";
import type { TVFconsts } from "vss/com/daxc/types/CustomData";
export declare const _consts: {
    sPx: string;
    sIdVizFrame: string;
};
export declare function setInitialVizFrameHeight(iHeight: number, VFconsts: TVFconsts): string;
export declare function calculateVizLegendGroupWidth(cardWidth: number): object;
export declare function calculateVizLegendGroupHeight(iVizFrameHeight: number): object;
export declare function calculateVizFrameWidth(sCardName: string, oVizFrame: VizFrame, t: LinkListController): number;
export declare function calculateVizFrameHeight(sCardName: string, t: LinkListController): number;
