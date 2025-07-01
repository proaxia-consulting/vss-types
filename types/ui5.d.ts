declare module "ui5" {
	import type ListItemBase from "sap/m/ListItemBase";
	import type FilterOperator from "sap/ui/model/FilterOperator";
	import type Item from "sap/ui/core/Item";
	import type Event from "sap/ui/base/Event";
	import type EventProvider from "sap/ui/base/EventProvider";

	export type $TRoute = {
		pattern: string;
		name: string;
		target: string;
	};
	export type $TTargetSettingsNavigation = {
		detail: {
			route: string;
		};
	};
	export type $TTargetSettings = {
		entitySet: string;
		editableHeaderContent: boolean;
		sectionLayout: string;
		navigation?: Record<string, $TTargetSettingsNavigation>;
	};
	export type $TTarget = {
		type: string;
		id: string;
		name: string;
		options: {
			settings: $TTargetSettings;
		};
	};
	export type $TRouting = {
		routes: $TRoute[];
		targets: Record<string, $TTarget>;
	};

	export type $TService = {
		factoryName: string;
		startup: string;
		settings: Record<string, unknown>;
	};

	export type $TDataSource = {
		uri: string;
	};

	export type $TManifest = {
		"sap.app": {
			dataSources: Record<string, $TDataSource>;
			applicationVersion: {
				version: number;
			};
		};
		"sap.ui5": {
			routing: $TRouting;
			services: Record<string, $TService>;
		};
	};

	export type $TMultiComboBoxSelectionChangeEventParams = {
		selected: boolean;
		changedItems?: Item[];
		changedItem?: Item;
	};

	export type $TSelectionChangeEventParams = {
		listItems: ListItemBase[];
		selected: boolean;
	};

	export type TTokenDataRange = {
		exclude: boolean;
		keyField: string;
		operation: FilterOperator;
		value1: string;
		value2?: string;
	};
	export type TTokenData = {
		range?: TTokenDataRange;
	};

	export type TEntityTypeProperty = {
		$kind: string;
		$Type: string;
		$Nullable?: boolean;
		$MaxLength?: number;
	};
	export type TEntityType = Record<string, TEntityTypeProperty> & {
		$Key: string[];
		$kind: string;
	};

	export type TEventHandlerFunction = (event: Event, ...args: unknown[]) => void;

	export interface $EventTyped<ParamsType extends Record<string, unknown> = {}, SourceType extends EventProvider = EventProvider> extends Event {
		getParameter<ParamName extends keyof ParamsType>(sName: ParamName): ParamsType[ParamName];
		getParameters(): ParamsType;
		getSource<T extends SourceType>(): T;
	}
}

declare module "sap/ui/thirdparty/jquery" {
	export default jQuery;
}

declare module "sap/ui/core/XMLTemplateProcessor" {
	import Element from "sap/ui/core/Element";

	export default class XMLTemplateProcessor {
		public static loadTemplatePromise(sTemplateName: string, sExtension: string): Promise<Element>;
	}
}
declare module "sap/ui/core/util/XMLPreprocessor" {
	import Context from "sap/ui/model/Context";
	import Model from "sap/ui/model/Model";
	import Element from "sap/ui/core/Element";

	export type $XMLPreprocessorProcessViewInfo = {
		caller?: string;
		componentId?: string;
		name?: string;
		sync?: boolean;
	};
	export type $XMLPreprocessorProcessSettings = {
		bindingContexts?: Record<string, Context>;
		models?: Record<string, Model>;
	};

	export default class XMLPreprocessor {
		public static process(oRootElement: Element, oViewInfo: $XMLPreprocessorProcessViewInfo, mSettings: $XMLPreprocessorProcessSettings): Element | Promise<Element>;
	}
}

declare module "sap/ui/comp/smartfield/SmartField" {
	import type SmartField from "sap/ui/comp/smartfield/SmartField";
	import type { $EventTyped } from "ui5";
	import DragDropInfo$DragStartEvent from "sap/ui/core/dnd/DragDropInfo";

	export type SmartField$ChangeEvent = $EventTyped<{ newValue: string }, SmartField>;
	export type SmartField$InnerControlsCreatedEvent = $EventTyped<{}, SmartField>;
	export type SmartField$ContextEditableChangedEvent = $EventTyped<{ editable: boolean }, SmartField>;
}

