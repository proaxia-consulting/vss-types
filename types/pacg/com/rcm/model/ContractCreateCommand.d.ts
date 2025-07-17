import type { TDraftAdministrativeData } from "vss/com/fe/DraftTypes";
export type TDocCreateOut = {
    esDocHeader: {
        docNumber?: string;
        docType?: string;
    };
};
/**
 * @namespace pacg.com.rcm.model
 * @nonui5
 */
export default class ContractCreateCommand {
    private _model;
    constructor();
    call(draftAdministrativeData: TDraftAdministrativeData): Promise<TDocCreateOut>;
    messageDialog(): import("sap/m/Dialog").default;
}
