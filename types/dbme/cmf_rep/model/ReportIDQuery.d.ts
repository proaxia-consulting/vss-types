import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { type ReportIDEntity } from "dbme/cmf_rep/types/IEntity";
export default class ReportIDQuery {
    private _model;
    constructor(_model: ODataModel);
    read(reportID: string): Promise<ReportIDEntity[]>;
}
