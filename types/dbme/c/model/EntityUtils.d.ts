import type Context from "sap/ui/model/Context";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
declare const EntityUtils: {
    /**
     * @deprecated Use dbme.c.odata.v2.resetChanges.resetODataModelChangesSafe or ODataModel.resetChanges instead
     */
    reset(aKeys: string[], oModel: ODataModel): void;
    /**
     * @deprecated Use dbme.c.odata.v2.entityProperties instead
     */
    getProperties(oModel: ODataModel, sEntitySet: string): string[];
    getData(oContext: object | Context, bDeep?: boolean, aValidKeys?: string[] | string): object;
};
/**
 * Entityset utilities
 *
 * @author Marek Gozdalski
 * @since 1.0.0
 * @namespace dbme.c.model
 * @global
 */
export default EntityUtils;