declare module "sap/ui/comp/smartfield/TextArrangementDelegate" {
	export default class TextArrangementDelegate {
		fetchIDAndDescriptionCollectionIfRequired(oSettings?: { mode: string; forceTextArrangementFetch?: boolean });
	}
}

declare module "sap/ui/comp/smartfield/ODataTypes" {
	import type SmartField from "sap/ui/comp/smartfield/SmartField";
	import type SimpleType from "sap/ui/model/SimpleType";

	/**
	 * Utility class to create OData types based on OData metadata.
	 * @private
	 */
	export default class ODataTypes {
		public constructor(parent: SmartField);
		public getType(property: { property: object }, formatOptions?: object, constraints?: object, settings?: object): SimpleType;
		public destroy(): void;
	}
}

declare module "sap/ui/comp/smartfield/ODataControlFactory" {
	import TextArrangementDelegate from "sap/ui/comp/smartfield/TextArrangementDelegate";

	export default class ODataControlFactory {
		oTextArrangementDelegate: TextArrangementDelegate;
	}
}

declare module "sap/ui/comp/smarttable/SmartTable" {
	import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
	import type { $EventTyped } from "ui5";
	import type Filter from "sap/ui/model/Filter";
	import type Sorter from "sap/ui/model/Sorter";

	export type $SmartTableBeforeRebindEventParameters = {
		bindingParams: {
			filters: Filter[];
			sorter: Sorter[];
			parameters: {
				select: string;
			};
			events: Record<string, CallableFunction>;
			preventTableBind: boolean;
		};
	};

	export type SmartTable$BeforeRebindTableEvent = $EventTyped<$SmartTableBeforeRebindEventParameters, SmartTable>;
	export type SmartTable$InitialiseEvent = $EventTyped<{}, SmartTable>;
}

declare module "sap/ui/core/Control" {
	import type Control from "sap/ui/core/Control";
	import type { $EventTyped } from "ui5";

	export type Control$ValidateFieldGroupEvent = $EventTyped<{ fieldGroupIds?: string[] }, Control>;
}

declare module "sap/ui/core/dnd/DropInfo" {
	import type DropInfo from "sap/ui/core/dnd/DropInfo";
	import type Element from "sap/ui/core/Element";
	import type { DragSession } from "sap/ui/core/dnd/DragAndDrop";
	import type { $EventTyped } from "ui5";

	export type DropInfo$DropEvent = $EventTyped<
		{
			dragSession: DragSession;
			draggedControl: Element;
			droppedControl: Element;
		},
		DropInfo
	>;
	export type DropInfo$DragEnterEvent = $EventTyped<
		{
			target: Element;
			dragSession: DragSession;
		},
		DropInfo
	>;
}

declare module "sap/ui/core/dnd/DragDropInfo" {
	import type DragDropInfo from "sap/ui/core/dnd/DragDropInfo";
	import type { $EventTyped } from "ui5";

	export type DragDropInfo$DragStartEvent = $EventTyped<{}, DragDropInfo>;
	export type DragDropInfo$DragEndEvent = $EventTyped<{}, DragDropInfo>;
}

declare module "sap/ui/model/odata/v2/ODataModel" {
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import type { $EventTyped } from "ui5";

	export type ODataModel$RequestSentEvent = $EventTyped<
		{
			headers: Record<string, string>;
			url: string;
		},
		ODataModel
	>;

	export type ODataModel$RequestFailedEvent = $EventTyped<{ url?: string; method?: string }, ODataModel>;
}

declare module "sap/ui/core/routing/Route" {
	import Route from "sap/ui/core/routing/Route";
	import { $EventTyped } from "ui5";

	export type Route$MatchedEvent = $EventTyped<{}, Route>;
	export type Route$PatternMatchedEvent = $EventTyped<{ arguments?: Record<string, unknown> }, Route>;
}

declare module "sap/ui/core/routing/Router" {
	import type Router from "sap/ui/core/routing/Router";
	import type { $EventTyped } from "ui5";

	export type Router$RouteMatchedEvent = $EventTyped<{ name: string; arguments?: Record<string, unknown> }, Router>;
}

declare module "sap/ui/core/service/ServiceContext" {
	import AppComponent from "sap/fe/core/AppComponent";

	export default interface ServiceContext<TServiceSettings> {
		scopeObject: AppComponent;
		scopeType: string;
		settings: TServiceSettings;
	}
}

declare module "sap/ui/core/service/Service" {
	import ServiceContext from "sap/ui/core/service/ServiceContext";

