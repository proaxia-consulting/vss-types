import type Controller from "sap/ui/core/mvc/Controller";
declare const Formatter: {
    requestStatus(this: Controller, requestStatus: string): string;
    formatChangeRequestId(changeRequestId: string): number;
    formatTabContainerName(name: string, changeRequestArray: {
        requestStatus: string;
    }[]): string;
    changeRequestNavigation(requestStatus: string): "Navigation" | "Inactive";
    addCountToTitle(title: string, elements: unknown[]): string;
    formatDeleteButtonEnabled(startDate?: Date, endDate?: Date): boolean;
};
/**
 * @namespace dbme.f.timeclockingcorrection.model
 */
export default Formatter;
