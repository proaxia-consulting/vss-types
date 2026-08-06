import type OverflowToolbar from "sap/m/OverflowToolbar";
import type { IFilterBar } from "vss/com/fe/ListReport";
import type { FooterContent } from "vss/com/rcl/types/Control";
export declare function isFilterBar(element: unknown): element is IFilterBar;
/**
 * @since VSS5 1.1.21
 */
export declare function isFooterContent(element: unknown): element is FooterContent;
/**
 * @since VSS5 1.1.21
 */
export declare function isOverflowToolbar(element: unknown): element is OverflowToolbar;
