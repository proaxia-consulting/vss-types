import { baseUrl } from "dbme/c/UrlUtils";
import type { AppEntity } from "dbme/w/lib/core/types/IEntity";
export declare const SRSComponentUrlsMap: {
    LAUNCHPAD: string;
    HAS: string;
    RPL: string;
    STS: string;
    TDO: string;
    TDT: string;
    WPL: string;
};
type TWorkshopPlannerQueryArgs = {
    DISPLAY_WPO_DOCNR?: string;
    DISPLAY_CHARDT_FROM?: string;
    DISPLAY_CHARDT_TO?: string;
};
declare const Url: {
    /**
     * @deprecated Only for internal use
     */
    isLocal(sUrl?: string): boolean;
    navToWorkshopPlanner(oArgs: TWorkshopPlannerQueryArgs, aApps: AppEntity[]): void;
    navToTodoBasketDetails(sOrderNumber: string, aApps: AppEntity[]): void;
    navBack(bBackCreateBrowerHistory?: boolean): void;
    baseUrl: typeof baseUrl;
    getUrlParams: typeof import("dbme/c/UrlUtils").getUrlParams;
    isUrl: typeof import("dbme/c/UrlUtils").isUrl;
    Url: {
        LAUNCHPAD: string;
        HAS: string;
        RPL: string;
        STS: string;
        TDO: string;
        TDT: string;
        WPL: string;
    };
};
/**
 * @namespace dbme.w.lib.core.util
 */
export default Url;
