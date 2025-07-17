import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
/**
 * @namespace vss.com.daxc.cards.myAppointments
 */
export default class Main extends LinkListController {
    onInit(): void;
    onFilterApply(sChannelId: string, sEventName: string, aObjectFilters: object[]): void;
    private _setTablePageHeight;
    private _onCalendarDateChange;
    private _getAppointmentsForDate;
    private _setupMyAppointmentsTable;
    private _getAppointmentsCounterText;
    private _onPress;
    private _determineAdditionalLayoutObjectStatus;
    private _determineState;
    private _determineIconSource;
    private _renderTime;
    private _setCalendarHeaderProperties;
    private _setCalendarHeaderWidths;
    private resizeCard;
    private _formatValue;
    private _updateFiltersWithGlobalFilters;
    private moveDateAndCheckForAppointments;
    private _getPixelsInt;
    private onButtonLeftArrowPress;
    private _setSourceButtonText;
    private onButtonRightArrowPress;
    private _addDays;
}
