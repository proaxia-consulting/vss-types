import type Control from "sap/ui/core/Control";
import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
export declare class AvailabilityController {
    private contexts;
    private busyModel;
    private requestCount;
    private model;
    constructor(model: ODataModel);
    registerControl(control: Control): void;
    loadAvailability(): void;
    refresh(): void;
    private createBusyModel;
}
