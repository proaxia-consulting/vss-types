import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import { TEquipmentEntity, TActionEntity } from "../types/Entity";
export declare function actionName(actionData: TActionEntity, withDots?: boolean): string;
/**
 * @nonui5
 * @namespace pacg.com.rfm.model
 */
export default class RentalActionQuery {
    private _model;
    private _equipment;
    private _path;
    private _filters;
    constructor(_model: ODataModel, _equipment?: TEquipmentEntity[]);
    read(): Promise<TActionEntity[]>;
}
