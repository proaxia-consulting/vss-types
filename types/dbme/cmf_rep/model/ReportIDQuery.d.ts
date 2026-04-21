import { type ReportIDEntity } from "dbme/cmf_rep/types/IEntity";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
export default class ReportIDQuery {
    private _model;
    constructor(_model: ODataModel);
    read(reportID: string): Promise<ReportIDEntity[]>;
}
