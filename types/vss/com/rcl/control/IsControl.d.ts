import type NavContainer from "sap/m/NavContainer";
import type OverflowToolbar from "sap/m/OverflowToolbar";
import type FilterBar from "sap/ui/mdc/FilterBar";
import type { FooterContent } from "vss/com/rcl/types/Control";
export declare function isNavContainer(obj: unknown): obj is NavContainer;
export declare function isFilterBar(element: unknown): element is FilterBar;
/**
 * @since VSS7 1.4.2
 */
export declare function isFooterContent(obj: unknown): obj is FooterContent;
/**
 * @since VSS7 1.4.2
 */
export declare function isOverflowToolbar(obj: unknown): obj is OverflowToolbar;
