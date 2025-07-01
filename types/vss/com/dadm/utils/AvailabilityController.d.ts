import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import Control from "sap/ui/core/Control";
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
