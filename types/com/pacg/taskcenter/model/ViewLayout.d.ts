import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { TViewGroupEntity } from "com/pacg/taskcenter/types/EntitySet";
/**
 * @namespace com.pacg.taskcenter.model
 */
export default class ViewLayout {
    private _model;
    constructor(_model: ODataModel);
    readViewLayoutId(): Promise<string>;
    ReadViewGroups(layoutId?: string): Promise<TViewGroupEntity[]>;
}
