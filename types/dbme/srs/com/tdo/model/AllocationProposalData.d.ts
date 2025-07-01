import JSONModel from "sap/ui/model/json/JSONModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { CalendarDayType, CalendarIntervalType } from "sap/ui/unified/library";
import type { IAllocationProposalData } from "dbme/srs/com/tdo/types/IEntity";
interface IViewData {
    CAL_VIEW: string;
    INTERVAL_TYPE: CalendarIntervalType;
    INTERVAL_NUM_S: int;
    INTERVAL_NUM_M: int;
    INTERVAL_NUM_L: int;
    SHOW_SUBINT: boolean;
    DESCR1: string;
}
export interface IAllocationProposalCalInterval {
    SELECTABLE: boolean;
    VISIT_START_TS: Date;
    VISIT_END_TS: Date;
    UI_TITLE?: string;
    UI_TEXT?: string;
    UI_TEXT_SHORT?: string;
    UI5_COLOR?: string;
    UI5_DAY_TYPE?: CalendarDayType;
}
export interface IAllocationProposalCalRow {
    TITLE: string;
    Proposals: IAllocationProposalCalInterval[];
    Headers?: IAllocationProposalCalInterval[];
}
export interface IAllocationProposalCal {
    StartDate: Date;
    MinDate: Date;
    MaxDate: Date;
    Rows: IAllocationProposalCalRow[];
    Views: {
        selected?: string;
        values?: IViewData[];
    };
}
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
export {};
