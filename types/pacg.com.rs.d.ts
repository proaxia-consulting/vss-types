/**
 * VSS - Rental
 */

declare module "pacg/com/rs/cm/Integration" {
	import IAppComponent from "vss/com/fe/IAppComponent";
	import { IListReportController } from "vss/com/fe/ListReport";
	import { IAnyTable } from "vss/com/fe/IAppContainer";
	import Event from "sap/ui/base/Event";

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
		MainListOnTableSelectionChange = "MainListOnTableSelectionChange",
		OnActionButtonAddToCartPressed = "OnActionButtonAddToCartPressed"
	}

	export interface $MainListComponentOnInit {
		component: IAppComponent;
	}

	export interface $MainListControllerOnInit {
		controller: IListReportController;
		table: IAnyTable;
	}

	export interface $MainListEvent {
		controller: IListReportController;
		event: Event;
	}
}
