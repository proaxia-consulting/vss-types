import Filter from "sap/ui/model/Filter";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import { TCharcFilterEntity } from "vss/com/rcl/types/EntitySet";
/**
 * @namespace pacg.com.rcm.clfn.model
 */
export default class CharacteristicsDeterminationQuery {
    private _model;
    private _valdFields;
    private _path;
    constructor(_model: ODataModel);
    readData(filters: Filter[]): Promise<TCharcFilterEntity[]>;
    validFields(): Promise<string[]>;
}
