import ODataQuery from "dbme/c/odata/v4/ODataQuery";
import type Context from "sap/ui/model/odata/v4/Context";
import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { THandoverEntity } from "vss/com/rcl/types/EntitySet";
/**
 * @nonui5
 * @namespace pacg.com.hdr.model
 */
export default class HandoverQuery extends ODataQuery<THandoverEntity> {
    constructor(model: ODataModel);
    readContext(handover: string): Promise<Context>;
}
