import BaseController from "dbme/c/controller/Base";
import Event from "sap/ui/base/Event";
import { type Menu$ItemSelectedEvent } from "sap/m/Menu";
import { type Button$PressEvent } from "sap/m/Button";
import { type ODataModel$RequestCompletedEvent } from "sap/ui/model/odata/v2/ODataModel";
import { type SmartTable$BeforeRebindTableEvent } from "sap/ui/comp/smarttable/SmartTable";
/**
 * @controller
 * @namespace dbme.cmf_rep.controller
 */
export default class Main extends BaseController {
    private chartSF;
    private chartSC;
    private tableSF;
    private tableST;
    private modelST;
    private modelSC;
    private menu;
    private refreshControl;
    private httpHeaders?;
    private urlParams;
    private templateEvents;
    private inRefreshReport;
    private refreshTimer;
    onInit(): void;
    onNavButton(event: Event): void;
    onMenuButton(event: Button$PressEvent): void;
    onMenuItemSelect(event: Menu$ItemSelectedEvent): void;
    private InitializeReport;
    private startReport;
    private createUIControls;
    private setHttpHeader;
    onBeforeRebindTable(event: SmartTable$BeforeRebindTableEvent): void;
    onRequestCompleted(event: ODataModel$RequestCompletedEvent): void;
    onReportRunCancel(_oEvent: Event): void;
    private reportRunStart;
    private reportRunStop;
    private refreshReport;
    onFilterBarInitialise(): void;
    private getModelCtrl;
}
