/**
 * VSS - Rental
 */

declare module "pacg/com/rs/cm/Enums" {
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
