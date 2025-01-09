declare module "vss/com/rcl/model/Enums" {
	export const EventChannel: {
		readonly RentalContractManagement: "RentalContractManagement";
	};
	export type EventChannelType = (typeof EventChannel)[keyof typeof EventChannel];
	export const ComponentId: {
		readonly cc: "vss.com.rcl.cc";
		readonly eqs: "vss.com.rcl.eqs";
		readonly eqsui: "vss.com.rcl.eqsui";
		readonly ml: "vss.com.rcl.ml";
	};
	export type ComponentIdType = (typeof ComponentId)[keyof typeof ComponentId];
	export const CharacteristicDataType: {
		readonly Numeric: "NUM";
		readonly String: "CHAR";
		readonly Currency: "CURR";
		readonly Date: "DATE";
		readonly Time: "TIME";
		readonly UserDefined: "UDEF";
	};
	export type CharacteristicDataTypeType = (typeof CharacteristicDataType)[keyof typeof CharacteristicDataType];
	export const FieldDataType: {
		readonly Flag: "FLAG";
		readonly Numeric: "NUM";
		readonly String: "CHAR";
		readonly Currency: "CURR";
		readonly Date: "DATE";
		readonly Time: "TIME";
		readonly UserDefined: "UDEF";
	};
	export type FieldDataTypeType = (typeof FieldDataType)[keyof typeof FieldDataType];
	export const EditMode: {
		readonly Display: "Display";
		readonly Editable: "Editable";
	};
	export const FixedString: {
		readonly eol: "\n\r";
	};
	export const ModelName: {
		readonly action: "action";
		readonly attachment: "att";
		readonly cart: "cart";
		readonly cartMeta: "cartMeta";
		readonly device: "device";
		readonly equipment: "equipment";
		readonly i18n: "i18n";
		readonly internal: "internal";
		readonly local: "local";
		readonly pageInternal: "pageInternal";
		readonly rentalApp: "rentalApp";
		readonly sign: "sign";
		readonly tree: "tree";
		readonly ui: "ui";
	};
	export type ModelNameType = (typeof ModelName)[keyof typeof ModelName];
	export const AttachmentModelFunction: {
		readonly GetAttachmentCount: "GetAttachmentCount";
	};
	export const RentalClassType: {
		readonly Accessory: "A";
		readonly MainDevice: "M";
	};
	export type RentalClassTypeType = (typeof RentalClassType)[keyof typeof RentalClassType];
	export const RouteName: {
		readonly CreateContractProxy: "CreateContractProxy";
		readonly Default: "Default";
	};
	export const RentalAppUrl: {
		readonly ContractManagement: "/sap/bc/ui5_ui5/pacg/rsf_rcm";
		readonly ContractMaintenance: "/sap/bc/ui5_ui5/pacg/rsf_cm";
		readonly FleetManagement: "/sap/bc/ui5_ui5/pacg/rsf_rfm";
		readonly Handover: "/sap/bc/ui5_ui5/pacg/rsf_hdr";
	};
	export const SemanticObject: {
		readonly AssetDisplay: "pacg_rs_tcode_as03-display";
		readonly ContractManagement: "pacg_rsf_rcm";
		readonly ContractManagementDisplay: "pacg_rsf_rcm-display";
		readonly ContractMaintenance: "pacg_rsf_cm";
		readonly ContractMaintenanceDisplay: "pacg_rsf_cm-display";
		readonly Delivery: "pacg_rsf_dlv";
		readonly DeliveryDisplay: "pacg_rsf_dlv-display";
		readonly FleetManagement: "pacg_rsf_rfm";
		readonly FleetManagementDisplay: "pacg_rsf_rfm-display";
		readonly Handover: "pacg_rsf_hdr";
		readonly HandoverCreate: "pacg_rsf_hdr-create";
		readonly HandoverDisplay: "pacg_rsf_hdr-display";
		readonly EquipmentDisplay: "pacg_rs_tcode_ie03-display";
		readonly MaterialDisplay: "pacg_rs_tcode_mm03-display";
		readonly MeasurementDocumentCreate: "pacg_rs_tcode_ik22-create";
		readonly SalesContractDisplay: "pacg_rs_tcode_va43-display";
		readonly QuotationDisplay: "pacg_rs_tcode_va23-display";
		readonly VSSOrderCreate: "pacg_rs_tcode_dbe_order01-create";
	};
	export const ObjectPageSection: {
		readonly Accessories: "Accessories";
		readonly EquipmentHierarchy: "EquipmentHierarchy";
	};
	export const EntitySet: {
		readonly CharcFilter: "CharcFilter";
		readonly Charc: "CMCharc";
		readonly Contract: "Contract";
		readonly Equipment: "Equipment";
		readonly EquipmentHierarchyCustom: "EquipmentHierarchyCustom";
		readonly Root: "Root";
		readonly MaterialNS: "MaterialNS";
		readonly MainDeviceAccessory: "MainDeviceAccessory";
		readonly MainDeviceAccessoryCustom: "MainDeviceAccessoryCustom";
		readonly RentalEquipment: "RentalEquipment";
		readonly RentalEquipmentBase: "RentalEquipmentBase";
		readonly Delivery: "Delivery";
		readonly DeliveryItem: "DeliveryItem";
		readonly Handover: "Handover";
		readonly HandoverItem: "HandoverItem";
		readonly HandoverItemCheckListType: "HandoverItemCheckListType";
		readonly HandoverItemSection: " HandoverItemSection";
		readonly HandoverItemField: "HandoverItemField";
		readonly CheckListTypeDetermination: "CheckListTypeDetermination";
		readonly CheckListType: "CheckListType";
		readonly CheckListTypeSection: "CheckListTypeSection";
		readonly CheckListSection: "CheckListSection";
		readonly CheckListSectionField: "CheckListSectionField";
		readonly CheckListField: "CheckListField";
	};
	export type EntitySetType = (typeof EntitySet)[keyof typeof EntitySet];
	/**
	 * @deprecated use DocumentIOType instead
	 */
	export const DeliveryIOType: {
		readonly Inbound: "I";
		readonly Outbound: "O";
	};
	export type DeliveryIOTypeType = (typeof DeliveryIOType)[keyof typeof DeliveryIOType];
	export const DocumentIOType: {
		readonly Inbound: "I";
		readonly Outbound: "O";
	};
	export type DocumentIOTypeType = (typeof DocumentIOType)[keyof typeof DocumentIOType];
	export const SemanticObjectAction: {
		readonly create: "create";
		readonly display: "display";
	};
	export const PreferredMode: {
		readonly display: "display";
		readonly edit: "edit";
		readonly create: "create";
	};
	export const ServiceName: {
		readonly Routing: "routingService";
	};
}
declare module "vss/com/rcl/types/EntitySet" {
	import type { TDraftAwareEntity } from "vss/com/fe/DraftTypes";
	import type { AttachmentModelFunction, CharacteristicDataTypeType, DocumentIOTypeType, FieldDataTypeType, RentalClassTypeType } from "vss/com/rcl/model/Enums";
	export type TRootObjectKey = {
		ID: string;
		Equipment?: string;
		Material?: string;
	};
	export type TRootEntity = {
		ID: string;
		EquipmentName?: string;
		Material?: string;
		MaterialName?: string;
		Plant: string;
		PlantName: string;
		StorageLocation: string;
		StorageLocationName: string;
		Batch: string;
		RentalClassType: string;
		RentalClassTypeText: string;
		HasHierarchyChildren?: boolean;
		HasHierarchyParent?: boolean;
		HierarchyLevel: number;
		HierarchyRoot: string;
		SuperordinateEquipment?: string;
		SuperordinateEquipmentName?: string;
		CharacteristicValueFilter: string;
		IsMaterial: boolean;
		_CharacteristicsDisplay?: TObjectCharacteristicsDisplay[];
	};
	export type TObjectCharacteristicsDisplay = {
		ClfnObjectID: string;
		ClfnObjectTable: string;
		ClassInternalID: string;
		CharcInternalID: string;
		SequenceNumber: number;
		Icon: string;
		CharcDescription: string;
		_Value?: TCMObjectCharcValueEntity[];
	};
	export type TCMObjectCharcValueEntity = {
		ClfnObjectID: string;
		ClfnObjectTable: string;
		CharcInternalID: string;
		CharcValue: string;
		CharcValueDescription?: string;
		CharcFromDecimalValue: string;
		_Characteristic?: TCharacteristic;
		_FixedValue?: TCharcValEntity;
	};
	export type TCharacteristic = {
		CharcInternalID: string;
		CharcDecimals: number;
		CharcLength: number;
	};
	export type TCharcFilterEntity = {
		CharcInternalID: string;
		_Charc?: TCharcEntity;
		_ClassCharc?: TClassCharcEntity[];
	};
	export type TClassCharcEntity = {
		CharcInternalID: string;
		ClassInternalID: string;
		ClassDescription: string;
		RentalClassType: RentalClassTypeType;
		_Charc?: TCharcEntity[];
	};
	export type TCharcEntity = {
		AdditionalValueIsAllowed: boolean;
		Characteristic: string;
		Characteristic_Text: string;
		CharcDataType: CharacteristicDataTypeType;
		CharcDecimals: number;
		CharcExponentFormat: string;
		CharcExponentValue: number;
		CharcInternalID: string;
		TimeIntervalNumber: string;
		CharcLength: number;
		CharcTemplate: string;
		CharcValueUnit: string;
		Currency: string;
		EntryIsRequired: boolean;
		MultipleValuesAreAllowed: boolean;
		NegativeValueIsAllowed: boolean;
		ValueIntervalIsAllowed: boolean;
		ValueIsCaseSensitive: boolean;
		ValuesCount?: number;
		IsFlag?: boolean;
		_Values?: TCharcValEntity[];
		_ClassCharc?: TClassCharcEntity;
	};
	export type TCharcValEntity = {
		CharcInternalID: string;
		CharcValuePositionNumber: number;
		TimeIntervalNumber: number;
		CharcValueParentPositionNumber: number;
		CharcValueHasChild: boolean;
		CharcValueIntervalType: string;
		CharcValue: string;
		CharcFromNumericValue: number;
		CharcToNumericValue: number;
		CharcFromNumericValueUnit: string;
		CharcToNumericValueUnit: string;
		CharcFromDate: string;
		CharcToDate: string;
		CharcFromTime: string;
		CharcToTime: string;
		CharcFromAmount: number;
		CharcToAmount: number;
		Currency: string;
		IsDefaultValue: boolean;
		CharcFromDecimalValue: string;
		CharcToDecimalValue: string;
		CharcValueDescription: string;
	};
	export type TEquipmentEntity = {
		Equipment: string;
		EquipmentName?: string;
		Equipment_Text?: string;
		Material: string;
		Material_Text?: string;
		MateriaName?: string;
		IsRental?: boolean;
		IsOnStock?: boolean;
	};
	export type TEquipmentTextEntity = {
		Equipment: string;
		Language: string;
		EquipmentName: string;
	};
	export type TEquipmentHierarchyCustomEntity = {
		Equipment: string;
		EquipmentName: string;
		SuperordinateEquipment: string;
		HierarchyRoot: string;
		HierarchyLevel: number;
		_Equipment?: TEquipmentEntity;
		_Root?: TRootEntity[];
	};
	export type TDocumentCreateItemEntity = {
		DocumentItemUUID?: string;
		DocumentHeaderUUID?: string;
		SalesDocument?: string;
		SalesDocumentItem?: number;
		HigherLevelItem?: number;
		Material: string;
		Equipment?: string;
		Plant: string;
		StorageLocation: string;
		SerialNumber?: string;
		TargetQuantity?: string;
		TargetQuantityUnit?: string;
		Batch?: string;
		/** @deprecated Use ContractStart instead! */
		SalesContractValidityStartDate?: string;
		/** @deprecated Use ContractEnd instead! */
		SalesContractValidityEndDate?: string;
		ContractStart?: string;
		ContractEnd?: string;
	};
	export type TDocumentCreateEntity = {
		DocumentHeaderUUID?: string;
		RentalType?: string;
		SoldToParty?: string;
		SalesOrganization?: string;
		DistributionChannel?: string;
		OrganizationDivision?: string;
		SalesOffice?: string;
		/** @deprecated Use ContractStart instead! */
		SalesContractValidityStartDate?: string;
		/** @deprecated Use ContractEnd instead! */
		SalesContractValidityEndDate?: string;
		ContractStart?: string;
		ContractEnd?: string;
		_Items?: TDocumentCreateItemEntity[];
	};
	export type TDocumentEntity = {
		SalesDocument: string;
		SalesDocumentType: string;
		_ItemOV?: TDocumentItemEntity[];
		_ItemPG?: TDocumentItemEntity[];
		_ItemPC?: TDocumentItemEntity[];
		_ItemLG?: TDocumentItemEntity[];
	};
	export type TDocumentItemEntity = {
		SalesDocument: string;
		SalesDocumentItem: string;
		_Header: TDocumentEntity;
	};
	export type TAccessoryEntity = {
		MainDeviceEquipment?: string;
		MainDeviceMaterial?: string;
		Equipment: string;
		Material: string;
		Plant: string;
		StorageLocation: string;
	};
	export type TCheckListFieldEntity = {
		Field: string;
		RelevantCompare?: boolean;
		RelevantCopyFromOutbound?: boolean;
		Characteristic?: string;
		FieldDataType?: FieldDataTypeType;
		FieldValueUnit?: string;
		FieldValueDefault?: string;
		FieldLabel?: string;
		EntryIsRequired?: boolean;
		_Characteristic?: TCharcEntity[];
	};
	export type TCheckListSectionFieldEntity = {
		ClSection: string;
		Field: string;
		FieldLabel?: string;
		SequenceNo?: number;
		RelevantCompare?: boolean;
		RelevantCopyFromOutbound?: boolean;
		Characteristic?: string;
		_Characteristic?: TCharcEntity;
	};
	export type TCheckListTypeSectionEntity = {
		ClType: string;
		ClSection: string;
		SequenceNo?: number;
		ClTypeText?: string;
		ClSectionText?: string;
		_Fields?: TCheckListSectionFieldEntity[];
	};
	export type TCheckListTypeDeterminationEntity = {
		ClType: string;
		ProductLine?: string;
		ProductGroup?: string;
		ProductSubGroup?: string;
		MaterialGroup?: string;
		ProductHierarchy?: string;
		_ClTypeSection?: TCheckListTypeSectionEntity;
	};
	export type TDeliveryHeaderEntity = {
		DeliveryDocument: string;
		DeliveryDocumentType?: string;
		DeliveryDate?: string;
		PlannedGoodsIssueDate?: string;
		ShipToParty?: string;
		SoldToParty?: string;
		IOType: DocumentIOTypeType;
		_Item?: TDeliveryItemEntity[];
	};
	export type TDeliveryItemEntity = {
		DeliveryDocument: string;
		DeliveryDocumentItem: string;
		ProductLine?: string;
		ProductGroup?: string;
		ProductSubGroup?: string;
		Handover?: string;
		_Header?: TDeliveryHeaderEntity;
		_Handover?: THandoverEntity;
	};
	export type THandoverEntity = {
		Handover: string;
		HandoverUUID: string;
		IsDeleted: boolean;
		DeliveryDocument: string;
		DeliveryDocumentItem: string;
		SignatureHandover?: string;
		SignatureHandoverJson?: string;
		SignatureReceiving?: string;
		SignatureReceivingJson?: string;
		_ItemClType?: THandoverItemCheckListTypeEntity[];
		_Item?: THandoverItemEntity[];
		_RentalEquipment?: TEquipmentEntity;
	};
	export type THandoverItemEntity = {
		Handover: string;
		HandoverItem: string;
		HandoverUUID?: string;
		HandoverItemUUID?: string;
		ClType?: string;
		ClSection?: string;
		Field?: string;
		FieldLabel?: string;
		FieldValue?: string;
		FieldValueFlag?: boolean;
		FieldValueFloat?: number;
		FieldValueDate?: Date;
		FieldValueTime?: string;
		FieldValueUnit?: string;
		FieldDataType?: string;
		AttachmentCount?: number;
		_Header?: THandoverEntity;
		_Field?: TCheckListFieldEntity;
		_Fields?: TCheckListFieldEntity[];
	};
	export type THandoverItemDraftAwareEntity = TDraftAwareEntity & THandoverItemEntity;
	export type THandoverItemFieldEntity = {
		Handover: string;
		HandoverItem: string;
		HandoverUUID?: string;
		HandoverItemUUID?: string;
		ClType?: string;
		ClSection?: string;
		Field?: string;
		FieldValue?: string;
		_Field?: TCheckListFieldEntity;
	};
	export type THandoverItemSectionEntity = {
		Handover: string;
		HandoverUUID?: string;
		ClType: string;
		ClSection: string;
		ClSectionText?: string;
		_Fields?: THandoverItemFieldEntity[];
	};
	export type THandoverItemCheckListTypeEntity = {
		Handover: string;
		HandoverUUID?: string;
		ClType: string;
		ClTypeText?: string;
		_Sections?: THandoverItemSectionEntity[];
	};
	export type TAttachmentFunctionResult = {
		[AttachmentModelFunction.GetAttachmentCount]: {
			TotalCount?: number;
			UnconfirmedCount?: number;
			ConfirmedCount?: number;
		};
	};
}
declare module "vss/com/rcl/model/format/CharacteristicValues" {
	import { TObjectCharacteristicsDisplay } from "vss/com/rcl/types/EntitySet";
	export function formatObject(ch: TObjectCharacteristicsDisplay): string;
}
declare module "vss/com/rcl/model/type/CharacteristicValues" {
	import Raw from "sap/ui/model/odata/type/Raw";
	/**
	 * @global true
	 * @namespace vss.com.rcl.model.type
	 */
	export default class CharacteristicValues extends Raw {
		constructor(oFormatOptions?: object, oConstraints?: object);
		formatValue(vValue: unknown, sTargetType: string): unknown;
		getName(): string;
	}
}
declare module "vss/com/rcl/library" {
	const thisLib: {
		[key: string]: unknown;
	};
	/**
	 * @namespace vss.com.rcl
	 */
	export default thisLib;
}
declare module "vss/com/rcl/cart/ICartModel" {
	import type JSONModel from "sap/ui/model/json/JSONModel";
	import type { RentalClassTypeType } from "vss/com/rcl/model/Enums";
	export const IconUri: {
		readonly CartAdd: "sap-icon://cart-3";
		readonly CartRemove: "sap-icon://cart-2";
		readonly CartEmpty: "sap-icon://cart";
		readonly CartFull: "sap-icon://cart-full";
	};
	export type TContractItemNumber = {
		SalesDocumentItem?: number;
		HigherLevelItem?: number;
	};
	export type TContractHeaderData = {
		ValidityStartDate?: Date;
		ValidityEndDate?: Date;
	};
	export type TCartHeader = {
		data: TContractHeaderData;
	};
	export type TContractItemData = TContractItemNumber & {
		Equipment: string;
		Equipment_Text?: string;
		SerialNumber: string;
		Material: string;
		Material_Text?: string;
		Plant: string;
		Plant_Text?: string;
		StorageLocation: string;
		StorageLocation_Text?: string;
		RentalClassType?: RentalClassTypeType;
		Batch?: string;
	};
	export type TCartItem = {
		key: string;
		data?: TContractItemData;
		Quantity?: number;
		ValidityStartDate?: Date;
		ValidityEndDate?: Date;
	};
	/**
	 * Cart model data
	 */
	export type TCartData = {
		items: TCartItem[];
		header: TCartHeader;
		enabled: boolean;
	};
	export type TCartItemsMap = Record<string, TCartItem>;
	export interface ICartModel {
		add(...newItems: TCartItem[]): void;
		remove(...forRemove: TCartItem[]): void;
		refresh(items?: TCartItem[]): void;
		findIndex(searchItem?: TCartItem, items?: TCartItem[]): number;
		exists(searchItem?: TCartItem, items?: TCartItem[]): boolean;
		model(): JSONModel;
	}
}
declare module "vss/com/rcl/cart/CartItemKey" {
	import type { TCartItem } from "vss/com/rcl/cart/ICartModel";
	/**
	 * @name vss.com.rcl.cart.CartItemKey
	 */
	export default function CartItemKey(item: TCartItem): string;
}
declare module "vss/com/rcl/model/RootEntity" {
	import type { TRootEntity, TRootObjectKey } from "vss/com/rcl/types/EntitySet";
	export function isEquipment(entity: TRootEntity): boolean;
	export function createKey(entity: TRootEntity): TRootObjectKey;
}
declare module "vss/com/rcl/cart/CartItemFactory" {
	import type { TCartItem, TContractItemNumber } from "vss/com/rcl/cart/ICartModel";
	import type { TRootEntity } from "vss/com/rcl/types/EntitySet";
	const CartItemFactory: {
		requestProperties(): string[];
		fromRoot(itemData: TRootEntity, contractItemNumber?: TContractItemNumber, quantity?: number): TCartItem;
	};
	/**
	 * @namespace vss.com.rcl.cart
	 */
	export default CartItemFactory;
}
declare module "vss/com/rcl/cart/ICart" {
	import type Button from "sap/m/Button";
	import type { TCartItem, ICartModel, TCartHeader } from "vss/com/rcl/cart/ICartModel";
	interface ICart {
		getHeader?: () => TCartHeader;
		getItems(): TCartItem[];
		isEmpty(): boolean;
		flush(): void;
		add(...newItems: TCartItem[]): void;
		exists(item: TCartItem): boolean;
		remove(...forRemove: TCartItem[]): void;
		model(): ICartModel;
		button?: () => Button;
		clearButton?: () => Button;
		exclude(key: string): void;
		isExcluded(key: string): boolean;
		destroy(): void;
	}
	/**
	 * @namespace vss.com.rcl.cart
	 */
	export default ICart;
}
declare module "vss/com/rcl/utils/Logger" {
	/**
	 * @namespace vss.com.rcl.utils
	 */
	export function debug(message: string): void;
	export function error(message: string, exception?: Error): void;
	export function info(message: string): void;
	export function warning(message: string, exception?: Error): void;
}
declare module "vss/com/rcl/cc/i18n/Translate" {
	import type ResourceBundle from "sap/base/i18n/ResourceBundle";
	export function setBundle(b: ResourceBundle): void;
	export function __(key: string, args?: unknown[]): string;
	const Translate: typeof __;
	/**
	 * @namespace vss.com.rcl.cc.i18n
	 */
	export default Translate;
}
declare module "vss/com/rcl/cc/Component" {
	import AppComponent from "sap/fe/core/AppComponent";
	/**
	 * @link https://ui5.sap.com/resources/sap/fe/core/AppComponent-dbg.js
	 * @namespace vss.com.rcl.cc
	 */
	export default class Component extends AppComponent {
		static metadata: {
			manifest: string;
			library: string;
		};
		constructor(settings?: object);
		init(): void;
	}
}
declare module "vss/com/rcl/cc/model/Enums" {
	export enum EventId {
		ContractCreateFinished = "ContractCreateFinished"
	}
	export enum RouteName {
		ContractList = "ContractList",
		ContractObjectPage = "ContractObjectPage",
		ContractItemObjectPageOV = "ContractItemObjectPageOV",
		ContractItemObjectPageLG = "ContractItemObjectPageLG",
		ContractItemObjectPagePG = "ContractItemObjectPagePG",
		ContractItemObjectPagePR = "ContractItemObjectPagePR"
	}
	export enum ControlId {
		/**
		 * @link https://sapui5.hana.ondemand.com/resources/sap/fe/templates/ObjectPage/view/fragments/FooterContent.fragment.xml
		 */
		cancelButton = "fe::FooterBar::StandardAction::Cancel",
		saveButton = "fe::FooterBar::StandardAction::Save",
		contractItemsTable = "fe::table::_Items::LineItem"
	}
	export enum RAPAction {
		Prepare = "com.sap.gateway.srvd.pacg.rso_cm.v0001.Prepare"
	}
	export enum EntitySet {
		ItemGroup = "ItemGroup",
		ItemGroupText = "ItemGroupText",
		ItemGroupCategory = "ItemGroupCategory"
	}
	export enum UnitOfMeasure {
		Piece = "PC"
	}
}
declare module "vss/com/rcl/utils/Container" {
	import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
	import type FilterBar from "sap/ui/mdc/FilterBar";
	import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	import type IAppComponent from "vss/com/fe/IAppComponent";
	import type { IAnyTable } from "vss/com/fe/IAppContainer";
	import type IAppContainer from "vss/com/fe/IAppContainer";
	import type UIComponent from "sap/ui/core/UIComponent";
	import type ICart from "vss/com/rcl/cart/ICart";
	import type MenuButton from "sap/m/MenuButton";
	export interface IAppContainerExtended extends IAppContainer {
		get cart(): ICart;
		set cart(cart: ICart);
	}
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.utils
	 */
	export default class Container implements IAppContainerExtended {
		private static _instance;
		private _table?;
		private _listReportAPI?;
		private _objectPageAPI?;
		embeddedComponents?: Map<string, UIComponent>;
		private _com?;
		private _mainList?;
		private _mainFilter?;
		private _cart?;
		private _actionDropdown?;
		static getInstance(reload?: boolean): Container;
		private constructor();
		get com(): UIComponent;
		set com(com: UIComponent);
		get listReportAPI(): IListReportExtensionAPI;
		set listReportAPI(api: IListReportExtensionAPI);
		get objectPageAPI(): IObjectPageExtensionAPI;
		set objectPageAPI(api: IObjectPageExtensionAPI);
		get table(): IAnyTable;
		set table(table: IAnyTable);
		get mainList(): IAppComponent;
		set mainList(com: IAppComponent);
		get cart(): ICart;
		set cart(cart: ICart);
		get mainFilter(): FilterBar;
		set mainFilter(filter: FilterBar);
		get actionDropdown(): MenuButton;
		set actionDropdown(control: MenuButton);
	}
}
declare module "vss/com/rcl/cc/model/CartItemsToContract" {
	import type ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";
	import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	import type { TCartItem } from "vss/com/rcl/cart/ICartModel";
	/**
	 * @namespace vss.com.rcl.cc.model
	 */
	export default class CartItemsToContract {
		private _api;
		private _itemsBinding;
		constructor(_api: IObjectPageExtensionAPI, _itemsBinding: ODataListBinding);
		create(...cartItems: TCartItem[]): Promise<unknown>;
	}
}
declare module "vss/com/rcl/cc/eh/ContractDraftCreateHandler" {
	import type { IObjectPageController } from "vss/com/fe/ObjectPage";
	export type TRejectionReason = {
		contextsExists?: boolean;
		append?: boolean;
		flush?: boolean;
	};
	/**
	 * - Validate Contract data
	 * - Propagate CART items into CreateContract entity
	 *
	 * @nonui5
	 * @namespace vss.com.rcl.cc.eh
	 */
	export default class ContractDraftCreateHandler {
		private _ctrl;
		private _dialog;
		constructor(_ctrl: IObjectPageController);
		private _run;
		private _createContractHeader;
		private _createContractItems;
		private _createConfirmDialog;
	}
}
declare module "vss/com/rcl/cc/model/InvokeActionPrepare" {
	import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	/**
	 * Invoke validation @link https://help.sap.com/docs/ABAP_PLATFORM_2020/fc4c71aa50014fd1b43721701471913d/707c7e93ecab48ea9e6b9c3c893a792e.html?locale=en-US
	 *
	 * @nonui5
	 * @namespace vss.com.rcl.cc.model
	 */
	export default class InvokeActionPrepare {
		private _api;
		private _context;
		constructor(_api: IObjectPageExtensionAPI);
		invoke(): Promise<void>;
	}
}
declare module "vss/com/rcl/cc/model/ContractCreateCommand" {
	import type { TDraftAdministrativeData } from "vss/com/fe/DraftTypes";
	export type TDocCreateOut = {
		esDocHeader: {
			docNumber?: string;
			docType?: string;
		};
	};
	/**
	 * @namespace vss.com.rcl.cc.model
	 */
	export default class ContractCreateCommand {
		private _model;
		constructor();
		call(draftAdministrativeData: TDraftAdministrativeData): Promise<TDocCreateOut>;
		messageDialog(): import("sap/m/Dialog").default;
	}
}
declare module "vss/com/rcl/utils/ContractNavigation" {
	import Component from "sap/ui/core/Component";
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.utils
	 */
	export default class ContractNavigation {
		private _com;
		private _contractNumber?;
		private _model;
		constructor(_com: Component, _contractNumber?: string);
		toContractMaintenance(): void;
		private _navigateWithFioriLaunchpad;
		private _navigateWithOutFioriLaunchpad;
	}
}
declare module "vss/com/rcl/cc/eh/SaveHandler" {
	import type { IObjectPageController } from "vss/com/fe/ObjectPage";
	import type { Button$PressEvent } from "sap/m/Button";
	/**
	 * Rental Contract save hander
	 */
	const SaveHandler: {
		onSave(this: IObjectPageController, event: Button$PressEvent): void;
	};
	/**
	 * @namespace vss.com.rcl.cc.eh
	 */
	export default SaveHandler;
}
declare module "vss/com/rcl/cc/ext/OverrideSaveButton" {
	import type { IObjectPageController } from "vss/com/fe/ObjectPage";
	/**
	 * replace save button in footer
	 *
	 * @namespace vss.com.rcl.cc.ext
	 */
	export default class OverrideSaveButton {
		private _ctrl;
		constructor(_ctrl: IObjectPageController);
		/**
		 * @link https://ui5.sap.com/resources/sap/fe/templates/ObjectPage/view/fragments/FooterContent.fragment.xml
		 */
		private createSaveButton;
	}
}
declare module "vss/com/rcl/cc/ext/controller/ObjectPageExtension.controller" {
	import type { IObjectPageController } from "vss/com/fe/ObjectPage";
	const override: {
		onInit(this: IObjectPageController): void;
		onPageReady(this: IObjectPageController, state: unknown): void;
	};
	/**
	 * @namespace vss.com.rcl.cc.ext.controller
	 */
	export default override;
}
declare module "vss/com/rcl/clfn/ClfnFilterFieldFactory" {
	import Label from "sap/m/Label";
	import type { TCharcEntity } from "vss/com/rcl/types/EntitySet";
	import MultiInput from "sap/m/MultiInput";
	import MultiComboBox from "sap/m/MultiComboBox";
	export function createCharcLabel(charcData: TCharcEntity, labelFor?: string, bindingPath?: string): Label;
	export function createCharcField(charcData: TCharcEntity, id?: string, bindingPath?: string): MultiInput | MultiComboBox;
}
declare module "vss/com/rcl/component/AppComponentAbstract" {
	import AppComponent from "sap/fe/core/AppComponent";
	/**
	 * @namespace vss.com.rcl.component
	 */
	export default abstract class AppComponentAbstract extends AppComponent {
		static metadata: Record<string, unknown>;
		exit(): void;
		destroy(bSuppressInvalidate?: boolean): void;
	}
}
declare module "vss/com/rcl/component/UIComponentAbstract" {
	import UIComponent from "sap/ui/core/UIComponent";
	/**
	 * @namespace vss.com.rcl.component
	 */
	export default abstract class UIComponentAbstract extends UIComponent {
		static metadata: Record<string, unknown>;
		exit(): void;
		destroy(bSuppressInvalidate?: boolean): void;
	}
}
declare module "vss/com/rcl/control/IsControl" {
	import type NavContainer from "sap/m/NavContainer";
	import type FilterBar from "sap/ui/mdc/FilterBar";
	export function isNavContainer(obj: unknown): obj is NavContainer;
	export function isFilterBar(element: unknown): element is FilterBar;
}
declare module "vss/com/rcl/types/IComponent" {
	import type AppComponent from "sap/fe/core/AppComponent";
	import type { $UIComponentSettings } from "sap/ui/core/UIComponent";
	export type EquipmentStructureSettings = {
		equipment: string;
		hierarchyRoot: string;
	};
	export type $IEquipmentAwareComponentSettings = $UIComponentSettings & EquipmentStructureSettings;
	export interface IEquipmentAwareComponent extends AppComponent {
		getEquipmentId(): string;
		setEquipmentId(value: string): void;
	}
}
declare module "vss/com/rcl/eqs/types/EntitySets" {
	export type TEquipmentKey = {
		Equipment: string;
	};
	export type TEquipmentEntity = {
		Equipment: string;
		EquipmentName?: string;
		Product?: string;
		ProductDescription?: string;
		ProductLine: string;
		ProductLineText: string;
		ProductGroup: string;
		ProductGroupText: string;
		ProductSubGroup: string;
		ProductSubGroupText: string;
		IsRental?: boolean;
		IsRentalCriticality?: number;
		HasHierarchyChldCriticality: number;
		SuperordinateEquipment?: string;
	};
	export type TEquipmentHierarchyItem = TEquipmentEntity & {
		items: TEquipmentHierarchyItem[];
	};
}
declare module "vss/com/rcl/eqs/model/EquipmentBindingUtil" {
	import type { TEquipmentKey } from "vss/com/rcl/eqs/types/EntitySets";
	export function createBindingPath(entity: TEquipmentKey): string;
}
declare module "vss/com/rcl/types/IController" {
	import type PageController from "sap/fe/core/PageController";
	import type ListReportController from "sap/fe/templates/ListReport/ListReportController.controller";
	import type FilterBar from "sap/ui/mdc/FilterBar";
	export interface InvokablePageController extends PageController {
		invokeStart(): void;
	}
	export interface IFilterAwareController extends ListReportController {
		_getFilterBarControl(): FilterBar;
	}
}
declare module "vss/com/rcl/eqs/model/Enums" {
	export const ControlId: {
		readonly Tree: "tree";
		readonly NavContainer: "appContent";
	};
	export const ComponentEvents: {
		readonly equipmentResolved: "equipmentResolved";
	};
	export const FieldGroupId: {
		readonly treeActionButtons: "treeActionButtons";
	};
	export const EventId: {
		readonly TreeOnListUpdateFinished: "TreeOnListUpdateFinished";
	};
	export type EventIdType = (typeof EventId)[keyof typeof EventId];
	export const RouteTarget: {
		readonly EquipmentStructure: "EquipmentStructure";
	};
}
declare module "vss/com/rcl/eqs/model/RouteTarget" {
	import { RouteTarget } from "vss/com/rcl/eqs/model/Enums";
	export default RouteTarget;
}
declare module "vss/com/rcl/eqs/Component" {
	import AppComponentAbstract from "vss/com/rcl/component/AppComponentAbstract";
	import type NavContainer from "sap/m/NavContainer";
	import type Model from "sap/ui/model/Model";
	import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
	import type { $IEquipmentAwareComponentSettings, IEquipmentAwareComponent } from "vss/com/rcl/types/IComponent";
	import type { InvokablePageController } from "vss/com/rcl/types/IController";
	/**
	 * @link https://sapui5.hana.ondemand.com/1.120.19/#/topic/6314fcd2510648fbaad3cee8a421030d
	 *
	 * For internal use only @see vss.com.rcl.eqsui
	 *
	 * @namespace vss.com.rcl.eqs
	 */
	export default class Component extends AppComponentAbstract implements IEquipmentAwareComponent {
		getEquipment: () => string;
		getRootContainer: () => NavContainer;
		static metadata: {
			manifest: string;
			library: string;
		};
		private _registeredControllers;
		private _pendingEquipmentNavigation;
		private _settings;
		constructor(settings: $IEquipmentAwareComponentSettings);
		init(): void;
		registerController(key: string, controller?: InvokablePageController): this;
		getEquipmentId(): string;
		setEquipmentId(value: string): this;
		getEquipmentModel(): ODataModel;
		getModel(modelName?: string): Model | undefined;
		getSettings(): $IEquipmentAwareComponentSettings;
		destroy(bSuppressInvalidate?: boolean): void;
		private _navigateToEquipment;
	}
}
declare module "vss/com/rcl/model/EquipmentHierarchyQuery" {
	import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
	import type { TEquipmentHierarchyCustomEntity, TRootObjectKey } from "vss/com/rcl/types/EntitySet";
	export interface IEquipmentHierarchyQuery {
		run(...rootEntity: TRootObjectKey[]): Promise<TEquipmentHierarchyCustomEntity[]>;
		asTree(...rootEntity: TRootObjectKey[]): Promise<THierarchyItem[]>;
	}
	export type THierarchyItem = TEquipmentHierarchyCustomEntity & {
		items: THierarchyItem[];
	};
	/**
	 * @namespace vss.com.rcl.model
	 */
	export default class EquipmentHierarchyQuery implements IEquipmentHierarchyQuery {
		protected _model: ODataModel;
		protected _readParams: {};
		/**
		 * @param _readParams 	@link https://sapui5.hana.ondemand.com/#/api/sap.ui.model.odata.v4.ODataModel/methods/bindList
		 */
		constructor(_model: ODataModel, _readParams?: {});
		run(...rootEntity: TRootObjectKey[]): Promise<TEquipmentHierarchyCustomEntity[]>;
		asTree(...rootEntity: TRootObjectKey[]): Promise<THierarchyItem[]>;
		protected mapTree(flat: TEquipmentHierarchyCustomEntity[]): THierarchyItem[];
	}
}
declare module "vss/com/rcl/eqs/model/EventId" {
	import { EventId } from "vss/com/rcl/eqs/model/Enums";
	/**
	 * Provide default export for EventId due duplicated import names in Component.ts
	 */
	export default EventId;
}
declare module "vss/com/rcl/eqs/controller/Tree.controller" {
	import PageController from "sap/fe/core/PageController";
	import type { Button$PressEvent } from "sap/m/Button";
	import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
	import type { Tree$ToggleOpenStateEvent } from "sap/m/Tree";
	import type AppComponent from "vss/com/rcl/eqs/Component";
	import type { InvokablePageController } from "vss/com/rcl/types/IController";
	export type $TreeItemOnActionButtonEvent = {
		event?: Button$PressEvent;
	};
	/**
	 * @namespace vss.com.rcl.eqs.controller
	 * @controller
	 */
	export default class Tree extends PageController implements InvokablePageController {
		getAppComponent: () => AppComponent;
		private _settings;
		private _treeModel?;
		constructor();
		onInit(): void;
		invokeStart(): void;
		onExit(): void;
		onToggleOpenState(event?: Tree$ToggleOpenStateEvent): void;
		onTreeUpdateFinished(event: ListBase$UpdateFinishedEvent): void;
		getModel(): import("sap/ui/model/odata/v4/ODataModel").default;
		private _getControllerKey;
		private _prepareModel;
		private _resetTreeModelData;
		private _getTree;
		private _getTreeModel;
	}
}
declare module "vss/com/rcl/eqs/i18n/Translate" {
	import type ResourceBundle from "sap/base/i18n/ResourceBundle";
	export function setBundle(b: ResourceBundle): void;
	export function __(key: string, args?: unknown[]): string;
	const Translate: typeof __;
	/**
	 * @namespace vss.com.rcl.eqs.i18n
	 */
	export default Translate;
}
declare module "vss/com/rcl/eqs/model/ControlId" {
	import { ControlId } from "vss/com/rcl/eqs/model/Enums";
	/**
	 * Provide default export for ControlId due duplicated import names in Component.ts
	 */
	export default ControlId;
}
declare module "vss/com/rcl/eqs/types/EventParams" {
	import type PageController from "sap/fe/core/PageController";
	import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
	export type $EquipmentStructureTreeEvent = {
		controller: PageController;
		event?: ListBase$UpdateFinishedEvent;
	};
}
declare module "vss/com/rcl/eqscol/Enums" {
	export const FieldGroupId: {
		readonly ColumnEquipmentStructure: "ColumnEquipmentStructure";
	};
}
declare module "vss/com/rcl/eqsui/Component" {
	import type Event from "sap/ui/base/Event";
	import ComponentContainer from "sap/ui/core/ComponentContainer";
	import UIComponentAbstract from "vss/com/rcl/component/UIComponentAbstract";
	import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
	import type { $IEquipmentAwareComponentSettings, EquipmentStructureSettings } from "vss/com/rcl/types/IComponent";
	export type Component$EquipmentResolvedParameters = EquipmentStructureSettings;
	export type Component$EquipmentResolved = Event<Component$EquipmentResolvedParameters, Component>;
	/**
	 * @link https://sapui5.hana.ondemand.com/1.120.19/#/topic/6314fcd2510648fbaad3cee8a421030d
	 *
	 * Wrapper for vss.com.rcl.eqs component. At the moment in version 1.120.21, sap.fe.core.AppComponent does not resolve
	 * bindings from manifest into values. This wrapper resolves settings and passes them to vss.com.rcl.eqs.Component
	 * @see vss.com.rcl.eqs
	 *
	 * @namespace vss.com.rcl.eqsui
	 */
	export default class Component extends UIComponentAbstract {
		getEquipment: () => string | null;
		fireEquipmentResolved: (params: Component$EquipmentResolvedParameters) => void;
		attachEquipmentResolved: (handler: (event: Component$EquipmentResolved, ...args: unknown[]) => void, listener?: object) => void;
		static metadata: {
			manifest: string;
			library: string;
			interfaces: string[];
			properties: {
				equipment: {
					type: string;
					group: string;
					defaultValue: any;
				};
			};
			events: {
				equipmentResolved: {
					enableEventBubbling: boolean;
					parameters: {
						equipment: {
							type: string;
						};
					};
				};
			};
		};
		private _container;
		private _settings;
		constructor(settings: $IEquipmentAwareComponentSettings);
		init(): void;
		/**
		 * override default setter
		 */
		setEquipment(value: string | null): void;
		createContent(): Promise<ComponentContainer>;
		getEquipmentModel(): ODataModel;
	}
}
declare module "vss/com/rcl/eqsui/i18n/Translate" {
	import type ResourceBundle from "sap/base/i18n/ResourceBundle";
	export function setBundle(b: ResourceBundle): void;
	export function __(key: string, args?: unknown[]): string;
	const Translate: typeof __;
	/**
	 * @namespace vss.com.rcl.eqsui.i18n
	 */
	export default Translate;
}
declare module "vss/com/rcl/utils/EventBusHandlers" {
	import BaseObject from "sap/ui/base/Object";
	export type EventBusHandlerFunctionType = (p1: string, p2: string, p3: object) => void;
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.utils
	 */
	export default class EventBusHandler {
		private static _instance;
		private _listeners;
		static getInstance(): EventBusHandler;
		private constructor();
		subscribe(channelId: string, eventId: string, handler: EventBusHandlerFunctionType, listener: BaseObject, unsubscribeFirst?: boolean): void;
		unsubscribe(channelId: string, eventId: string, handler: EventBusHandlerFunctionType, listener: BaseObject): void;
		unsubscribeAll(listener: BaseObject): void;
	}
}
declare module "vss/com/rcl/ml/model/Enums" {
	export const EventId: {
		readonly MainListComponentOnInit: "MainListComponentOnInit";
		readonly MainListControllerOnInit: "MainListControllerOnInit";
		readonly MainListControllerOnViewNeedsRefresh: "MainListControllerOnViewNeedsRefresh";
		/** @deprecated Cannot use ListReport's private extension! */
		readonly MainListControllerOnPageReady: "MainListControllerOnPageReady";
		readonly MainListControllerOnPendingFilters: "MainListControllerOnPendingFilters";
		readonly MainListControllerOnAfterRendering: "MainListControllerOnAfterRendering";
		readonly MainListControllerOnBeforeRendering: "MainListControllerOnBeforeRendering";
		readonly MainListOnActionButtonAddToCartPress: "MainListOnActionButtonAddToCartPress";
		readonly MainListOnActionButtonRemoveFromCartPress: "MainListOnActionButtonRemoveFromCartPress";
	};
	export type EventIdType = (typeof EventId)[keyof typeof EventId];
	export const ControlId: {
		readonly materialTable: "fe::table::MaterialTab::LineItem";
		readonly rootFilter: "fe::FilterBar::Root";
		readonly rootTable: "fe::table::RootTab::LineItem";
	};
	export const FieldGroupId: {
		readonly ColumnActions: "ColumnActions";
		/** @deprecated Use vss.com.rcl.eqscol.Enums.FieldGroupId.ColumnEquipmentStructure instead! */
		readonly ColumnEquipmentHierarchy: "ColumnEquipmentHierarchy";
	};
}
declare module "vss/com/rcl/model/RootEntityQuery" {
	import type { TRootEntity } from "vss/com/rcl/types/EntitySet";
	import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
	export type TCriteria = Record<string, string | number | boolean>;
	export function rootByEquipment(model: ODataModel, criteria: TCriteria, urlParams?: Record<string, string>): Promise<TRootEntity>;
}
declare module "vss/com/rcl/ml/ext/ActionColumnExtension" {
	import type ListBase from "sap/m/ListBase";
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.ml.ext
	 */
	export default class ActionColumnExtension {
		private _table;
		private _cartMetaModel;
		private _cart;
		private _mainModel;
		constructor(_table: ListBase);
		initTableEvents(): void;
		bindCartMetaModel(): Promise<void>;
	}
}
declare module "vss/com/rcl/ml/eh/EquipmentStructureComponent" {
	import { $EquipmentStructureTreeEvent } from "vss/com/rcl/eqs/types/EventParams";
	const EquipmentStructureComponent: {
		onTreeUpdateFinished(channel: string, eventId: string, params: $EquipmentStructureTreeEvent): void;
	};
	export default EquipmentStructureComponent;
}
declare module "vss/com/rcl/ml/i18n/Translate" {
	import type ResourceBundle from "sap/base/i18n/ResourceBundle";
	export function setBundle(b: ResourceBundle): void;
	export function __(key: string, args?: unknown[]): string;
	const Translate: typeof __;
	/**
	 * @namespace vss.com.rcl.ml.i18n
	 */
	export default Translate;
}
declare module "vss/com/rcl/ml/model/EventId" {
	import { EventId } from "vss/com/rcl/ml/model/Enums";
	/**
	 * Provide default export for EventId due duplicated import names in Component.ts
	 */
	export default EventId;
}
declare module "vss/com/rcl/ml/types/EventParams" {
	import type Event from "sap/ui/base/Event";
	import type IAppComponent from "vss/com/fe/IAppComponent";
	import type { IListReportController } from "vss/com/fe/ListReport";
	import type FilterBar from "sap/ui/mdc/FilterBar";
	import type MdcTable from "sap/ui/mdc/Table";
	import type Context from "sap/ui/model/odata/v4/Context";
	export type $MainListComponentOnInit = {
		component: IAppComponent;
	};
	export type $MainListControllerEvent = {
		controller: IListReportController;
		controls: MdcTable[];
		filterBar?: FilterBar;
		event?: Event;
		state?: unknown;
	};
	export type $NavigationContextInfo = {
		bindingContext: Context;
	};
}
declare module "vss/com/rcl/ml/Component" {
	import type IAppComponent from "vss/com/fe/IAppComponent";
	import type { IRoutingService } from "vss/com/fe/IAppComponent";
	import type IAppContainer from "vss/com/fe/IAppContainer";
	import AppComponentAbstract from "vss/com/rcl/component/AppComponentAbstract";
	/**
	 * @namespace vss.com.rcl.ml
	 */
	export default class Component extends AppComponentAbstract implements IAppComponent {
		getRoutingService: () => IRoutingService;
		static metadata: {
			manifest: string;
			library: string;
		};
		constructor(settings?: object);
		getAppContainer(): IAppContainer;
		init(): void;
		exit(): void;
	}
}
declare module "vss/com/rcl/ml/eh/CartItemEventHandler" {
	import type Event from "sap/ui/base/Event";
	import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
	import type { IObjectPageController } from "vss/com/fe/ObjectPage";
	import type { Button$PressEvent } from "sap/m/Button";
	const CartItemEventHandler: {
		/**
		 * Propagate the 'Add to cart' event to the EventBus; Handle in component that implements {vss.com.rcl.cart.ICart}
		 * @see {pacg.com.rcm.cart.eh.UpdateCartHandler}
		 */
		onActionButtonAddToCartPressed(this: IListReportExtensionAPI | IObjectPageController, event: Button$PressEvent): void;
		onActionButtonOpenCartPressed(this: IListReportExtensionAPI | IObjectPageController, event: Event): void;
		/**
		 * Propagate the 'Remove from cart' event to the EventBus; Handle in component that implements {vss.com.rcl.cart.ICart}
		 * @see {pacg.com.rcm.cart.eh.UpdateCartHandler}
		 */
		onActionButtonRemoveFromCartPressed(this: IListReportExtensionAPI | IObjectPageController, event: Event): void;
	};
	/**
	 * @namespace vss.com.rcl.ml.eh
	 */
	export default CartItemEventHandler;
}
declare module "vss/com/rcl/ml/eh/FilterMainDevice" {
	import type Event from "sap/ui/base/Event";
	import { type MultiComboBox$SelectionFinishEvent } from "sap/m/MultiComboBox";
	import type { IListReportController } from "vss/com/fe/ListReport";
	const FilterMainDevice: {
		onSelectionChange(this: IListReportController, event: Event): void;
		onSelectionFinish(this: IListReportController, event: MultiComboBox$SelectionFinishEvent): void;
	};
	/**
	 * @namespace vss.com.rcl.ml.eh
	 */
	export default FilterMainDevice;
}
declare module "vss/com/rcl/ml/model/EquipmentHierarchyColumnQuery" {
	import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
	import type { TEquipmentHierarchyCustomEntity } from "vss/com/rcl/types/EntitySet";
	import type Context from "sap/ui/model/odata/v4/Context";
	/**
	 * @todo Move to vss.com.rcl.eqscol; Create reusable extension with own model
	 *
	 * @nonui5
	 * @namespace vss.com.rcl.ml.model
	 */
	export default class EquipmentHierarchyColumnQuery {
		private _model;
		private _path;
		constructor(_model: ODataModel);
		loadChildren(...rootContext: Context[]): Promise<TEquipmentHierarchyCustomEntity[]>;
	}
}
declare module "vss/com/rcl/ml/ext/ColumnEquipmentStructure" {
	import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
	import type Table from "sap/m/Table";
	/**
	 * @todo Move to vss.com.rcl.eqscol; Create reusable extension with own model
	 *
	 * @nonui5
	 * @namespace vss.com.rcl.ml.ext
	 */
	export default class ColumnEquipmentHierarchy {
		private _api;
		private _rootTable;
		private _model;
		constructor(_api: IListReportExtensionAPI, _rootTable: Table);
		init(): void;
		/**
		 * Instantiate hierarchy model & register in view
		 */
		private initModel;
		/**
		 * Bind tree model to equipment hierarchy column for all table rows
		 */
		private _bindHierarchy;
		private _loadChildren;
	}
}
declare module "vss/com/rcl/utils/FioriTable" {
	import type Button from "sap/m/Button";
	import type ResponsiveTable from "sap/m/Table";
	import type Toolbar from "sap/m/Toolbar";
	import type Control from "sap/ui/core/Control";
	import type Table from "sap/ui/table/Table";
	import type MdcTable from "sap/ui/mdc/Table";
	export function isFioriTable(obj: object): obj is MdcTable;
	/**
	 * @type {sap.ui.mdc.actiontoolbar.ActionToolbarAction}
	 */
	export interface IActionToolbarAction extends Control {
		getAction(): Button;
	}
	/**
	 * Result of table.getHeaderToolbar()
	 *
	 * @type {sap.ui.mdc.ActionToolbar}
	 */
	export interface IActionToolbar extends Toolbar {
		getActions(): IActionToolbarAction[];
	}
	export function getResponsiveTable(table: MdcTable): ResponsiveTable;
	export function getTable(table: MdcTable): Table;
	export function getResponsiveTablePromise(table: MdcTable): Promise<ResponsiveTable>;
	export function getTablePromise(table: MdcTable): Promise<Table>;
}
declare module "vss/com/rcl/ml/ext/ListReportTableExtension" {
	import type MdcTable from "sap/ui/mdc/Table";
	import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.ml.ext
	 */
	export default class ListReportTableExtension {
		private _api;
		private _tables;
		private _responsiveTables;
		private _rootTable;
		constructor(_api: IListReportExtensionAPI);
		init(): Promise<void>;
		getTables(): MdcTable[];
		private _findTable;
		private _initEquipmentStructureColumnForRootTable;
		private _initCartActions;
	}
}
declare module "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension" {
	import type ObjectPageLayout from "sap/uxap/ObjectPageLayout";
	import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	import type ObjectPageSection from "sap/uxap/ObjectPageSection";
	import type Control from "sap/ui/core/Control";
	import type View from "sap/ui/core/mvc/View";
	import type Context from "sap/ui/model/odata/v4/Context";
	export interface IContentAware extends Control {
		getContent(): Control;
	}
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.templates.ObjectPage
	 */
	export default abstract class AbstractObjectPageExtension<TBaseEntityType> {
		protected _api: IObjectPageExtensionAPI;
		protected _pageLayout: ObjectPageLayout;
		protected _view: View;
		protected _context?: Context;
		protected _contextLoadPromise?: Promise<Context>;
		protected _contextLoadTimeout: number;
		constructor(_api: IObjectPageExtensionAPI, run?: boolean);
		protected abstract run(): void;
		contextLoaded(): Promise<Context>;
		dataLoaded(): Promise<TBaseEntityType>;
		protected _contextLoaded(): Promise<Context>;
		protected section(sid: string, throwException?: boolean): ObjectPageSection | undefined;
		protected blocks(sid: string, throwException?: boolean): IContentAware[];
		protected data(): TBaseEntityType;
		protected fioriTable(sid: string): import("sap/ui/mdc/Table").default;
		protected responsiveTable(sid: string): Promise<import("sap/m/Table").default>;
	}
}
declare module "vss/com/rcl/ml/ext/ObjectPageToolbarExtension" {
	import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
	import type { TRootEntity } from "vss/com/rcl/types/EntitySet";
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.ml.ext
	 */
	export default class ObjectPageToolbarExtension extends AbstractObjectPageExtension<TRootEntity> {
		protected run(): void;
		private createActionAddToCart;
	}
}
declare module "vss/com/rcl/ml/ext/SectionAccessories" {
	import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
	import type { TRootEntity } from "vss/com/rcl/types/EntitySet";
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.ml.ext
	 */
	export default class SectionAccessories extends AbstractObjectPageExtension<TRootEntity> {
		protected run(): void;
	}
}
declare module "vss/com/rcl/ml/ext/controller/ListReportExtension.controller" {
	import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
	import type { IListReportExtension } from "vss/com/fe/ListReport";
	import type Event from "sap/ui/base/Event";
	/**
	 * @namespace vss.com.rcl.ml.ext.controller.ListReportExtension.controller
	 * @controller
	 */
	export default class ListReportExtension extends ControllerExtension {
		static overrides: {
			onInit(this: IListReportExtension): void;
			onBeforeRendering(this: IListReportExtension, event: Event): void;
			onAfterRendering(this: IListReportExtension, event: Event): void;
			onPendingFilters(this: IListReportExtension): void;
			onViewNeedsRefresh(this: IListReportExtension, event: Event): void;
		};
	}
}
declare module "vss/com/rcl/model/RentalApplicationModelFactory" {
	import JSONModel from "sap/ui/model/json/JSONModel";
	export function createRentalAppModel(): Promise<JSONModel>;
	/**
	 * @obsolete use createRentalAppModel()
	 */
	export function createModel(): Promise<JSONModel>;
}
declare module "vss/com/rcl/ml/ext/controller/MaterialNSObjectPage.controller" {
	import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
	import type { IObjectPageExtension } from "vss/com/fe/ObjectPage";
	/**
	 * @namespace vss.com.rcl.ml.ext.controller.MaterialNSObjectPage.controller
	 * @controller
	 */
	export default class MaterialNSObjectPage extends ControllerExtension {
		static overrides: {
			onInit(this: IObjectPageExtension): void;
			onPageReady(this: IObjectPageExtension, state: unknown): void;
		};
	}
}
declare module "vss/com/rcl/ml/ext/controller/RootObjectPage.controller" {
	import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
	import type { IObjectPageController, IObjectPageExtension } from "vss/com/fe/ObjectPage";
	/**
	 * @namespace vss.com.rcl.ml.ext.controller.RootObjectPage.controller
	 * @controller
	 */
	export default class RootObjectPage extends ControllerExtension {
		base: IObjectPageController;
		static overrides: {
			onInit(this: IObjectPageExtension): void;
			onPageReady(this: IObjectPageExtension, state: unknown): void;
			onExit(this: IObjectPageExtension): void;
		};
	}
}
declare module "vss/com/rcl/model/ContextUtils" {
	import type Context from "sap/ui/model/odata/v4/Context";
	import type { IListReportExtensionAPI } from "vss/com/fe/ListReport";
	import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	const ContextUtils: {
		fromAPI(api: IListReportExtensionAPI | IObjectPageExtensionAPI): Context[];
	};
	/**
	 * @namespace vss.com.rcl.model
	 */
	export default ContextUtils;
}
declare module "vss/com/rcl/model/EquipmentHierarchyWithRootQuery" {
	import type { TRootObjectKey } from "vss/com/rcl/types/EntitySet";
	import EquipmentHierarchyQuery from "vss/com/rcl/model/EquipmentHierarchyQuery";
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.model
	 * @deprecated Replaced with vss.com.rcl.eqsui components
	 */
	export default class EquipmentHierarchyWithRootQuery extends EquipmentHierarchyQuery {
		run(...rootEntity: TRootObjectKey[]): Promise<import("vss/com/rcl/types/EntitySet").TEquipmentHierarchyCustomEntity[]>;
	}
}
declare module "vss/com/rcl/model/format/prefix" {
	const prefix: {
		prefix: (HierarchyLevel: number, prefix?: string) => string;
	};
	/**
	 * @namespace vss.com.rcl.model.format
	 * @global
	 */
	export default prefix;
}
declare module "vss/com/rcl/templates/CharacteristicsDisplayItemFactory" {
	import ObjectStatus from "sap/m/ObjectStatus";
	import type Context from "sap/ui/model/odata/v4/Context";
	export function create(id: string, context: Context): ObjectStatus;
}
declare module "vss/com/rcl/templates/TemplateFragment" {
	import { $XMLPreprocessorProcessSettings } from "sap/ui/core/util/XMLPreprocessor";
	import Control from "sap/ui/core/Control";
	/**
	 * @namespace vss.com.rcl.templates
	 */
	export default class TemplateFragment {
		static load(fragmentName: string, settings: $XMLPreprocessorProcessSettings, extension?: string): Promise<Control | Control[]>;
	}
}
declare module "vss/com/rcl/templates/ObjectPage/AbstractObjectPageSectionExtension" {
	import type Control from "sap/ui/core/Control";
	import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
	export interface IContentAware extends Control {
		getContent(): Control;
	}
	/**
	 * @deprecated Use AbstractObjectPageExtension instead
	 *
	 * @nonui5
	 * @namespace vss.com.rcl.templates.ObjectPage
	 */
	export default abstract class AbstractObjectPageSectionExtension<TBaseEntityType> extends AbstractObjectPageExtension<TBaseEntityType> {}
}
declare module "vss/com/rcl/templates/ObjectPage/SectionEquipmentHierarchy" {
	import type { IEquipmentHierarchyQuery } from "vss/com/rcl/model/EquipmentHierarchyQuery";
	import type Tree from "sap/m/Tree";
	import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
	import type { TRootObjectKey } from "vss/com/rcl/types/EntitySet";
	import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
	/**
	 * @nonui5
	 * @namespace vss.com.rcl.templates.ObjectPage
	 */
	export default class SectionEquipmentHierarchy extends AbstractObjectPageExtension<TRootObjectKey> {
		protected _query: IEquipmentHierarchyQuery;
		protected _sid: string;
		constructor(api: IObjectPageExtensionAPI, _query: IEquipmentHierarchyQuery);
		protected run(): void;
		tree(): Tree;
		getContent(): import("sap/uxap/ObjectPageSection").default;
		destroy(): void;
	}
}
