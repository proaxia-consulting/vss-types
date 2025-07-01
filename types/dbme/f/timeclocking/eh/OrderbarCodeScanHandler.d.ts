import type { Input$ValueHelpRequestEvent } from "sap/m/Input";
import type { BarcodeScannerButton$ScanFailEvent, BarcodeScannerButton$ScanSuccessEvent } from "sap/ndc/BarcodeScannerButton";
import type Controller from "sap/ui/core/mvc/Controller";
declare const OrderbarCodeScanHandler: {
    onInputValueHelpRequest(this: Controller, event: Input$ValueHelpRequestEvent): void;
    onScanSuccess(this: Controller, event: BarcodeScannerButton$ScanSuccessEvent): void;
    onScanFail(this: Controller, event: BarcodeScannerButton$ScanFailEvent): void;
};
/**
 * @namespace dbme.f.timeclocking.eh
 */
export default OrderbarCodeScanHandler;
