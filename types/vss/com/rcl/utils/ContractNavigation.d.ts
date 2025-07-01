import type AppComponent from "sap/fe/core/AppComponent";
/**
 * @namespace vss.com.rcl.utils
 */
export default class ContractNavigation {
    private _com;
    private _contractNumber?;
    private _model;
    constructor(_com: AppComponent, _contractNumber?: string);
    toContractMaintenance(): void;
    private _navigateWithFioriLaunchpad;
    private _navigateWithOutFioriLaunchpad;
}
