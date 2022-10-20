declare module "dbme/c/format/DateFormat" {
	export enum DateFormat {
		DATETIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ss",
		DATE_FORMAT = "yyyy-MM-dd",
		TIME_FORMAT = "HH:mm:ss",
		DATETIME_EMPTY_STRING = "0000-00-00T00:00:00",
		DATE_EMPTY_STRING = "0000-00-00",
		TIME_EMPTY_STRING = "00:00:00"
	}

	export function dateTimeString(oDate: Date, bUTC?: boolean): string;
	export function dateString(oDate: Date, bUTC?: boolean): string;
	export function timeString(oDate: Date, bUTC?: boolean): string;
	export function dateLocal(sDateTime: string | Date, sStyle?: string): string;
	export function duration(iSeconds: int): string;
	export function jsDate(sDate: string | Date): Date | null;
	export function jsDateTime(sDate: string | Date, bUTC?: boolean): Date | null;
	export function getUTCDate(oDate?: Date): Date;
	export function getLocalByUTCDate(oDate: Date): Date | null;
}

declare module "dbme/c/model/type/DateTime" {
	import DateTimeBase from "sap/ui/model/odata/type/DateTime";
	export default class DateTimeUTC extends DateTimeBase {}
}
declare module "dbme/c/model/type/DateTimeUTC" {
	import DateTimeBase from "sap/ui/model/odata/type/DateTime";
	export default class DateTimeUTC extends DateTimeBase {}
}

declare module "dbme/c/model/EntityUtils" {
	import Context from "sap/ui/model/Context";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";

	export default class EntityUtils {
		static reset(aKeys: string[], oModel: ODataModel): void;

		/**
		 * @deprecated instead - determine with sap.ui.model.odata.ODataMetaModel
		 */
		static getEntityName(source: string | Context): string;

		/**
		 * @deprecated do not use!
		 */
		static getPathByMetadata(oMetadata: object): string;

		/**
		 * @deprecated do not use!
		 */
		static getNamespace(model: ODataModel): string;

		/**
		 * @deprecated do not use!
		 */
		static getTypeName(model: ODataModel, sEntityName: string | Context): string;

		/**
		 * @deprecated do not use!
		 */
		static getKeyByPath(path: string): string;

		static getProperties(model: ODataModel | Context, entitySet: string): string[];
		static getData(source: Context | object, deep?: boolean, validKeys?: string | string[]): any;
	}
}

declare module "dbme/c/WatchDog" {
	export default class WatchDog {
		/**
		 * @deprecated use dbme.c.util.waitFor() instead
		 */
		static await(sSelector: CallableFunction | string, iTime?: int, iTimeLimit?: int): Promise<any>;
	}
}

declare module "dbme/c/print/PrintHandler" {
	import Controller from "sap/ui/core/mvc/Controller";
	import SelectDialog from "sap/m/SelectDialog";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";

	export type TImports = {
		imports: Record<string, any>;
	};

	/**
	 * @link https://www.npmjs.com/package/@types/pdfmake
	 */
	export interface TCreatedPdf {
		print(): void;
	}

	export enum Entity {
		PrintList = "PrintGetIDs",
		PrintData = "PrintGetPDF"
	}

	export enum PrintoutType {
		BackendPdf = "BPDF",
		BackendPdfNoSapMessaging = "B1",
		BackendPdfSapMessaging = "B2",
		FrontendPdf = "FPDF",
		FrontendHtml = "FHTM"
	}

	export default class PrintHandler {
		public static getModel(): ODataModel;

		public static printHtml(sUrl: string, oViewData?: any, oImports?: TImports, oController?: Controller): void;
		public static printPdf(sUrl: string, oViewData?: any, oImports?: TImports, oController?: Controller): TCreatedPdf | Blob | string;
		public static printExcel(oViewData?: any): Promise<void>;

		/**
		 * Print from  BACKEND
		 */
		public static print(sArea: string, sObject: string, sObjKey: string, oController?: Controller): Promise<SelectDialog | Blob | string>;
	}
}

