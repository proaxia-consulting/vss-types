import type FacetFilter from "sap/m/FacetFilter";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
import type { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import type { ISrsController } from "dbme/w/lib/core/types/IController";
type TSelectedFilterValues = Record<string, string>;
export type $RouteMatchedParams = {
    arguments: {
        [key: string]: string | object | undefined;
        "?query"?: object;
    };
};
export type $RouteQueryFilterSettings = {
    controller: ISrsController;
    params: $RouteMatchedParams;
    paramsKnown: string | string[];
    paramsIgnored?: string[];
    paramsMap?: Map<string, string | undefined>;
    filterControl?: SmartFilterBar;
    useUrl?: boolean;
};
export declare function cloneArguments(source: object): Record<string, string>;
declare const RouteQueryFilter: {
    fillControllerFilters(settings: $RouteQueryFilterSettings): Promise<TSelectedFilterValues>;
    /**
     * @deprecated Use RouteQueryFilter.fillControllerFilters instead!
     *
     * @description
     * side-effects:
     * - fill this._oQueryArgs: Record<string, string>
     * - fill this._aRouteQueryFilters: sap.ui.model.Filter[]
     * - if this._getFilter() exists - propagate query args into filter control
     *
     * returns query args. that wasn't added into this._oQueryArgs
     */
    onRouteMatched(this: ISrsController, event: Route$PatternMatchedEvent | $RouteMatchedParams, entitySet: string | string[], aIgnoredQueryArgs?: string[], filterControl?: SmartFilterBar | FacetFilter, queryArgsMap?: Map<string, string | undefined>, useUrl?: boolean): Promise<TSelectedFilterValues>;
};
/**
 * @namespace dbme.w.lib.core.util
 */
export default RouteQueryFilter;
