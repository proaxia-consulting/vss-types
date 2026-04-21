import type ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
/**
 * @namespace dbme.c.odata.v4
 */
export default function createKey(metaModel: ODataModel | ODataMetaModel, entityName: string, entityData: Record<string, unknown>): Promise<string>;
