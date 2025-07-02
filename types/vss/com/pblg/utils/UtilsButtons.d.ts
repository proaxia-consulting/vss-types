import Button from "sap/m/Button";
import HBox from "sap/m/HBox";
import Event from "sap/ui/base/Event";
import { TableAllData, TableColumns } from "../library/Types";
import { ButtonType } from "sap/m/library";
export declare const _button_modes: {
    sMoreVSSOrders: string;
    sSubmit: string;
    sAllButtons: string;
};
export declare const _consts: {
    sMore: string;
    sSubmit: string;
};
export declare function getButtonWithText(sButtonId: string, sText: string, sType: ButtonType, fVisibilityFormatter: Function, fTextFormatter: Function, fIconFormatter: Function | undefined, fPressHandler: (oEvent: Event) => void): Button;
export declare function buttonMoreVisibilityFormatter(sText: string): boolean;
export declare function buttonSubmitVisibilityFormatter(sText: string): boolean;
export declare function buttonMoreTextFormatter(sText: string): string;
export declare function buttonSubmitTextFormatter(sText: string): string;
export declare function buttonIconFormatter(sText: string): string;
export declare function buttonSemanticTypeFormatter(sText: string): ButtonType | keyof ButtonType;
export declare function getAllRelevantButtons(sButtonId: string, fPressHandler: (oEvent: Event) => void): HBox;
export declare function setButtonsMoreOrdersLogic(oRowData: TableAllData, bMultiplePO: boolean): TableColumns;
export declare function setButtonsColumn(oData: TableAllData, sMode: string | undefined): TableAllData;
export declare function removeAllMoreButtons(iIndexStart: int, iIndexEnd: int, aRowData: Array<TableColumns>): void;
export declare function removeMoreButton(iIndex: int, aRowData: Array<TableColumns>): void;
export declare function onButtonPress(this: any, oEvent: Event): void;
