import JSONModel from "sap/ui/model/json/JSONModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { CalendarDayType } from "sap/ui/unified/library";
import type { IAllocationProposalData } from "dbme/srs/com/tdo/types/IEntity";
export type IAllocationProposalCalInterval = {
    SELECTABLE: boolean;
    VISIT_START_TS: Date;
    VISIT_END_TS: Date;
    UI_TITLE?: string;
    UI_TEXT?: string;
    UI_TEXT_SHORT?: string;
    UI5_COLOR?: string;
    UI5_DAY_TYPE?: CalendarDayType;
};
export type IAllocationProposalCalRow = {
    TITLE: string;
    Proposals: IAllocationProposalCalInterval[];
    Headers?: IAllocationProposalCalInterval[];
};
export type IAllocationProposalCal = {
    StartDate: Date;
    MinDate: Date;
    MaxDate: Date;
    Rows: IAllocationProposalCalRow[];
    Views: {
        selected?: string;
        values?: unknown[];
    };
};
/**
 * @namespace dbme.srs.com.tdo.model
 */
export default class AllocationProposalData {
    private static readonly DEFAULT_VIEW_KEY;
    private static _instance;
    private model?;
    private constructor();
    static getInstance(): AllocationProposalData;
    setODataModel(model: ODataModel): this;
    createModel(): JSONModel;
    map(oCalendarData: IAllocationProposalCal, aRowset: IAllocationProposalData[]): void;
    private updateDefaultView;
}
