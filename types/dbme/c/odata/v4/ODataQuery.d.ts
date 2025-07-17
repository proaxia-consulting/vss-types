import Filter from "sap/ui/model/Filter";
import Context from "sap/ui/model/odata/v4/Context";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
/**
 * @namespace dbme.c.odata.v4
 */
export default class ODataQuery<TEntityData> {
    protected oModel: ODataModel;
    protected sPath: string;
    protected aFilters: Filter[];
    constructor(oModel: ODataModel, sPath: string, aFilters?: Filter[]);
    /**
     * @deprecated Use readContexts or readData
     */
    read(oUrlParams?: Record<string, string>, asContext?: boolean): Promise<Context[]> | Promise<TEntityData[]>;
    readContexts(oUrlParams?: Record<string, string>): Promise<Context[]>;
    readData(oUrlParams?: Record<string, string>): Promise<TEntityData[]>;
}