	export default abstract class Service<TServiceSettings> {
		initPromise: Promise<this>;

		public constructor(context: ServiceContext<TServiceSettings>);
		public getContext(): ServiceContext<TServiceSettings>;
		abstract init(): void;
	}
}
declare module "sap/ui/core/service/ServiceFactory" {
	import ServiceContext from "sap/ui/core/service/ServiceContext";

	export default class ServiceFactory<TServiceSettings> {
		public createInstance(context: ServiceContext<TServiceSettings>);
	}
}

/**
 * @link https://ui5.sap.com/resources/sap/ui/core/service/ServiceFactoryRegistry-dbg.js
 */
declare module "sap/ui/core/service/ServiceFactoryRegistry" {
	export default class ServiceFactoryRegistry {
		public static register(sServiceFactoryName: string, oServiceFactory: any);
		public static unregister(sServiceFactoryName: string);
		public static get(sServiceFactoryName: string): any;
	}
}

declare module "sap/m/PlanningCalendarRenderer" {
	import type PlanningCalendar from "sap/m/PlanningCalendar";
	import type RenderManager from "sap/ui/core/RenderManager";

	export default class PlanningCalendarRenderer {
		public static render(oRm: RenderManager, oPC: PlanningCalendar): void;
	}
}

declare module "sap/ovp/cards/linklist/Component" {
	import OVPComponent from "sap/ovp/app/Component";
	export default class Component extends OVPComponent {
		public static extend(id: string, object: any): Function;
		public init(...args: unknown[]): void;
	}
}
declare module "sap/ovp/cards/linklist/LinkList.controller" {
	import Event from "sap/ui/base/Event";

	export default class LinkList {
		public static extend(id: string, object: any): Function;
		public onInit(...args: unknown[]): void;
		public onLinkListLineItemUrl(oEvent: Event): void;
		public onLinkNavigation(oEvent: Event): void;
	}
}

declare module "sap/m/Button" {
	import type Button from "sap/m/Button";
	import type { $EventTyped } from "ui5";

	export type Button$PressEvent = $EventTyped<{}, Button>;
}

declare module "sap/m/Dialog" {
	import type Dialog from "sap/m/Dialog";
	import type { $EventTyped } from "ui5";
	export type Dialog$AfterCloseEvent = $EventTyped<{}, Dialog>;
	export type Dialog$BeforeCloseEvent = $EventTyped<{}, Dialog>;
}

declare module "sap/m/FacetFilter" {
	import type FacetFilter from "sap/m/FacetFilter";
	import type { $EventTyped } from "ui5";
	export type FacetFilter$ResetEvent = $EventTyped<{}, FacetFilter>;
}

declare module "sap/m/MultiComboBox" {
	import type MultiComboBox from "sap/m/MultiComboBox";
	import type { $EventTyped } from "ui5";
	export type MultiComboBox$SelectionChangeEvent = $EventTyped<{}, MultiComboBox>;
}

declare module "sap/m/Select" {
	import type Select from "sap/m/Select";
	import type Item from "sap/ui/core/Item";
	import type { $EventTyped } from "ui5";
	export type Select$ChangeEvent = $EventTyped<{ selectedItem: Item }, Select>;
}

declare module "sap/ui/table/Table" {
	import type { $EventTyped } from "ui5";
	import type Table from "sap/ui/table/Table";
	export type Table$RowSelectionChangeEvent = $EventTyped<{ rowIndices: number[] }, Table>;
}

declare module "sap/m/GenericTile" {
	import type GenericTile from "sap/m/GenericTile";
	import type { $EventTyped } from "ui5";

	export type GenericTile$PressEvent = $EventTyped<{}, GenericTile>;
}

declare module "sap/m/Input" {
	import type Input from "sap/m/Input";
	import type { $EventTyped } from "ui5";

	export type Input$ValueHelpRequestEvent = $EventTyped<{}, Input>;
	export type Input$ChangeEvent = $EventTyped<{ newValue: unknown }, Input>;
}

declare module "sap/m/PanelRenderer" {
	import type RenderManager from "sap/ui/core/RenderManager";
	import type Control from "sap/ui/core/Control";

	export default class PanelRenderer {
		public static render(rm: RenderManager, control: Control): void;
	}
}

