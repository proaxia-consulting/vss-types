import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
/**
 * @nonui5
 * @namespace dbme.s.act.doc.lib
 */
export default class FeatureCheck {
    private _model;
    constructor(_model: ODataModel);
    isActiveEntity(entityName: string): Promise<boolean>;
}
