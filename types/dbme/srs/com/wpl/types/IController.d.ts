import type { ICalendarController, TCalendarHelper } from "dbme/w/lib/core/types/IController";
import type DemandsFilter from "../helper/DemandsFilter";
import type List from "sap/m/List";
import type SmartFilterHelper from "../helper/SmartFilter";
export type TWPLHelper = TCalendarHelper & {
    filter: typeof DemandsFilter;
    smartFilter: typeof SmartFilterHelper;
};
export interface IWPLController extends ICalendarController {
    _sLastDemandsFilter?: string;
    _getDemandsControl(): List;
}
