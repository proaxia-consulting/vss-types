declare module "ui5" {
	import type ListItemBase from "sap/m/ListItemBase";
	import type FilterOperator from "sap/ui/model/FilterOperator";
	import type Item from "sap/ui/core/Item";
	import type Event from "sap/ui/base/Event";
	import type Filter from "sap/ui/model/Filter";
	import type Sorter from "sap/ui/model/Sorter";

	export type TObject = Record<string, unknown>;

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
		settings: TObject;
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

	export type $SmartTableBeforeRebindEventParams = {
		bindingParams: {
			filters: Filter[];
			sorter: Sorter[];
			parameters: {
				select: string;
				expand?: string;
			};
			events: Record<string, CallableFunction>;
			preventTableBind: boolean;
		};
	};
}

declare module "sap/ui/thirdparty/jquery" {
	import * as jq from "jquery";

	interface JQuery {
		<T>(element: T): jq<T>;
	}
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

declare module "sap/ui/comp/smartfield/TextArrangementDelegate" {
	export default class TextArrangementDelegate {
		fetchIDAndDescriptionCollectionIfRequired(oSettings?: { mode: string; forceTextArrangementFetch?: boolean });
	}
}

declare module "sap/ui/comp/smartfield/ODataTypes" {
	import type SmartField from "sap/ui/comp/smartfield/SmartField";
	import type { Property } from "sap/ui/model/odata/ODataMetaModel";
	import type SimpleType from "sap/ui/model/SimpleType";

	/**
	 * Utility class to create OData types based on OData metadata.
	 * @private
	 */
	export default class ODataTypes {
		public constructor(parent: SmartField);
		public getType(property: { property: Property }, formatOptions?: object, constraints?: object, settings?: object): SimpleType;
		public destroy(): void;
	}
}

declare module "sap/ui/comp/smartfield/ODataControlFactory" {
	import TextArrangementDelegate from "sap/ui/comp/smartfield/TextArrangementDelegate";

	export default class ODataControlFactory {
		oTextArrangementDelegate: TextArrangementDelegate;
	}
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
	import type Event from "sap/ui/base/Event";
	import type Controller from "sap/ui/core/mvc/Controller";
	import type JSONModel from "sap/ui/model/json/JSONModel";
	export type CardLayout = {
		autoSpan: boolean;
		colSpan: number;
		column: number;
		containerLayout: string;
		headerHeight: number;
		height: string;
		iCardBorderPx: number;
		iRowHeightPx: number;
		itemHeight: number;
		left: string;
		maxColSpan: number;
		noOfItems: number;
		row: number;
		rowSpan: number;
		showOnlyHeader: boolean;
		top: string;
		visible: boolean;
		width: string;
	};

	export default class LinkList extends Controller {
		public static extend(id: string, object: any): Function;
		public onInit(...args: unknown[]): void;
		public onLinkListLineItemUrl(oEvent: Event): void;
		public onLinkNavigation(oEvent: Event): void;
		public getCardPropertiesModel(): JSONModel;
		public getHeaderHeight(): number;
		public resizeCard(obj: CardLayout): void;
		public getItemHeight(t: LinkList, arg1: string): number;
		public oDashboardLayoutUtil: {
			ROW_HEIGHT_PX: number;
			CARD_BORDER_PX: number;
			dashboardLayoutModel: {
				getCardById(x: string): {
					dashboardLayout: CardLayout;
				};
			};
		};
		public iPreviousRowSpan: number;
	}
}

declare module "sap/ovp/cards/charts/analytical/analyticalChart.controller" {
	import type Controller from "sap/ui/core/mvc/Controller";
	export default class BaseAnalyticalChart extends Controller {
		public onInit(...args: unknown[]): void;
		public onHeaderClick(oEvent: jQuery.Event & { target: { id: string } }): void;
		public doNavigation(oContext: object, oNavigationField: object, sNavMode: string): void;
	}
}

declare module "sap/ovp/cards/charts/analytical/Component" {
	import OVPComponent from "sap/ovp/app/Component";
	export default class Component extends OVPComponent {
		public static extend(id: string, object: any): Function;
		public init(...args: unknown[]): void;
	}
}

declare module "sap/m/PanelRenderer" {
	import type RenderManager from "sap/ui/core/RenderManager";
	import type Control from "sap/ui/core/Control";

	export default class PanelRenderer {
		public static render(rm: RenderManager, control: Control): void;
	}
}
