import type { ISrsController } from "dbme/w/lib/core/types/IController";
import type { $RouteMatchedParams } from "dbme/w/lib/core/util/RouteQueryFilter";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
declare const RouteQueryFilter: {
    onRouteMatched(this: ISrsController, event: $RouteMatchedParams, entitySet: string | string[], aIgnoredQueryArgs?: string[], filterControl?: SmartFilterBar, queryArgsMap?: Map<string, string | undefined>): Promise<{
        [x: string]: string;
    }>;
};
/**
 * @namespace dbme.srs.com.wpl.helper
 */
export default RouteQueryFilter;
