import ODataQuery from "dbme/c/odata/ODataQuery";
import type Filter from "sap/ui/model/Filter";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { DecisionTreeItemEntity } from "dbme/w/lib/core/vehicle/tdt/type/IEntity";
/**
 * @nonui5
 */
export default class DecisionTreeItemQuery extends ODataQuery<DecisionTreeItemEntity> {
    constructor(model: ODataModel, ...filter: Filter[]);
    readEntity(): Promise<DecisionTreeItemEntity>;
    createKey(entity: DecisionTreeItemEntity): Promise<string>;
}
