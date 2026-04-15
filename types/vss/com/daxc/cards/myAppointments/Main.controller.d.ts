import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
import type { CardLayout } from "vss/com/daxc/types/CustomData";
/**
 * @namespace vss.com.daxc.cards.myAppointments
 */
export default class Main extends LinkListController {
    private _myDelegate;
    onInit(): void;
    onFilterApply(): void;
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
    resizeCard(newCardLayout: CardLayout): void;
    private _formatValue;
    private moveDateAndCheckForAppointments;
    private _getPixelsInt;
    private onButtonLeftArrowPress;
    private _setSourceButtonText;
    private onButtonRightArrowPress;
    private _addDays;
    private onRefresh;
    private _getAppointmentsAllDates;
}
