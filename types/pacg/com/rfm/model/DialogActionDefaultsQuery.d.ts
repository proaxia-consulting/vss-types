import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { TActionDefaultsEntity } from "pacg/com/rfm/types/Entity";
export type TActionDefaultsQueryParams = {
    Action: string;
    Equipment: string;
};
/**
 * @nonui5
 * @namespace pacg.com.rfm.model
 */
export default class DialogActionDefaultsQuery {
    private _model;
    private _path;
    constructor(_model: ODataModel);
    read(params: TActionDefaultsQueryParams): Promise<TActionDefaultsEntity>;
}
