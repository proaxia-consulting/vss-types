/**
 * VSS - Rental Contract Management
 */

declare module "pacg/com/rcm/share/Enums" {
	export enum EventChannel {
		RentalContractManagement = "RentalContractManagement"
	}

	export enum EventId {
		MainListComponentOnInit = "MainListComponentOnInit",
		MainListControllerOnInit = "MainListControllerOnInit",
		MainListControllerOnViewNeedsRefresh = "MainListControllerOnViewNeedsRefresh",
		MainListControllerOnPageReady = "MainListControllerOnPageReady",
		MainListControllerOnPendingFilters = "MainListControllerOnPendingFilters",
		MainListControllerOnAfterRendering = "MainListControllerOnAfterRendering",
		MainListControllerOnBeforeRendering = "MainListControllerOnBeforeRendering",
		MainListOnTableSelectionChange = "MainListOnTableSelectionChange"
	}
}
