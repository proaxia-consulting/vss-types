import { ValueState } from "sap/ui/core/library";
import { MaterialATPOverview } from "vss/com/dapv/entities/Entities";
export declare function getObjectStatus(sConfQuan: MaterialATPOverview["ConfirmedQuantity"], sFinalConfQuan: MaterialATPOverview["FinalConfirmedQuantity"], sOrdQuan: MaterialATPOverview["OrderQuantity"]): {
    state: ValueState;
    text: string;
    icon: string;
};
