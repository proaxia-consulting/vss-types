import type Control from "sap/ui/core/Control";
import type { TCardMyAppointments } from "vss/com/daxc/types/Entities";
export type TMyAppointmentsCustomData = {
    source: TCardMyAppointments["Source"];
    order: TCardMyAppointments["OrderNumber"];
    licplate: TCardMyAppointments["LicPlate"];
    counter: TCardMyAppointments["Counter"];
};
export type TVFconsts = {
    f50Px: float;
    f100Px: float;
    f200Px: float;
    f512Px: float;
    fDefPx: float;
};
export type TUserDefaultParameter = {
    category: string;
    containerCategory: string;
    containerId: string;
    id: string;
    value: string;
};
export type TSelectOption = {
    Sign: string;
    Option: string;
    Low: unknown;
    High: unknown;
};
export type CardLayout = {
    rowSpan: int;
    colSpan: int;
    maxColSpan: int;
    noOfItems: int;
    autoSpan: boolean;
    showOnlyHeader: boolean;
    visible: boolean;
    itemHeight: int;
    headerHeight: int;
    column: int;
    row: int;
    top: string;
    width: string;
    height: string;
    left: string;
    containerLayout: string;
    iRowHeightPx: int;
    iCardBorderPx: int;
} & Control;
