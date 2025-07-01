import CalendarController from "dbme/w/lib/core/calendar/CalendarController";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
/**
 * @namespace dbme.srs.com.rpl.controller
 * @controller
 */
export default class Calendar extends CalendarController {
    protected _filterBar?: SmartFilterBar;
    constructor(sName: string);
    onInit(): void;
    _getJSONModel(): JSONModel;
    _getFilter(): SmartFilterBar;
}
