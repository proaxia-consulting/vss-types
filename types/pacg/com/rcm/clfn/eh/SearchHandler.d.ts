import type { TTokenData } from "ui5";
import ClassificationFilterForm from "pacg/com/rcm/clfn/ClassificationFilterForm";
/**
 * @namespace pacg.com.rcm.clfn.eh
 *
 * @see @link https://ui5.sap.com/1.102.8/resources/sap/ui/mdc/condition/FilterConverter-dbg.js
 * Propagate criteria to main list filter
 */
export declare function propagateSearchCriteria(clfnFilter: ClassificationFilterForm, addedRanges?: TTokenData[], removedRanges?: TTokenData[]): void;
