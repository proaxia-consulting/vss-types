import { type ReportIDEntity } from "../types/IEntity";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
export default class ReportIDQuery {
    private _model;
    constructor(_model: ODataModel);
    read(reportID: string): Promise<ReportIDEntity[]>;
}
