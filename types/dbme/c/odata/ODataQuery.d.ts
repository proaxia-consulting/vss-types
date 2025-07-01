import type Filter from "sap/ui/model/Filter";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { TResponseSuccess } from "dbme/c/util/handleReturn";
declare class ODataQuery<TEntityData> {
    protected oModel: ODataModel;
    protected sPath: string;
    protected aFilters: Filter[];
    constructor(oModel: ODataModel, sPath: string, aFilters?: Filter[]);
    read(oUrlParams?: Record<string, string>): Promise<{
        data: TEntityData[];
        response: TResponseSuccess;
    }>;
}
/**
 * @namespace dbme.c.odata
 */
export default ODataQuery;