// ========================================== GENERATED >>>
declare module "dbme/c/library" {
	import ResourceBundle from "sap/base/i18n/ResourceBundle";
	export const libraryNamespace = "dbme.c";
	const thisLib: {
		[key: string]: unknown;
	};
	export enum ControlId {
		LogOpener = "idDBMELogBtnMessagePopoverOpener",
		LogPopover = "idDBMELogMessagePopover"
	}
	export enum HttpHeaderName {
		DBMEMessage = "dbme-message"
	}
	export enum ModelName {
		i18n = "i18n",
		log = "DBMELog"
	}
	export function getVersion(): string;
	export function getResourceBundle(): ResourceBundle;
	/**
	 * @name dbme.c.library
	 * @global
	 */
	export default thisLib;
}
declare module "dbme/c/UrlUtils" {
	export function isUrl(sUrl: string): boolean;
	export function getUrlParams(sUrl?: string): Record<string, string>;
	export function baseUrl(sUrl?: string): string;
}
declare module "dbme/c/i18n/Translate" {
	/**
	 * @name dbme.c.i18n.Translate
	 */
	export default function (key: string, args?: any[]): string;
}
declare module "dbme/c/util/handleReturn" {
	import Dialog from "sap/m/Dialog";
	enum Severity {
		info = "info",
		error = "error",
		success = "success",
		warning = "warning"
	}
	export type TResponseSuccess = {
		body: string;
		data?: any;
		headers: Record<string, string>;
		requestUri: string;
		statusCode: number;
		statusText: string;
		responseText?: string;
	};
	export type TError = {
		statusCode: number;
		statusText: string;
		message?: string;
		responseText: string;
	};
	export type TResponseDetails = {
		code?: string;
		message: string;
		severity: Severity;
		target?: string;
		transition?: boolean;
	};
	export type TResponseError = {
		error: {
			code: string;
			innererror: {
				errordetails?: TResponseDetails[];
			};
			message: {
				value: string;
			};
		};
	};
	export type TResponseSuccessMessages = TResponseDetails & {
		details: TResponseDetails[];
	};
	export function handleError(e: any): Dialog | undefined;
	export function handleSuccess(response: TResponseSuccess): Dialog | undefined;
}
declare module "dbme/c/odata/ODataMessageParser" {
	import Message from "sap/ui/core/message/Message";
	import { TResponseSuccess } from "dbme/c/util/handleReturn";
	import Parent from "sap/ui/model/odata/ODataMessageParser";
	import ODataMetadata from "sap/ui/model/odata/ODataMetadata";
	type TRequest = {
		requestUri?: string;
	};
	export default class ODataMessageParser extends Parent {
		static metadata: {
			publicMethods: ["getLastMessages", "parse", "setProcessor", "getHeaderField", "setHeaderField"];
		};
		private _metadata?;
		private _lastMessages?;
		private _processor?;
		constructor(sServiceUrl: string | undefined, oMetadata: ODataMetadata);
		parse(oResponse: TResponseSuccess, oRequest?: TRequest, mGetEntities?: any, mChangeEntities?: any): this;
		getLastMessages(bUnique?: boolean, bClear?: boolean): Message[];
		private _createTarget;
		private _filterMessages;
		private _regroupMessages;
		private _getHtmlMessage;
		private _parseCustomHeaders;
		private _getCustomHeaders;
	}
}
declare module "dbme/c/Log" {
	import { MessageType } from "sap/ui/core/library";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { TResponseSuccess } from "dbme/c/util/handleReturn";
	export type TMessage = {
		code: string;
		counter: number;
		description?: string;
		error: string;
		hasError: boolean;
		hasWarning: boolean;
		message: string;
		subtitle: string;
		success: string;
		title: string;
		type: MessageType;
		warning: string;
	};
	type TMessageDefaults = {
		code?: string;
		message?: string;
		subtitle?: string;
		title?: string;
	};
	/**
	 * @global
	 * @namespace dbme.c
	 */
	export default class Log {
		private oModel;
		private aMessages;
		constructor(oModel: ODataModel);
		hasError(oResponse: TResponseSuccess): boolean;
		/**
		 * Returns last message
		 */
		addResponse(oResponse: TResponseSuccess, oDefaultSuccess?: TMessageDefaults, oDefaultError?: TMessageDefaults): TMessage;
		private _extract;
		private _getMessageTemplate;
	}
}
declare module "dbme/c/StringUtils" {
	/**
	 * Pad a string to a certain length with another string
	 */
	export function pad(s: string, len: number, c: string): string;
	/**
	 * Escape curly brackets
	 */
	export function escapeCurlyBrackets(sValue: string): string;
	/**
	 * Replace non-printable spaces with &nbsp;
	 */
	export function nbsp(sValue: string): string;
	/**
	 * Uppercase first character
	 */
	export function ucFirst(sValue: string): string;
}
declare module "dbme/c/att/AVAttHandler" {
	import JSONModel from "sap/ui/model/json/JSONModel";
	interface IKeyValueString {
		Id: string;
		Descr: string;
	}
	export interface IMediaRecorderModel {
		fileName: string;
		objectKey: string;
		objectType: string;
		selectedAudioInput: string;
		selectedVideoInput: string;
		isEnabled: boolean;
		isVideo: boolean;
		isAudio: boolean;
		isEnabledPlay: boolean;
		isRecordingActive: boolean;
		tAudioInput: IKeyValueString[];
		tVideoInput: IKeyValueString[];
		videoResolutionX: number;
		videoResolutionY: number;
		videoBitrate: number;
		audioBitrate: number;
	}
	export enum MediaType {
		video = "V",
		audio = "A"
	}
	type TOnMediaStreamAvailable = (mediaStream: MediaStream) => void;
	type TOnMediaStreamRelease = () => void;
	export default class AVAttHandler {
		private _mediaType;
		private _mediaStream;
		private _mediaRecorder;
		private _tRecordedBlobs;
		private _mediaRecorderModel;
		private _onMediaStreamAvailable;
		private _onMediaStreamRelease;
		constructor();
		init(mediaType: MediaType, mediaRecorderModel: JSONModel, onMediaStreamAvailable: TOnMediaStreamAvailable, onMediaStreamRelease: TOnMediaStreamRelease): void;
		getMediaType(): MediaType;
		mediaRecorderInit(): void;
		recordingStart(onFinished: (data: Blob) => void): void;
		mediaRecorderRelease(): void;
		recordingStop(): void;
		download(): void;
		upload(): Promise<void>;
	}
}
declare module "dbme/c/att/AttachmentFormatter" {
	const result: {
		modeFormatter: (isActiveEntity: string) => string;
		objectKeyFormatter: (objectID: string, draftUUID: string) => string;
	};
	/**
	 * @global
	 * @namespace dbme.c.att
	 */
	export default result;
}
declare module "dbme/c/att/MediaRecorder.controller" {
	import Controller from "sap/ui/core/mvc/Controller";
	import { MediaType } from "dbme/c/att/AVAttHandler";
	type TSaveCallback = () => void;
	/**
	 * @namespace dbme.c.att
	 */
	export default class MediaRecorderController {
		private _avAttHandler;
		private _mediaRecorderModel;
		private _dialog;
		private _parentController;
		private _htmlCtrlVideoRec;
		private _htmlCtrlVideoPrev;
		private _htmlCtrlAudioRec;
		private _htmlCtrlAudioPrev;
		private _saveCallback;
		private _reactToUIChangesCreateBindingDone;
		/**
		 * Constructor
		 */
		constructor(parentController: Controller, saveCallback: TSaveCallback);
		/**
		 * Initialize JSON  model
		 */
		private _initializeModel;
		/**
		 * Handle Save button
		 */
		private onSave;
		/**
		 * Handle Cancel button
		 */
		private onCancel;
		/**
		 * Open popup
		 */
		openPopup(): void;
		/**
		 * Initialize popup
		 */
		init(mediaType: MediaType, objectType: string, objectKey: string): Promise<void>;
		/**
		 * Initialize the dialog (once only)
		 */
		private _buildDialog;
		/**
		 * React to the UI input - create the bindings
		 */
		private _reactToUIChangesCreateBinding;
		/**
		 * Build UI Controls
		 */
		private _buildUIControls;
		/**
		 * Initialize the dialog
		 */
		private _initDialog;
		/**
		 * Init UI Controls
		 */
		private _initUIControls;
		/**
		 * Get Video control - recording
		 */
		private _getVideoRec;
		/**
		 * Get Audio control - recording
		 */
		private _getAudioRec;
		/**
		 * Get Video control - preview
		 */
		private _getVideoPrev;
		/**
		 * Get Audio control - preview
		 */
		private _getAudioPrev;
		/**
		 * Initalize Media Recorder
		 */
		private _mediaRecorderInit;
		/**
		 * Handle recording stop
		 */
		private onRecordingStop;
		/**
		 * Handle recording start
		 */
		private onRecordingStart;
		/**
		 * Play recording
		 */
		onPlay(): void;
		/**
		 * Download the recording
		 */
		onDownload(): void;
	}
}
declare module "dbme/c/util/RemoteMethodCall" {
	import { TResponseSuccess } from "dbme/c/util/handleReturn";
	import Dialog from "sap/m/Dialog";
	type TResponseData = {
		jsonOut?: string;
	};
	type TResponse = Omit<TResponseSuccess, "data"> & {
		data: TResponseData;
	};
	/**
	 * @namespace dbme.c.util
	 */
	export default class RemoteMethodCall<TInput, TOutput> {
		private _appName;
		private _messageId;
		private _displaySuccessMessages;
		private _displayErrorMessages;
		private _model;
		private _lastDialog?;
		private _lastResponse?;
		private _lastError?;
		constructor(_appName: string, _messageId: string, _displaySuccessMessages?: boolean, _displayErrorMessages?: boolean);
		call(input?: TInput): Promise<TOutput>;
		getLastDialog(): Dialog | undefined;
		getLastResponse(): TResponse | undefined;
		getLastError(): any;
	}
}
declare module "dbme/c/att/AttachmentHandler" {
	import Controller from "sap/ui/core/mvc/Controller";
	interface IAttachmentOpenAttachmentPopupParams {
		parentController: Controller;
		objectType: string;
		objectKey: string;
		changeable: boolean;
	}
	/**
	 * @namespace dbme.c.att
	 */
	export default class AttachmentHandler {
		private static _this;
		private _attachmentModel;
		private _mediaRecorder;
		private _dialog;
		private _parentController;
		private _attachmentContainer;
		private _attachmentComponent;
		/**
		 * Constrtor
		 */
		constructor(parentController: Controller);
		/**
		 * Open the attachment popup
		 */
		static openAttachmentPopup(params: IAttachnentOpenAttachmentPopupParams): void;
		/**
		 * Initialize JSON  model
		 */
		private _initializeModel;
		/**
		 * Handle Save button
		 */
		onSave(): void;
		/**
		 * Handle Cancel button
		 */
		onCancel(): void;
		/**
		 * Initialize the popup
		 */
		private _init;
		/**
		 * Open popup
		 */
		openPopup(): void;
		/**
		 * Refresh the attachments list
		 */
		private _listRefresh;
		/**
		 * Initialize the popup
		 */
		private _initDialog;
		/**
		 * Build the content of the popup
		 */
		private _buildDialog;
		/**
		 * Handle Video Record button
		 */
		onRecordVideo(): void;
		/**
		 * Handle Audio Record button
		 */
		onRecordAudio(): void;
		/**
		 * Handle Video/Audio Record button
		 */
		private _attachmentPopupRecord;
		/**
		 * Create the component handling the attachments
		 */
		private _createAttachmentComponent;
	}
}
declare module "dbme/c/att/Enums" {
	export enum ModelName {
		action = "action",
		device = "device",
		i18n = "i18n",
		local = "local",
		ui = "ui",
		pageInternal = "pageInternal",
		internal = "internal"
	}
	export enum ControlId {
		mainTable = "fe::table::OrderHeader::LineItem"
	}
	export enum EntitySet {
		returnSet = "returnSet"
	}
	export enum ODataFunctionName {
		callEvent = "callEvent"
	}
	export enum VSSEventId {
		BillingCancel = "BILLING_CANCEL",
		BillingCreate = "BILLING_CREATE"
	}
	export enum HTTPMethod {
		GET = "GET",
		PUT = "PUT",
		POST = "POST",
		DELETE = "DELETE"
	}
	export enum ReturnMessageType {
		Information = "I",
		Error = "E",
		Warning = "W"
	}
}
declare module "dbme/c/controller/Base" {
	import Controller from "sap/ui/core/mvc/Controller";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import _Log from "dbme/c/Log";
	/**
	 * @global
	 * @namespace dbme.c.controller
	 */
	export default class Base extends Controller {
		private _oLog?;
		/**
		 * Keep the interfce unchanged to avoid errors in child controllers
		 */
		onInit(): void;
		/**
		 * @deprecated use i18n/Translate function instead
		 *
		 * Translate given key
		 */
		_(sKey: string, aArgs?: string[]): string;
		/**
		 * Initialize message popover && OData message parser && response handler
		 */
		getLog(): _Log;
		_getModel(): ODataModel;
	}
}
declare module "dbme/c/model/CommonType" {
	export type TObject = Record<string, unknown>;
}
declare module "dbme/c/odata/ODataQuery" {
	import Filter from "sap/ui/model/Filter";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { TResponseSuccess } from "dbme/c/util/handleReturn";
	import { TObject } from "dbme/c/model/CommonType";
	export type TResponseData = {
		__count: int;
		results: TObject[];
	};
	export type TResponse = Omit<TResponseSuccess, "data"> & {
		data: TResponseData | object;
	};
	export type TODataQueryResult = {
		data: TObject | TObject[];
		response: TResponse;
	};
	/**
	 * @namespace dbme.c.odata
	 */
	export default class ODataQuery {
		protected oModel: ODataModel;
		protected sPath: string;
		protected aFilters: Filter[];
		constructor(oModel: ODataModel, sPath: string, aFilters?: Filter[]);
		read(oUrlParams?: Record<string, string>): Promise<TODataQueryResult>;
	}
}
declare module "dbme/c/odata/ODataCommand" {
	import Log, { TMessage } from "dbme/c/Log";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { TResponse } from "dbme/c/odata/ODataQuery";
	export type TODataMessage = TMessage;
	export type TODataCommandResult = {
		data: any | any[];
		response: TResponse;
		message: TODataMessage;
	};
	/**
	 * @namespace dbme.c.odata
	 */
	export default class ODataCommand {
		protected oModel: ODataModel;
		protected oLog: Log;
		protected bResetChangesOnError: boolean;
		constructor(oModel: ODataModel);
		protected _getMessageFromResponse(oResponse: TResponse): TMessage;
		submit(sBatchGroupId: string): Promise<TODataCommandResult>;
		create(sPath: string, oCreateData: object): Promise<TODataCommandResult>;
		update(sPath: string, oUpdateData: object): Promise<TODataCommandResult>;
		remove(sPath: string): Promise<TODataCommandResult>;
	}
}
declare module "dbme/c/odata/v4/ODataQuery" {
	import Filter from "sap/ui/model/Filter";
	import Context from "sap/ui/model/odata/v4/Context";
	import ODataModel from "sap/ui/model/odata/v4/ODataModel";
	/**
	 * @namespace dbme.c.odata.v4
	 */
	export default class ODataQuery<TEntityData> {
		protected oModel: ODataModel;
		protected sPath: string;
		protected aFilters: Filter[];
		constructor(oModel: ODataModel, sPath: string, aFilters?: Filter[]);
		read(oUrlParams?: Record<string, string>, asContext?: boolean): Promise<Context[] | TEntityData[]>;
	}
}
declare module "dbme/c/odata/v4/entityType" {
	import ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
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
	/**
	 * @name dbme.c.odata.v4.entityType
	 */
	export default function (metaModel: ODataMetaModel, entityName: string): Promise<TEntityType>;
}
declare module "dbme/c/odata/v4/createKey" {
	import { TObject } from "dbme/c/model/CommonType";
	import ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
	/**
	 * @name dbme.c.odata.v4.createKey
	 */
	export default function (metaModel: ODataMetaModel, entityName: string, entityData: TObject): Promise<string>;
}
declare module "dbme/c/odata/v4/entityProperties" {
	import ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
	/**
	 * @name dbme.c.odata.v4.entityProperties
	 */
	export default function (metaModel: ODataMetaModel, entityName: string, withKey?: boolean): Promise<string[]>;
}
declare module "dbme/c/util/minUI5VersionCheck" {
	import Controller from "sap/ui/core/mvc/Controller";
	/**
	 * Check loaded UI5 version against current component
	 * Call with sap.ui.core.mvc.Controller as bound THIS
	 *
	 * @name dbme.c.util.minUI5VersionCheck
	 */
	export default function (this: Controller, bBlockUi?: boolean): void;
}
declare module "dbme/c/util/waitFor" {
	/**
	 * Wait until callable() will return non-falsy value
	 *
	 * @namespace dbme.c.util
	 */
	export default function (target: CallableFunction): Promise<any>;
}