declare module "sap/m/PlanningCalendar" {
	import type PlanningCalendar from "sap/m/PlanningCalendar";
	import type PlanningCalendarRow from "sap/m/PlanningCalendarRow";
	import type CalendarAppointment from "sap/ui/unified/CalendarAppointment";
	import type { $EventTyped } from "ui5";

	export type PlanningCalendar$AppointmentSelectEvent = $EventTyped<
		{ appointment?: CalendarAppointment[]; appointments?: CalendarAppointment[]; multiSelect?: boolean },
		PlanningCalendar
	>;
	export type PlanningCalendar$RowSelectionChangeEvent = $EventTyped<{ rows: PlanningCalendarRow[] }, PlanningCalendar>;
}

declare module "sap/m/PlanningCalendarRow" {
	import type PlanningCalendarRow from "sap/m/PlanningCalendarRow";
	import type CalendarAppointment from "sap/ui/unified/CalendarAppointment";
	import type { $EventTyped } from "ui5";
	export type PlanningCalendarRow$AppointmentDragEnterEvent = $EventTyped<{ appointment: CalendarAppointment }, PlanningCalendarRow>;
}

declare module "sap/m/upload/UploadSet" {
	import type UploadSet from "sap/m/upload/UploadSet";
	import type UploadSetItem from "sap/m/upload/UploadSetItem";
	import type { $EventTyped } from "ui5";

	export type UploadSet$AfterItemRemovedEvent = $EventTyped<{ item?: UploadSetItem }, UploadSet>;
	export type UploadSet$BeforeUploadStartsEvent = $EventTyped<{ item?: UploadSetItem }, UploadSet>;
	export type UploadSet$FileSizeExceededEvent = $EventTyped<{}, UploadSet>;
	export type UploadSet$FileTypeMismatchEvent = $EventTyped<{}, UploadSet>;
	export type UploadSet$UploadCompletedEvent = $EventTyped<{ item?: UploadSetItem }, UploadSet>;
	export type UploadSet$UploadTerminatedEvent = $EventTyped<{}, UploadSet>;
}

declare module "sap/m/upload/UploadSetItem" {
	import type UploadSetItem from "sap/m/upload/UploadSetItem";
	import type { $EventTyped } from "ui5";

	export type UploadSetItem$OpenPressedEvent = $EventTyped<{}, UploadSetItem>;
}

declare module "sap/m/ListBase" {
	import type ListBase from "sap/m/ListBase";
	import type ListItemBase from "sap/m/ListItemBase";
	import type { $EventTyped } from "ui5";

	export type ListBase$UpdateFinishedEvent = $EventTyped<{ reason: string }, ListBase>;
	export type ListBase$SelectionChangeEvent = $EventTyped<{ listItem?: ListItemBase; listItems?: ListItemBase[]; selected?: boolean; selectAll?: boolean }, ListBase>;
	export type ListBase$BeforeOpenContextMenuEvent = $EventTyped<{ listItem?: ListItemBase }, ListBase>;
	export type ListBase$DeleteEvent = $EventTyped<{ listItem?: ListItemBase }, ListBase>;
}

declare module "sap/m/IconTabBar" {
	import IconTabBar from "sap/m/IconTabBar";
	import IconTabFilter from "sap/m/IconTabFilter";
	import type { $EventTyped } from "ui5";

	export type IconTabBar$SelectEvent = $EventTyped<{ selectedItem: IconTabFilter }, IconTabBar>;
}

declare module "sap/m/SearchField" {
	import type SearchField from "sap/m/SearchField";
	import type { $EventTyped } from "ui5";

	export type SearchField$LiveChangeEvent = $EventTyped<{ query?: string }, SearchField>;
}

declare module "sap/ui/unified/FileUploader" {
	import type FileUploader from "sap/ui/unified/FileUploader";
	import type { $EventTyped } from "ui5";

	export type FileUploader$ChangeEvent = $EventTyped<{ newValue?: string }, FileUploader>;
	export type FileUploader$UploadCompleteEvent = $EventTyped<{ response?: string; responseRaw?: string; status?: number }, FileUploader>;
	export type FileUploader$UploadStartEvent = $EventTyped<{}, FileUploader>;
}

declare module "sap/ui/unified/MenuItemBase" {
	import type MenuItemBase from "sap/ui/unified/MenuItemBase";
	import type { $EventTyped } from "ui5";
	export type MenuItemBase$SelectEvent = $EventTyped<{ item: MenuItemBase }, MenuItemBase>;
}
