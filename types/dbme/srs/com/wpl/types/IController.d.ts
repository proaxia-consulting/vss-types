import type { ICalendarController, TCalendarHelper } from "dbme/w/lib/core/types/IController";
import type List from "sap/m/List";
import type DemandsFilter from "dbme/srs/com/wpl/helper/DemandsFilter";
import type SmartFilterHelper from "dbme/srs/com/wpl/helper/SmartFilter";
export type TWPLHelper = TCalendarHelper & {
    filter: typeof DemandsFilter;
    smartFilter: typeof SmartFilterHelper;
};
export type IWPLController = {
    _sLastDemandsFilter?: string;
    _getDemandsControl(): List;
} & ICalendarController;
