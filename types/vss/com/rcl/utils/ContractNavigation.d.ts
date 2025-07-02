import Component from "sap/ui/core/Component";
/**
 * @nonui5
 * @namespace vss.com.rcl.utils
 */
export default class ContractNavigation {
    private _com;
    private _contractNumber?;
    private _model;
    constructor(_com: Component, _contractNumber?: string);
    toContractMaintenance(): void;
    private _navigateWithFioriLaunchpad;
    private _navigateWithOutFioriLaunchpad;
}
