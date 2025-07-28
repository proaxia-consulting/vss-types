import type Control from "sap/ui/core/Control";
import type { CardLayout } from "vss/com/daxc/types/CustomData";
export declare function getRealContainerHeight(oContainer: Control): number;
export declare function getRealContainerWidth(oContainer: Control): number;
export declare function getRealContainer(oContainer: Control): HTMLElement;
export declare function getAlternativeContainer(oContainer: Control): Element;
export declare function getContainerHeight(oCardLayout: CardLayout, iHeaderHeight: int): int;
