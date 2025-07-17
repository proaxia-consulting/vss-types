import { TGlobalSettingsEntity } from "com/pacg/taskcenter/types/EntitySet";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import Model from "sap/ui/model/Model";
/**
 * @namespace com.pacg.taskcenter.model
 */
export default class GlobalSettingsModel extends Model {
    private _model;
    private _data;
    constructor(model: ODataModel);
    getData(): Promise<TGlobalSettingsEntity>;
    private readGlobalSettings;
}
