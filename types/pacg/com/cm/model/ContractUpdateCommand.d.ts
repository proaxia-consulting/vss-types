import { TDraftAdministrativeData } from "vss/com/fe/DraftTypes";
type TDocUpdateOut = void;
/**
 * @namespace pacg.com.cm.model
 */
export default class ContractUpdateCommand {
    private _model;
    constructor();
    call(draftAdministrativeData: TDraftAdministrativeData): Promise<TDocUpdateOut>;
    messageDialog(): import("sap/m/Dialog").default;
}
export {};
