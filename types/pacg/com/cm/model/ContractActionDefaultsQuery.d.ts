import { IListReportExtensionAPI } from "vss/com/fe/ListReport";
import { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
export type TActionDefaults = Record<string, string>;
declare function queryContractShipToPartyAddressDefaults(api: IListReportExtensionAPI | IObjectPageExtensionAPI): Promise<TActionDefaults>;
declare const ContractActionDefaultsQuery: {
    "com.sap.gateway.srvd.pacg.rso_cm.v0001.ShipToAddrMaintain": typeof queryContractShipToPartyAddressDefaults;
};
export type TQueryId = keyof typeof ContractActionDefaultsQuery;
/**
 * @namespace pacg.com.cm.model
 */
export default ContractActionDefaultsQuery;
