import Control from "sap/ui/core/Control";
import { CardLayout } from "../types/CustomData";
export declare function getRealContainerHeight(oContainer: Control): number;
export declare function getRealContainerWidth(oContainer: Control): number;
export declare function getRealContainer(oContainer: Control): HTMLElement;
export declare function getAlternativeContainer(oContainer: Control): Element;
export declare function getContainerHeight(oCardLayout: CardLayout, iHeaderHeight: int): int;
