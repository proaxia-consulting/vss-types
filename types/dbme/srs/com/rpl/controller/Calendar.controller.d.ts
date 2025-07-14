import CalendarController from "dbme/w/lib/core/calendar/CalendarController";
import type JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace dbme.srs.com.rpl.controller
 * @controller
 */
export default class Calendar extends CalendarController {
    constructor(name: string);
    onInit(): void;
    _getJSONModel(): JSONModel;
}
