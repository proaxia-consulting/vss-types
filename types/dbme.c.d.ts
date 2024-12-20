declare module "dbme/c/ConsoleLogger" {
	export function debug(message: string, details?: string): void;
	export function error(message: string, exception?: Error): void;
	export function info(message: string, details?: string): void;
	export function warning(message: string, exception?: Error): void;
}
declare module "dbme/c/Enums" {
	export const libraryNamespace: {
		readonly common: "dbme.c";
	};
	export const HttpHeaderName: {
		readonly DBMEMessage: "dbme-message";
	};
}
declare module "dbme/c/i18n/Translate" {
	import type ResourceBundle from "sap/base/i18n/ResourceBundle";
	export function getBundle(): ResourceBundle | undefined;
	export function __(key: string, args?: unknown[]): string;
	export function setBundle(b: ResourceBundle): void;
	const Translate: typeof __;
	/**
	 * @namespace dbme.c.i18n
	 * @global
	 */
	export default Translate;
}
declare module "dbme/c/util/handleReturn" {
	import Dialog from "sap/m/Dialog";
	import MessageType from "sap/ui/core/message/MessageType";
	import type Message from "sap/ui/core/message/Message";
	export enum DataKey {
		messages = "messages"
	}
	export enum Severity {
		info = "info",
		error = "error",
		success = "success",
		warning = "warning"
	}
	export type TResponseSuccessTyped<T> = {
		body: string;
		data?: T;
		headers: Record<string, string>;
		requestUri: string;
		statusCode: number;
		statusText: string;
		responseText: string;
	};
	export type TResponseSuccess = {
		body: string;
		data?: unknown;
		headers: Record<string, string>;
		requestUri: string;
		statusCode: number;
		statusText: string;
		responseText: string;
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
	export function createSimpleMessage(m: Message): TResponseDetails;
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
	export function severityFromMessageType(messageType: MessageType): Severity | undefined;
	export function htmlMessage(m: TResponseDetails): string;
	export function hasError(messages: TResponseDetails[]): boolean;
	/**
	 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
	 */
	export function hasErrorResponse(...response: TResponseSuccess[]): boolean;
	export function worstSeverity(messages: TResponseDetails[]): Severity;
	export function parseError(err: TError, fallbackMessage?: boolean): TResponseDetails[];
	export function handleError(err: TError, autoOpen?: boolean): Dialog;
	export function extractBatchSuccess(response: TResponseSuccess): TResponseSuccess[];
	export function parseSuccess(response: TResponseSuccess): TResponseDetails[];
	export function handleSuccess(response: TResponseSuccess, autoOpen?: boolean): Dialog | undefined;
}
declare module "dbme/c/Log" {
	import MessageType from "sap/ui/core/message/MessageType";
	import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { type TResponseSuccess } from "dbme/c/util/handleReturn";
	import type Message from "sap/ui/core/message/Message";
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
	 * @nonui5
	 * @deprecated Use dbme.c.util.handleReturn instead!
	 * @namespace dbme.c
	 */
	export default class Log {
		private _clearOnBatchRequestSent;
		private _clearOnRequestSent;
		private _aMessage;
		private _model;
		constructor(model: ODataModel, _clearOnBatchRequestSent?: boolean, _clearOnRequestSent?: boolean);
		addModelMessages(...message: Message[]): this;
		clearModelMessages(): this;
		getModelMessages(): Message[];
		hasError(oResponse: TResponseSuccess): boolean;
		/**
		 * Map sap.ui.core.message.Message[] to LOG internal log message format
		 */
		addResponse(oResponse: TResponseSuccess, oDefaultSuccess?: TMessageDefaults, oDefaultError?: TMessageDefaults): TMessage;
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
declare module "dbme/c/UrlUtils" {
	export function isUrl(sUrl: string): boolean;
	export function getUrlParams(sUrl?: string): Record<string, string>;
	export function baseUrl(sUrl?: string): string;
	/**
	 * @namespace dbme.c
	 */
	const _default: {
		baseUrl: typeof baseUrl;
		getUrlParams: typeof getUrlParams;
		isUrl: typeof isUrl;
	};
	export default _default;
}
declare module "dbme/c/library" {
	/**
	 * @deprecated @since 1.7.0 Use dbme.c.Enums.libraryNamespace.common instead!
	 */
	export const libraryNamespace: "dbme.c";
	const thisLib: {
		[key: string]: unknown;
	};
	/**
	 * @deprecated @since 1.7.0 Use the constants from the dbme.c.control.Enums instead!
	 */
	export enum ControlId {
		LogOpener = "idDBMELogBtnMessagePopoverOpener",
		LogPopover = "idDBMELogMessagePopover"
	}
	/**
	 * @deprecated @since 1.7.0 Use the constants from the dbme.c.Enums module instead!
	 */
	export enum HttpHeaderName {
		DBMEMessage = "dbme-message"
	}
	/**
	 * @deprecated @since 1.7.0 Use the constants from the dbme.c.model.Enums module instead!
	 */
	export enum ModelName {
		i18n = "i18n",
		log = "DBMELog",
		ui = "ui"
	}
	/**
	 * @deprecated @since 1.7.0 Use the constants from the dbme.c.service.Enums module instead!
	 */
	export enum ServiceName {
		EntityProperties = "EntityPropertiesService"
	}
	/**
	 * @deprecated @since 1.7.0 Use the constants from the dbme.c.service.Enums module instead!
	 */
	export enum ServiceScopeType {
		Component = "component"
	}
	export function getVersion(): string;
	/**
	 * @deprecated @since 1.7.0 Use dbme.c.i18n.Translate.getBundle() instead!
	 */
	export function getResourceBundle(): import("sap/base/i18n/ResourceBundle").default | undefined;
	/**
	 * @name dbme.c.library
	 * @global
	 */
	export default thisLib;
}
declare module "dbme/c/att/Enums" {
	export const RMCAppName: {
		readonly dbmeCmpAttUI5: "/DBME/CMP_ATTUI5";
	};
	export const RMCMessageID: {
		readonly dbmeCmpAttUI5_AttachmentsGetConfig: "ATTACHMENTS_GETCONF";
		readonly dbmeCmpAttUI5_AttachmentsSave: "ATTACHMENTS_SAVE";
	};
	export const LocalStorageID: {
		readonly dbmeCmpAttUI5_DeviceDesc_Aud: "/DBME/CMP_ATTUI5_DEVDESC_AUD";
		readonly dbmeCmpAttUI5_DeviceDesc_Vid: "/DBME/CMP_ATTUI5_DEVDESC_VID";
	};
	export const ControlId: {
		mediaContainers: string;
	};
}
declare module "dbme/c/model/CommonType" {
	import type Control from "sap/ui/core/Control";
	import type ResponsiveTable from "sap/m/Table";
	import type Table from "sap/ui/table/Table";
	import type FacetFilter from "sap/m/FacetFilter";
	import type FilterBar from "sap/ui/comp/filterbar/FilterBar";
	import type SmartField from "sap/ui/comp/smartfield/SmartField";
	/**
	 * @deprecated Use Record<string, unknown> instead
	 */
	export type TObject = Record<string, unknown>;
	export type IAnyTable = ResponsiveTable | Table;
	export type IAnyFilterControl = FacetFilter | FilterBar;
	export type IAnyField = SmartField;
	export interface IValidateException {
		violatedConstraints: string[];
	}
	export function isValidateException(err: unknown): err is IValidateException;
	export interface IItemsContainer extends Control {
		getItems(): Control[];
	}
	export interface IContentContainer extends Control {
		getContent(): Control[];
	}
}
declare module "dbme/c/types/IComponent" {
	import type UIComponent from "sap/ui/core/UIComponent";
	export interface IResourceBundleAwareUIComponent extends UIComponent {
		setResourceBundle(): void;
	}
}
declare module "dbme/c/control/IsControl" {
	import type { IContentContainer, IItemsContainer } from "dbme/c/model/CommonType";
	import type UI5Element from "sap/ui/core/Element";
	import type Table from "sap/ui/table/Table";
	import type ResponsiveTable from "sap/m/Table";
	import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
	import type SmartFilterBar from "sap/ui/comp/smartfilterbar/SmartFilterBar";
	import type FacetFilter from "sap/m/FacetFilter";
	import type ComboBox from "sap/m/ComboBox";
	import type CheckBox from "sap/m/CheckBox";
	import type DatePicker from "sap/m/DatePicker";
	import type DateTimePicker from "sap/m/DateTimePicker";
	import type Input from "sap/m/Input";
	import type InputBase from "sap/m/InputBase";
	import type Select from "sap/m/Select";
	import type Slider from "sap/m/Slider";
	import type TimePicker from "sap/m/TimePicker";
	import type SmartComboBox from "sap/ui/comp/smartfield/ComboBox";
	import type SmartField from "sap/ui/comp/smartfield/SmartField";
	import type SmartForm from "sap/ui/comp/smartform/SmartForm";
	import type Form from "sap/ui/layout/form/Form";
	import type FormElement from "sap/ui/layout/form/FormElement";
	import type SimpleForm from "sap/ui/layout/form/SimpleForm";
	import type MultiInput from "sap/m/MultiInput";
	import type MultiComboBox from "sap/m/MultiComboBox";
	import type ValueHelpDialog from "sap/ui/comp/valuehelpdialog/ValueHelpDialog";
	import type Button from "sap/m/Button";
	import type MessagePopover from "sap/m/MessagePopover";
	import type ListBase from "sap/m/ListBase";
	import type List from "sap/m/List";
	import type Dialog from "sap/m/Dialog";
	import type GroupHeaderListItem from "sap/m/GroupHeaderListItem";
	import type FlexBox from "sap/m/FlexBox";
	import type HBox from "sap/m/HBox";
	import type VBox from "sap/m/VBox";
	import type Toolbar from "sap/m/Toolbar";
	import type OverflowToolbar from "sap/m/OverflowToolbar";
	import type Title from "sap/m/Title";
	import type { IResourceBundleAwareUIComponent } from "dbme/c/types/IComponent";
	export function isUI5Element(obj: object): obj is UI5Element;
	export function isContentContainer(obj: object): obj is IContentContainer;
	export function isItemsContainer(obj: object): obj is IItemsContainer;
	export function isButton(obj: object): obj is Button;
	export function isDialog(obj: object): obj is Dialog;
	export function isListBase(obj: object): obj is ListBase;
	export function isList(obj: object): obj is List;
	export function isMessagePopover(obj: object): obj is MessagePopover;
	export function isTable(obj: object): obj is Table;
	export function isResponsiveTable(obj: object): obj is ResponsiveTable;
	export function isSmartTable(obj: object): obj is SmartTable;
	export function isFacetFilter(obj: object): obj is FacetFilter;
	export function isInputBase(obj: object): obj is InputBase;
	export function isInput(obj: object): obj is Input;
	export function isMultiInput(obj: object): obj is MultiInput;
	export function isSlider(obj: object): obj is Slider;
	export function isComboBox(obj: object): obj is ComboBox;
	export function isCheckBox(obj: object): obj is CheckBox;
	export function isMultiComboBox(obj: object): obj is MultiComboBox;
	export function isSelect(obj: object): obj is Select;
	export function isSmartComboBox(obj: object): obj is SmartComboBox;
	export function isSmartField(obj: object): obj is SmartField;
	export function isSmartForm(obj: object): obj is SmartForm;
	export function isSmartFilterBar(obj: object): obj is SmartFilterBar;
	export function isForm(obj: object): obj is Form;
	export function isFormElement(obj: object): obj is FormElement;
	export function isSimpleForm(obj: object): obj is SimpleForm;
	export function isDatePicker(obj: object): obj is DatePicker;
	export function isDateTimePicker(obj: object): obj is DateTimePicker;
	export function isTimePicker(obj: object): obj is TimePicker;
	export function isValueHelpDialog(obj: object): obj is ValueHelpDialog;
	export function isGroupHeaderListItem(obj: object): obj is GroupHeaderListItem;
	export function isFlexBox(obj: object): obj is FlexBox;
	export function isHBox(obj: object): obj is HBox;
	export function isVBox(obj: object): obj is VBox;
	export function isToolbar(obj: object): obj is Toolbar;
	export function isOverflowToolbar(obj: object): obj is OverflowToolbar;
	export function isTitle(obj: object): obj is Title;
	export function isResourceBundleAwareUIComponent(component: unknown): component is IResourceBundleAwareUIComponent;
}
declare module "dbme/c/util/errorMessage" {
	export default function errorMessage(err: unknown, withDetails?: boolean): string;
}
declare module "dbme/c/att/types" {
	import type Controller from "sap/ui/core/mvc/Controller";
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
		selectionVisibleAudio: boolean;
		selectionVisibleVideo: boolean;
		isEnabledPlay: boolean;
		isRecordingActive: boolean;
		tAudioInput: IKeyValueString[];
		tVideoInput: IKeyValueString[];
	}
	export interface IAttachmentConfigMediaType {
		mediaTypeId: string;
		priority: int;
		mimeType: string;
		fileNameExt: string;
		videoCodec: string;
		audioCodec: string;
		activeVideo: boolean;
		activeAudio: boolean;
	}
	export interface IAttachmentConfig {
		fileNameVidP: string;
		fileNameAudP: string;
		fileNameVidG: string;
		fileNameAudG: string;
		videoResX: number;
		videoResY: number;
		bitRateVid: number;
		bitRateAud: number;
	}
	export interface IAttachmentUserData {
		devdescAud: string;
		devdescVid: string;
	}
	export interface IParentController extends Controller {
		getId(): string;
	}
}
declare module "dbme/c/att/AttachmentUtil" {
	import type Dialog from "sap/m/Dialog";
	import type FlexBox from "sap/m/FlexBox";
	import type { IParentController } from "dbme/c/att/types";
	export function fragmentId(parentController?: IParentController): string | undefined;
	export function findMediaContainer(dialog: Dialog): FlexBox;
	export function handleError(err: unknown, show?: boolean): void;
	/**
	 * Prepare the file name
	 */
	export function prepareFileName(fileName: string): string;
	const AttachmentUtil: {
		handleError: typeof handleError;
		prepareFileName: typeof prepareFileName;
	};
	/**
	 * @namespace dbme.c.att
	 */
	export default AttachmentUtil;
}
declare module "dbme/c/att/AVAttHandler" {
	import type JSONModel from "sap/ui/model/json/JSONModel";
	import type { IAttachmentConfig, IAttachmentUserData, IAttachmentConfigMediaType } from "dbme/c/att/types";
	export enum MediaType {
		video = "V",
		audio = "A"
	}
	type TOnMediaStreamAvailable = (mediaStream: MediaStream) => void;
	type TOnMediaStreamRelease = () => void;
	/**
	 * @namespace dbme.c.att
	 * @nonui5
	 */
	export default class AVAttHandler {
		private _mediaType;
		private _mediaStream;
		private _mediaRecorder;
		private _tRecordedBlobs;
		private _attachmentConfig;
		private _mediaTypes;
		private _attachmentUserData;
		private _mediaRecorderModel;
		private _onMediaStreamAvailable;
		private _onMediaStreamRelease;
		private _mediaVideoRequested;
		private _mediaAudioRequested;
		private _currentMimeType;
		private _currentFileNameExtension;
		/**
		 * Constructor
		 */
		constructor();
		/**
		 * Build "options-mimeType" for the initialization of the MediaRecorder
		 */
		private _buildOptionsMIMETypeParameter;
		/**
		 * The example options-mimeType parameters is: video/mp4;codecs=VP8
		 * The method returns the sign "=" which follows the keyword "codecs" above
		 */
		private _codecsKeywordSeparator;
		/**
		 * Determine the MIME Type (with options) which is to be used
		 */
		private _determineMediaType;
		/**
		 * Return the MIME Type
		 */
		getMimeType(): string;
		/**
		 * Return the recorder blob
		 */
		getRecorderBlob(): Blob;
		/**
		 * Initialize
		 */
		init(mediaRecorderModel: JSONModel, onMediaStreamAvailable: TOnMediaStreamAvailable, onMediaStreamRelease: TOnMediaStreamRelease): void;
		/**
		 * Set configuration
		 */
		setConfig(attachmentConfig: IAttachmentConfig, mediaTypes: IAttachmentConfigMediaType[]): void;
		/**
		 * Set user data
		 */
		setUserData(attachmentUserData: IAttachmentUserData): void;
		/**
		 * Set media type (video or audio)
		 */
		setMediaType(mediaType: MediaType): void;
		/**
		 * Get media type (video or audio)
		 */
		getMediaType(): MediaType;
		/**
		 * Get Media Recorder
		 * We do this call before doing the enumeration of the devices because this call triggers the popup towards the user
		 * if he agrees the camera or the microphone to be used by the app
		 * (trigger the call - return the promise)
		 */
		getMediaRecorder_areq(): Promise<MediaStream | undefined>;
		/**
		 * Get Media Recorder
		 * We do this call before doing the enumeration of the devices because this call triggers the popup towards the user
		 * if he agrees the camera or the microphone to be used by the app
		 * (trigger the call - return the promise)
		 */
		getMediaRecorder_aproc(stream: MediaStream | undefined): void;
		/**
		 * Get list of audio / video devices
		 * (trigger the call - return the promise)
		 */
		enumerateDevices_areq(): Promise<MediaDeviceInfo[] | undefined>;
		/**
		 * Process the list of audio / video devices - store them for further processing
		 */
		enumerateDevices_aproc(mediaDeviceInfo: MediaDeviceInfo[]): void;
		/**
		 * Initialize media recorder
		 */
		mediaRecorderInit(): void;
		/**
		 * Start recording
		 */
		recordingStart(onFinished: (data: Blob) => void): void;
		/**
		 * Release media recorder (release the device)
		 */
		mediaRecorderRelease(): void;
		/**
		 * Stop recording
		 */
		recordingStop(): void;
		/**
		 * Download the audio / video recorder
		 */
		download(): void;
		/**
		 * Prepare the file name
		 */
		private _prepareFileName;
		/**
		 * Upload the audio / video to the server using CV_ATTACHMENT_SRC odata
		 */
		upload(): Promise<void>;
	}
}
declare module "dbme/c/att/AttachmentFormatter" {
	const result: {
		modeFormatter(isActiveEntity: string): string;
		objectKeyFormatter(objectID: string, draftUUID: string): string;
	};
	/**
	 * @global
	 * @namespace dbme.c.att
	 */
	export default result;
}
declare module "dbme/c/model/Enums" {
	export const ModelName: {
		readonly i18n: "i18n";
		readonly log: "DBMELog";
		readonly ui: "ui";
	};
}
declare module "dbme/c/util/RemoteMethodCall" {
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { type TResponseSuccessTyped } from "dbme/c/util/handleReturn";
	import type Dialog from "sap/m/Dialog";
	type TResponseData = {
		jsonOut?: string;
	};
	type TResponse = TResponseSuccessTyped<TResponseData>;
	/**
	 * @namespace dbme.c.util
	 */
	export default class RemoteMethodCall<TInput, TOutput> {
		protected _appName: string;
		protected _messageId: string;
		protected _displaySuccessMessages: boolean;
		protected _displayErrorMessages: boolean;
		protected _modelInstance?: ODataModel;
		protected _modelSettings: object;
		protected _modelEndPoint: "Call01Set";
		protected _lastDialog?: Dialog;
		protected _lastResponse?: TResponse;
		protected _lastError?: unknown;
		constructor(_appName: string, _messageId: string, _displaySuccessMessages?: boolean, _displayErrorMessages?: boolean);
		call(input?: TInput): Promise<TOutput>;
		getLastDialog(): Dialog | undefined;
		getLastResponse(): TResponse | undefined;
		getLastError(): unknown;
		protected _model(): ODataModel;
	}
}
declare module "dbme/c/att/MediaRecorder.controller" {
	import { MediaType } from "dbme/c/att/AVAttHandler";
	import AttachmentHandler from "dbme/c/att/AttachmentHandler";
	import UI5Element from "sap/ui/core/Element";
	type TSaveCallback = () => void;
	/**
	 * @namespace dbme.c.att.MediaRecorderController.controller
	 */
	export default class MediaRecorderController extends UI5Element {
		private _attHandler;
		private _saveCallback;
		private _attConfig;
		private _mediaTypes;
		private _attUserData;
		private _avAttHandler?;
		private _mediaRecorderModel?;
		private _dialog?;
		private _htmlCtrlVideoRec?;
		private _htmlCtrlVideoPrev?;
		private _htmlCtrlAudioRec?;
		private _htmlCtrlAudioPrev?;
		private _name?;
		/**
		 * Constructor
		 */
		constructor(_attHandler: AttachmentHandler, _saveCallback: TSaveCallback);
		/**
		 * Initialize JSON model
		 */
		private _initializeModel;
		/**
		 * Initialize the attachment handler
		 */
		private _initializeAttachmentHandler;
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
		initPopup(mediaType: MediaType, objectType: string, objectKey: string): Promise<void>;
		/**
		 * Initialize the dialog (once only)
		 */
		private _buildDialog;
		/**
		 * Handle selection of the device
		 */
		private _onMediaRecorderDeviceChanged;
		/**
		 * Save the selected devices in the backend
		 */
		private _saveDeviceSelected;
		/**
		 * Build UI Controls
		 */
		private _buildUIControls;
		/**
		 * Prepare the file name
		 */
		private _prepareFileName;
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
		destroy(): void;
		private _destroyControls;
	}
}
declare module "dbme/c/att/AttachmentHandler" {
	import type { IParentController } from "dbme/c/att/types";
	import type Dialog from "sap/m/Dialog";
	import UI5Element from "sap/ui/core/Element";
	export interface IAttachmentOpenAttachmentPopupParams {
		parentController?: IParentController;
		objectType: string;
		objectKey: string;
		changeable?: boolean;
		onSave?: () => void;
		onCancel?: () => void;
	}
	/**
	 * @namespace dbme.c.att
	 * @global
	 */
	export default class AttachmentHandler extends UI5Element {
		private static _this?;
		private _name?;
		private _params;
		private _attachmentModel?;
		private _mediaRecorder?;
		private _dialog?;
		private _attachmentContainer?;
		private _attachmentComponent?;
		/**
		 * Constructor
		 */
		private constructor();
		/**
		 * Create instance
		 */
		static getInstance(): AttachmentHandler;
		getParentController(): IParentController | undefined;
		/**
		 * Create instance and open the attachment popup
		 */
		static openAttachmentPopup(params: IAttachmentOpenAttachmentPopupParams): void;
		/**
		 * Open the attachment popup
		 */
		open(params: IAttachmentOpenAttachmentPopupParams): Promise<Dialog | void>;
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
		/**
		 * Destroy inner controls and clear properties
		 */
		private _destroyControls;
		destroy(bSuppressInvalidate?: boolean): void;
	}
}
declare module "dbme/c/control/Enums" {
	export const ControlId: {
		readonly LogOpener: "idDBMELogBtnMessagePopoverOpener";
		readonly LogPopover: "idDBMELogMessagePopover";
	};
}
declare module "dbme/c/control/dialog/ConfirmDialogFactory" {
	import Dialog from "sap/m/Dialog";
	export type ConfirmDialogFunction = (this: object, ...args: unknown[]) => void;
	const ConfirmDialogFactory: {
		create(this: object, fnOnConfirmButtonPress: ConfirmDialogFunction, args?: unknown[]): Dialog;
	};
	/**
	 * @name dbme.c.control.dialog
	 */
	export default ConfirmDialogFactory;
}
declare module "dbme/c/control/signature/SignPadPanelRenderer" {
	import RenderManager from "sap/ui/core/RenderManager";
	import type Control from "sap/ui/core/Control";
	const SignPadPanelRenderer: {
		apiVersion: number;
		render(rm: RenderManager, control: Control): void;
	};
	/**
	 * @namespace dbme.c.control.signature
	 */
	export default SignPadPanelRenderer;
}
declare module "dbme/c/types/EventHandler" {
	import type Event from "sap/ui/base/Event";
	export type EventHandler = (event: Event, ...args: unknown[]) => void;
}
declare module "dbme/c/model/Base64" {
	const Base64: {
		decode(data: string): string;
		encode(data: string): string;
	};
	/**
	 * @namespace dbme.c.model
	 * @global
	 */
	export default Base64;
}
declare module "dbme/c/control/signature/SignPadPanel" {
	import HTML from "sap/ui/core/HTML";
	import Panel from "sap/m/Panel";
	import type { $PanelSettings } from "sap/m/Panel";
	import type { EventHandler } from "dbme/c/types/EventHandler";
	import JQuery from "sap/ui/thirdparty/jquery";
	import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
	import SignaturePad, { type PointGroup } from "signature_pad";
	import type Event from "sap/ui/base/Event";
	export interface $SignPadPanelSettings extends $PanelSettings {
		padWidth?: number | PropertyBindingInfo | `{${string}}`;
		padHeight?: number | PropertyBindingInfo | `{${string}}`;
		editable?: boolean | PropertyBindingInfo | `{${string}}`;
		value?: string | PropertyBindingInfo;
		change?: EventHandler;
	}
	export interface SignPadPanel$ChangeEventParameters {}
	export type SignPadPanel$ChangeEvent = Event<SignPadPanel$ChangeEventParameters>;
	/**
	 * @namespace dbme.c.control.signature
	 */
	export default class SignPadPanel extends Panel {
		getPadHeight: () => number;
		getPadWidth: () => number;
		getEditable: () => boolean;
		getValue: () => string;
		attachChange: (fn: (event: SignPadPanel$ChangeEvent) => void, listener?: object) => this;
		detachChange: (fn: (event: SignPadPanel$ChangeEvent) => void, listener?: object) => this;
		fireChange: (parameters?: SignPadPanel$ChangeEventParameters) => void;
		protected _htmlArea?: HTML;
		protected _signature?: SignaturePad;
		protected _canvas?: HTMLCanvasElement;
		protected _pendingValueChange: boolean;
		static renderer: {
			apiVersion: number;
			render(rm: import("sap/ui/core/RenderManager").default, control: import("sap/ui/core/Control").default): void;
		};
		static readonly metadata: {
			library: string;
			properties: {
				padWidth: {
					type: string;
					group: string;
					defaultValue: number;
				};
				padHeight: {
					type: string;
					group: string;
					defaultValue: number;
				};
				editable: {
					type: string;
					group: string;
					defaultValue: boolean;
				};
				value: {
					type: string;
					group: string;
					defaultValue: string;
				};
			};
			events: {
				change: {
					enableEventBubbling: boolean;
				};
			};
			aggregations: {
				_htmlArea: {
					type: string;
					multiple: boolean;
					singularName: "_htmlArea";
					visibility: string;
				};
			};
		};
		constructor(idOrSettings?: string | $SignPadPanelSettings);
		constructor(id?: string, settings?: $SignPadPanelSettings);
		init(): void;
		onBeforeRendering(oEvent: JQuery.Event): void;
		getImage(encoded?: boolean): string;
		getImageHtml(): string;
		setBusy(bBusy: boolean): this;
		setPadHeight(height: number): this;
		setPadWidth(width: number): this;
		setValue(value: string): this;
		setEditable(editable: boolean): this;
		protected _getHtmlArea(): HTML;
		protected _createHtmlArea(): HTML;
		/**
		 * Convert internal signature format into string
		 */
		protected _stringify(...points: PointGroup[]): string;
		/**
		 * Convert string to internal signature format
		 */
		protected _parse(value: string): PointGroup[];
		protected _setValue(value: string, bFireChange?: boolean, bSignature?: boolean): this;
		protected _setSignatureValue(...points: PointGroup[]): void;
		destroy(bSuppressInvalidate?: boolean): void;
	}
}
declare module "dbme/c/controller/Base" {
	import Controller from "sap/ui/core/mvc/Controller";
	import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import ResponseLogger from "dbme/c/Log";
	/**
	 * @name dbme.c.controller.Base
	 * @controller
	 */
	class Base extends Controller {
		protected _oLog?: ResponseLogger;
		/**
		 * allow to call super.onInit() in child controllers
		 */
		onInit(): void;
		/**
		 * @deprecated Use dbme.c.i18n.Translate instead!
		 *
		 * Translate given key
		 */
		_(sKey: string, aArgs?: string[]): string | undefined;
		/**
		 * Initialize message popover && OData message parser && response handler
		 */
		getLog(): ResponseLogger;
		/**
		 * We assume that view fragment dbme.c.view.fragment.MessagePopover is rendered within the controller's view
		 */
		protected _initLogPopover(): void;
		_getModel(): ODataModel;
	}
	/**
	 * @global
	 */
	export default Base;
}
declare module "dbme/c/controller/ext/DisableAutocomplete.controller" {
	const DisableAutocomplete: {
		/**
		 * Enhance lifecycle method - disable browser autocomplete in all input fields
		 */
		onInit(): void;
		onExit(): void;
	};
	/**
	 * @global
	 * @namespace dbme.c.controller.ext
	 */
	export default DisableAutocomplete;
}
declare module "dbme/c/form/FormSerializer" {
	import type SmartForm from "sap/ui/comp/smartform/SmartForm";
	import type Control from "sap/ui/core/Control";
	const FormSerializer: {
		serializeArray(form: SmartForm): Control[];
		serializeObject(form: SmartForm): Record<string, Control>;
		serializeMap(form: SmartForm): Map<string, Control>;
	};
	/**
	 * @namespace dbme.c.form
	 * @global
	 */
	export default FormSerializer;
}
declare module "dbme/c/format/DateFormat" {
	export enum FormatPattern {
		DATETIME_FORMAT = "yyyy-MM-dd'T'HH:mm:ss",
		DATE_FORMAT = "yyyy-MM-dd",
		TIME_FORMAT = "HH:mm:ss",
		DATETIME_EMPTY_STRING = "0000-00-00T00:00:00",
		DATE_EMPTY_STRING = "0000-00-00",
		TIME_EMPTY_STRING = "00:00:00"
	}
	export const DATETIME_FORMAT = FormatPattern.DATETIME_FORMAT;
	export const DATE_FORMAT = FormatPattern.DATE_FORMAT;
	export const TIME_FORMAT = FormatPattern.TIME_FORMAT;
	export const DATETIME_EMPTY_STRING = FormatPattern.DATETIME_EMPTY_STRING;
	export const DATE_EMPTY_STRING = FormatPattern.DATE_EMPTY_STRING;
	export const TIME_EMPTY_STRING = FormatPattern.TIME_EMPTY_STRING;
	/**
	 * @return {String} Date in dbme.c.format.DateTime.DATETIME_FORMAT format
	 */
	export function dateTimeString(oDate: Date, bUTC?: boolean): string;
	/**
	 * @return {String} Time in dbme.c.format.DateTime.DATE_FORMAT format
	 */
	export function dateString(oDate: Date, bUTC?: boolean): string;
	/**
	 * @return {String} Time in dbme.c.format.DateTime.TIME_FORMAT format
	 */
	export function timeString(oDate: Date, bUTC?: boolean): string;
	/**
	 * @param {String} sDateTime Date in dbme.c.format.DateTime.DATETIME_FORMAT format
	 * @param {?String} [sStyle=medium] 'short, 'medium', 'long' or 'full' @see sap.ui.core.format.DateFormat
	 * @return {String} User locale formatted date
	 */
	export function dateLocal(sDateTime: string, sStyle?: string): string | null;
	/**
	 * @param {number} iSeconds	Duration in seconds
	 * @return {String} Time in HH:mm:ss format
	 */
	export function duration(iSeconds: string): string;
	export function jsDate(sDate: string | number | Date): Date | null;
	export function jsDateTime(sDate: string | number | Date, bUTC?: boolean): Date | null;
	export function getUTCDate(oDate?: Date): Date;
	export function getLocalByUTCDate(oDate: Date): Date | null;
	/**
	 * Date formatting utilities
	 *
	 * @since 1.0.0
	 * @namespace dbme.c.format
	 * @global
	 */
	const _default_1: {
		dateLocal: typeof dateLocal;
		dateString: typeof dateString;
		dateTimeString: typeof dateTimeString;
		duration: typeof duration;
		getLocalByUTCDate: typeof getLocalByUTCDate;
		getUTCDate: typeof getUTCDate;
		jsDate: typeof jsDate;
		jsDateTime: typeof jsDateTime;
	};
	export default _default_1;
}
declare module "dbme/c/odata/v2/entityType" {
	import { EdmType as EdmTypeBase } from "sap/ui/export/library";
	import ODataMetaModel, { type EntityType } from "sap/ui/model/odata/ODataMetaModel";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	export const EntityAnnotation: {
		readonly FieldControl: "com.sap.vocabularies.Common.v1.FieldControl";
		readonly IsDigitSequence: "com.sap.vocabularies.Common.v1.IsDigitSequence";
		readonly Label: "com.sap.vocabularies.Common.v1.Label";
		readonly LineItem: "com.sap.vocabularies.UI.v1.LineItem";
		readonly SapFilterable: "sap:filterable";
		readonly SapLabel: "sap:label";
		readonly TextArrangement: "com.sap.vocabularies.UI.v1.TextArrangement";
		readonly Unit: "Org.OData.Measures.V1.Unit";
		readonly ValueList: "com.sap.vocabularies.Common.v1.ValueList";
		readonly ValueListWithFixedValues: "com.sap.vocabularies.Common.v1.ValueListWithFixedValues";
	};
	export type EntityAnnotationType = (typeof EntityAnnotation)[keyof typeof EntityAnnotation];
	export const FieldControlType: {
		readonly Hidden: "com.sap.vocabularies.Common.v1.FieldControlType/Hidden";
		readonly Inapplicable: "com.sap.vocabularies.Common.v1.FieldControlType/Inapplicable";
		readonly ReadOnly: "com.sap.vocabularies.Common.v1.FieldControlType/ReadOnly";
	};
	export type FieldControlTypeType = (typeof FieldControlType)[keyof typeof FieldControlType];
	/**
	 * EDM Types W/O 'Edm.' prefix
	 */
	export const EdmType: {
		readonly DateTimeOffset: "DateTimeOffset";
		readonly Decimal: "Decimal";
		readonly Int32: "Int32";
		readonly BigNumber: EdmTypeBase.BigNumber;
		readonly Boolean: EdmTypeBase.Boolean;
		readonly Currency: EdmTypeBase.Currency;
		readonly Date: EdmTypeBase.Date;
		readonly DateTime: EdmTypeBase.DateTime;
		readonly Enumeration: EdmTypeBase.Enumeration;
		readonly Number: EdmTypeBase.Number;
		readonly Percentage: EdmTypeBase.Percentage;
		readonly String: EdmTypeBase.String;
		readonly Time: EdmTypeBase.Time;
		readonly Timezone: EdmTypeBase.Timezone;
	};
	export type EdmTypeType = (typeof EdmType)[keyof typeof EdmType];
	export function edmType(type: string): EdmTypeType;
	export type TODataEntityProperty = {
		[key in EntityAnnotationType]: unknown;
	} & {
		name: string;
		type: EdmTypeType;
		maxLength?: string;
		nullable?: string;
		precision?: string;
		scale?: string;
		extensions?: {
			name: string;
			value: string;
		}[];
		[EntityAnnotation.FieldControl]?: {
			EnumMember: FieldControlTypeType;
		};
		[EntityAnnotation.Unit]?: {
			Path: string;
		};
		[EntityAnnotation.SapFilterable]?: "true" | "false";
		[EntityAnnotation.IsDigitSequence]?: {
			Bool: "true" | "false";
		};
		[EntityAnnotation.LineItem]?: {
			Label: {
				String: string;
			};
			Value: {
				Path: string;
			};
			EdmType: EdmTypeType;
		}[];
	};
	/**
	 * @deprecated use standard EntitySet from "sap/ui/model/odata/ODataMetaModel"
	 */
	export type TODataEntity = {
		name: string;
		entityType: string;
	};
	export type TODataKeyProperty = {
		name: string;
	};
	export type TODataNavigationProperty = {
		name: string;
		relationship: string;
		fromRole: string;
		toRole: string;
	};
	/**
	 * @deprecated use standard EntityType from "sap/ui/model/odata/ODataMetaModel"
	 */
	export type TODataEntityType = {
		name: string;
		namespace: string;
		key: {
			propertyRef: TODataKeyProperty[];
		};
		property: TODataEntityProperty[];
		navigationProperty?: TODataNavigationProperty[];
	};
	export function entityType(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): Promise<EntityType | undefined>;
	/**
	 * @deprecated Use entityType(model: ODataModel | ODataMetaModel, entitySet: string) instead!
	 */
	export function entityType(entitySet: string, model: ODataModel | ODataMetaModel): Promise<EntityType | undefined>;
	export function entityTypeForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): EntityType | undefined;
	/**
	 * @deprecated Use entityTypeForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string) instead!
	 */
	export function entityTypeForLoadedMeta(entitySet: string, model: ODataModel | ODataMetaModel): EntityType | undefined;
}
declare module "dbme/c/odata/v2/entityProperties" {
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import ODataMetaModel from "sap/ui/model/odata/ODataMetaModel";
	export function entityPropertiesForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string): string[];
	/**
	 * @deprecated! Use entityPropertiesForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string) instead!
	 */
	export function entityPropertiesForLoadedMeta(entitySet: string, model: ODataModel | ODataMetaModel): string[];
	export function entityProperties(model: ODataModel | ODataMetaModel, entitySet: string): Promise<string[]>;
	/**
	 * @deprecated! Use entityProperties(model: ODataModel | ODataMetaModel, entitySet: string) instead!
	 */
	export function entityProperties(entitySet: string, model: ODataModel | ODataMetaModel): Promise<string[]>;
}
declare module "dbme/c/model/EntityUtils" {
	import Context from "sap/ui/model/Context";
	import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
	const EntityUtils: {
		reset(aKeys: string[], oModel: ODataModel): void;
		/**
		 * @deprecated Use dbme.c.odata.v2.entityProperties instead
		 */
		getProperties(oModel: ODataModel, sEntitySet: string): string[];
		getData(oContext: object | Context, bDeep?: boolean, aValidKeys?: string[] | string): object;
	};
	/**
	 * Entityset utilities
	 *
	 * @author Marek Gozdalski
	 * @since 1.0.0
	 * @namespace dbme.c.model
	 * @global
	 */
	export default EntityUtils;
}
declare module "dbme/c/model/JSONModel" {
	import JSONModelBase from "sap/ui/model/json/JSONModel";
	/**
	 * @author Marek Gozdalski
	 * @since 1.7.0
	 * @namespace dbme.c.model.JSONModel
	 */
	export default class JSONModel extends JSONModelBase {
		protected _targetPath: Map<string, string[]>;
		constructor(oData?: object, bObserve?: boolean);
		loadPath(targetPath: string, sURL: string, oParameters?: object | string, sType?: "GET" | "POST", mHeaders?: object): Promise<void>;
		protected _ajax(oParameters: JQuery.AjaxSettings): any;
	}
}
declare module "dbme/c/model/type/Date" {
	import DateBase from "sap/ui/model/type/Date";
	/**
	 * Date type. Input value as string: yyyy-MM-dd'T'HH:mm:ss
	 *
	 * @author Marek Gozdalski
	 * @since 1.0.0
	 * @name dbme.c.model.type.Date
	 *
	 * @global
	 */
	export default class DateType extends DateBase {
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
	}
}
declare module "dbme/c/model/type/DateTime" {
	import DateTimeBase from "sap/ui/model/type/DateTime";
	/**
	 * DateTime type. Input value as string: yyyy-MM-dd'T'HH:mm:ss
	 *
	 * @author Marek Gozdalski
	 * @since 1.0.0
	 * @namespace dbme.c.model.type
	 *
	 * @global
	 */
	export default class DateTime extends DateTimeBase {
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
	}
}
declare module "dbme/c/model/type/DateTimeUTC" {
	import DateTime from "sap/ui/model/type/DateTime";
	/**
	 * UTC DateTime type.
	 *
	 * @author Marek Gozdalski
	 * @since 1.0.0
	 * @namespace dbme.c.model.type
	 *
	 * @global
	 */
	export default class DateTimeUTC extends DateTime {
		protected oConstraints: {
			minimum?: unknown;
			maximum?: unknown;
			[key: string]: unknown;
		};
		protected oInputFormat: object;
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
		validateValue(oValue: unknown): void;
		formatValue(vValue: unknown, sTargetType: string): any;
	}
}
declare module "dbme/c/model/type/Email" {
	import StringType from "sap/ui/model/type/String";
	/**
	 * E-mail type
	 *
	 * @author Marek Gozdalski
	 * @since 1.0.0
	 * @namespace dbme.c.model.type
	 *
	 * @global
	 */
	export default class Email extends StringType {
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
		validateValue(sValue: string): void;
	}
}
declare module "dbme/c/model/type/Mileage" {
	import IntegerType from "sap/ui/model/type/Integer";
	/**
	 * Mileage type
	 *
	 * @author Marek Gozdalski
	 * @since 1.0.0
	 * @namespace dbme.c.model.type
	 *
	 * @global
	 */
	export default class Mileage extends IntegerType {
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
		formatValue(vValue: unknown, sInternalType: string): {};
	}
}
declare module "dbme/c/model/type/NotEmptyString" {
	import StringType from "sap/ui/model/type/String";
	/**
	 * @namespace dbme.c.model.type
	 * @global
	 */
	export default class NotEmptyString extends StringType {
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
		validateValue(sValue: string): void;
	}
}
declare module "dbme/c/model/type/Percent" {
	import IntegerType from "sap/ui/model/type/Integer";
	/**
	 * @namespace dbme.c.model.type
	 * @global
	 */
	export default class Percent extends IntegerType {
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
	}
}
declare module "dbme/c/model/type/PercentAC" {
	import Percent from "dbme/c/model/type/Percent";
	/**
	 * @namespace dbme.c.model.type
	 * @global
	 */
	export default class PercentAC extends Percent {
		constructor(oFormatOptions?: {}, oConstraints?: object);
	}
}
declare module "dbme/c/model/type/Phone" {
	import StringType from "sap/ui/model/type/String";
	/**
	 * Phone number type
	 * @author Marek Gozdalski
	 * @since 1.0.0
	 * @namespace dbme.c.model.type
	 *
	 * @global
	 */
	export default class Phone extends StringType {
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
		validateValue(sValue: string): void;
	}
}
declare module "dbme/c/model/type/VIN" {
	import StringType from "sap/ui/model/type/String";
	/**
	 * Vehicle Identification Number type
	 *
	 * @author Marek Gozdalski
	 * @since 1.0.0
	 * @namespace dbme.c.model.type
	 * @global
	 */
	export default class VIN extends StringType {
		protected sName: string;
		constructor(oFormatOptions?: {}, oConstraints?: object);
	}
}
declare module "dbme/c/model/type/Types" {
	import DateType from "dbme/c/model/type/Date";
	import DateTime from "dbme/c/model/type/DateTime";
	import DateTimeUTC from "dbme/c/model/type/DateTimeUTC";
	import Email from "dbme/c/model/type/Email";
	import Mileage from "dbme/c/model/type/Mileage";
	import Percent from "dbme/c/model/type/Percent";
	import PercentAC from "dbme/c/model/type/PercentAC";
	import Phone from "dbme/c/model/type/Phone";
	import VIN from "dbme/c/model/type/VIN";
	import NotEmptyString from "dbme/c/model/type/NotEmptyString";
	const Types: {
		Date: typeof DateType;
		DateTime: typeof DateTime;
		DateTimeUTC: typeof DateTimeUTC;
		Email: typeof Email;
		Mileage: typeof Mileage;
		Percent: typeof Percent;
		PercentAC: typeof PercentAC;
		Phone: typeof Phone;
		VIN: typeof VIN;
		NotEmptyString: typeof NotEmptyString;
	};
	/**
	 * @namespace dbme.c.model.type
	 * @global
	 */
	export default Types;
}
declare module "dbme/c/odata/IODataModel" {
	import type ODataV2Model from "sap/ui/model/odata/v2/ODataModel";
	import type ODataV4Model from "sap/ui/model/odata/v4/ODataModel";
	export function isODataV2Model(model: unknown): model is ODataV2Model;
	export function isODataV4Model(model: unknown): model is ODataV4Model;
}
declare module "dbme/c/odata/ODataCommand" {
	import Log, { type TMessage } from "dbme/c/Log";
	import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import type { TResponseSuccess } from "dbme/c/util/handleReturn";
	export type TODataMessage = TMessage;
	class ODataCommand<TEntityData> {
		protected oModel: ODataModel;
		protected oLog: Log;
		protected bResetChangesOnError: boolean;
		constructor(oModel: ODataModel);
		submit(sBatchGroupId?: string): Promise<{
			data: TEntityData | TEntityData[];
			response: TResponseSuccess;
			message: TODataMessage;
		}>;
		create(
			sPath: string,
			oCreateData: object
		): Promise<{
			data: TEntityData;
			response: TResponseSuccess;
			message: TODataMessage;
		}>;
		update(
			sPath: string,
			oUpdateData: object
		): Promise<{
			data: TEntityData;
			response: TResponseSuccess;
			message: TODataMessage;
		}>;
		remove(sPath: string): Promise<{
			data?: TEntityData;
			response: TResponseSuccess;
			message: TODataMessage;
		}>;
		protected _getMessageFromResponse(oResponse: TResponseSuccess, isBatch?: boolean): TMessage;
	}
	/**
	 * @namespace dbme.c.odata
	 */
	export default ODataCommand;
}
declare module "dbme/c/odata/ODataQuery" {
	import type Filter from "sap/ui/model/Filter";
	import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import type { TResponseSuccess } from "dbme/c/util/handleReturn";
	class ODataQuery<TEntityData> {
		protected oModel: ODataModel;
		protected sPath: string;
		protected aFilters: Filter[];
		constructor(oModel: ODataModel, sPath: string, aFilters?: Filter[]);
		read(oUrlParams?: Record<string, string>): Promise<{
			data: TEntityData[];
			response: TResponseSuccess;
		}>;
	}
	/**
	 * @namespace dbme.c.odata
	 */
	export default ODataQuery;
}
declare module "dbme/c/odata/v2/entityName" {
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import ODataMetaModel from "sap/ui/model/odata/ODataMetaModel";
	export function entityNameForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): string | undefined;
	/**
	 * @deprecated Use entityNameForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string) instead!
	 */
	export function entityNameForLoadedMeta(entitySet: string, model: ODataModel | ODataMetaModel): string | undefined;
	export function entityName(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): Promise<string | undefined>;
	/**
	 * @deprecated Use entityName(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean) instead!
	 */
	export function entityName(entitySet: string, model: ODataModel | ODataMetaModel): Promise<string | undefined>;
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
		/**
		 * @deprecated Use readContexts or readData
		 */
		read(oUrlParams?: Record<string, string>, asContext?: boolean): Promise<Context[]> | Promise<TEntityData[]>;
		readContexts(oUrlParams?: Record<string, string>): Promise<Context[]>;
		readData(oUrlParams?: Record<string, string>): Promise<TEntityData[]>;
	}
}
declare module "dbme/c/odata/v4/entityType" {
	import type ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
	import ODataModel from "sap/ui/model/odata/v4/ODataModel";
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
	 * @namespace dbme.c.odata.v4
	 */
	export default function entityType(model: ODataModel | ODataMetaModel, entityName: string): Promise<TEntityType>;
}
declare module "dbme/c/odata/v4/createKey" {
	import ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
	/**
	 * @namespace dbme.c.odata.v4
	 */
	export default function createKey(metaModel: ODataMetaModel, entityName: string, entityData: Record<string, unknown>): Promise<string>;
}
declare module "dbme/c/odata/v4/entityProperties" {
	import type ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
	import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
	/**
	 * @namespace dbme.c.odata.v4
	 */
	export default function entityProperties(model: ODataModel | ODataMetaModel, entityName: string, withKey?: boolean): Promise<string[]>;
}
declare module "dbme/c/odata/v4/parseKey" {
	/**
	 * @namespace dbme.c.odata.v4
	 */
	export default function parseKey(entityKey: string): Record<string, unknown>;
}
declare module "dbme/c/org/Component" {
	import BaseComponent from "sap/fe/core/AppComponent";
	/**
	 * @namespace dbme.c.org
	 */
	export default class Component extends BaseComponent {
		static metadata: {
			manifest: string;
			library: string;
		};
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init(): void;
	}
}
declare module "dbme/c/org/Enums" {
	export const ActionName: {
		readonly ChangeDefault: "com.sap.gateway.srvd.dbe.od_cosd_main.v0001.ChangeDefault";
	};
	export const ServiceUrl: {
		readonly UserOrganization: "/sap/opu/odata4/dbe/od_cosd_main_ui_04/srvd/dbe/od_cosd_main/0001/";
	};
	export const ControlId: {
		readonly OrgForm: "FormOrgID";
	};
}
declare module "dbme/c/org/oDataTypes/ComSapGatewaySrvdDbeOdCosdMainV0001Model" {
	export interface UserOrgDataType {
		/**
		 * **Key Property**: This is a key property used to identify the entity.
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `SalesOrganization` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		SalesOrganization: string;
		/**
		 * **Key Property**: This is a key property used to identify the entity.
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `Plant` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		Plant: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `CompanyCode` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		CompanyCode: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `CompanyCodeName` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		CompanyCodeName: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `City1` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		City1: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `Country` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		Country: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `Currency` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		Currency: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `Language` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		Language: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `Name1` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		Name1: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `ValuationArea` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		ValuationArea: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `CustomerNumber` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		CustomerNumber: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `SupplierNumber` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		SupplierNumber: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `FactoryCalendarKey` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		FactoryCalendarKey: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `Name2` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		Name2: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `StreetNumber` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		StreetNumber: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `POBox` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		POBox: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `PostalCode` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		PostalCode: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `City2` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		City2: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `DefaultValue` |
		 * | Type | `Edm.Boolean` |
		 * | Nullable | `false` |
		 */
		DefaultValue: boolean;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `Criticality` |
		 * | Type | `Edm.Byte` |
		 * | Nullable | `false` |
		 */
		Criticality: number;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `__EntityControl` |
		 * | Type | `com.sap.gateway.srvd.dbe.od_cosd_main.v0001.EntityControl` |
		 */
		__EntityControl: EntityControl | null;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `__OperationControl` |
		 * | Type | `com.sap.gateway.srvd.dbe.od_cosd_main.v0001.UserOrgDataOperationControl` |
		 */
		__OperationControl: UserOrgDataOperationControl | null;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `SAP__Messages` |
		 * | Type | `Collection(com.sap.gateway.srvd.dbe.od_cosd_main.v0001.SAP__Message)` |
		 * | Nullable | `false` |
		 */
		SAP__Messages: Array<SAP__Message>;
	}
	export type UserOrgDataTypeId = {
		SalesOrganization: string;
		Plant: string;
	};
	export interface UserOrgDataOperationControl {
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `ChangeDefault` |
		 * | Type | `Edm.Boolean` |
		 * | Nullable | `false` |
		 */
		ChangeDefault: boolean;
	}
	export interface EntityControl {
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `Updatable` |
		 * | Type | `Edm.Boolean` |
		 * | Nullable | `false` |
		 */
		Updatable: boolean;
	}
	export interface SAP__Message {
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `code` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		code: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `message` |
		 * | Type | `Edm.String` |
		 * | Nullable | `false` |
		 */
		message: string;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `target` |
		 * | Type | `Edm.String` |
		 */
		target: string | null;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `additionalTargets` |
		 * | Type | `Collection(Edm.String)` |
		 * | Nullable | `false` |
		 */
		additionalTargets: Array<string>;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `transition` |
		 * | Type | `Edm.Boolean` |
		 * | Nullable | `false` |
		 */
		transition: boolean;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `numericSeverity` |
		 * | Type | `Edm.Byte` |
		 * | Nullable | `false` |
		 */
		numericSeverity: number;
		/**
		 *
		 * OData Attributes:
		 * |Attribute Name | Attribute Value |
		 * | --- | ---|
		 * | Name | `longtextUrl` |
		 * | Type | `Edm.String` |
		 */
		longtextUrl: string | null;
	}
}
declare module "dbme/c/org/orgData" {
	import type { UserOrgDataType } from "dbme/c/org/oDataTypes/ComSapGatewaySrvdDbeOdCosdMainV0001Model";
	export function getUserOrgData(): Promise<UserOrgDataType[]>;
	export function getUserOrgDataDefault(): Promise<UserOrgDataType | void>;
}
declare module "dbme/c/org/ext/main/Main.controller" {
	import Controller from "sap/fe/core/PageController";
	import type { Table$SelectionChangeEvent } from "sap/fe/macros/table/TableAPI";
	/**
	 * @namespace dbme.c.org.ext.main
	 * @controller
	 */
	export default class Main extends Controller {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dbme.c.org.main.Main
		 */
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dbme.c.org.main.Main
		 */
		onBeforeRendering(): void;
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dbme.c.org.main.Main
		 */
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dbme.c.org.main.Main
		 */
		onExit(): void;
		onBeforeRebind(event: Event): void;
		private _rebindForm;
		onChangeSelection(event: Table$SelectionChangeEvent): Promise<void>;
	}
}
declare module "dbme/c/org/i18n/Translate" {
	import type ResourceBundle from "sap/base/i18n/ResourceBundle";
	export function setBundle(b: ResourceBundle): void;
	export function __(key: string, args?: unknown[]): string;
	const Translate: typeof __;
	/**
	 * @namespace dbme.c.org.i18n
	 */
	export default Translate;
}
declare module "dbme/c/print/HtmlWindow" {
	/**
	 * Trigger HTML printing on local printer via popup window
	 *
	 * @since 1.0.0
	 */
	export function print(sHTML: string, bClose?: boolean, bAutoPrint?: boolean): void;
	/**
	 * @namespace dbme.c.print
	 * @global
	 */
	const _default_2: {
		print: typeof print;
	};
	export default _default_2;
}
declare module "dbme/c/print/printUtils" {
	export type TPrintSettings = {
		close?: boolean;
		print?: boolean;
		imports?: Record<string, unknown>;
		title?: string;
		fileName?: string;
	};
	export function createDefaultPrintSettings(): TPrintSettings;
	export function readTemplateFromUrl(templateUrl: string): Promise<string>;
}
declare module "dbme/c/print/htmlFromTemplate" {
	import { type TPrintSettings } from "dbme/c/print/printUtils";
	export default function htmlFromTemplate(lodashTemplateUrl: string, templateData?: {}, settings?: TPrintSettings): Promise<void>;
}
declare module "dbme/c/print/pdfFromString" {
	import { type TPrintSettings } from "dbme/c/print/printUtils";
	export default function pdfFromString(base64EncodedPdfString: string, settings?: TPrintSettings): void;
}
declare module "dbme/c/print/pdfFromBackend" {
	import type Controller from "sap/ui/core/mvc/Controller";
	export type TPrintEntity = {
		AUTO_PRINT: boolean;
		TITLE: string;
		TYPE: string;
		AREA: string;
		OBJECT: string;
		PRID: string;
		OBJKEY: string;
		PRNKEY: string;
	};
	export type TPrintContentEntity = TPrintEntity & {
		CONTENT: string;
	};
	/**
	 * Entities of Printouts OData Services
	 */
	export enum Entity {
		PrintList = "PrintGetIDs",
		PrintData = "PrintGetPDF"
	}
	/**
	 * Supported printout types
	 */
	export enum PrintoutType {
		BackendPdf = "BPDF",
		BackendPdfNoSapMessaging = "B1",
		BackendPdfSapMessaging = "B2",
		FrontendPdf = "FPDF",
		FrontendHtml = "FHTM"
	}
	/**
	 * Trigger the printout from backend using /sap/opu/odata/DBME/CMP_MAIN OData V2 service
	 *
	 * @param {String} sArea	Printout Area; DBM|E Application, for ex. SRS, VGM
	 * @param {String} sObject	Printout Object; UI5 application component's name
	 * @param {String} sObjKey	Object key; Business object ID
	 * @param {sap.ui.core.mvc.Controller} ctrl 	App. controller
	 */
	export default function pdfFromBackend(sArea: string, sObject: string, sObjKey: string, ctrl?: Controller): Promise<void>;
}
declare module "dbme/c/print/PrintHandler" {
	import htmlFromTemplate from "dbme/c/print/htmlFromTemplate";
	import pdfFromBackend from "dbme/c/print/pdfFromBackend";
	import type { TPrintSettings } from "dbme/c/print/printUtils";
	export const print: typeof pdfFromBackend;
	const PrintHandler: {
		/** @deprecated Use print function - dbme.c.print.pdfFromBackend */
		print: typeof pdfFromBackend;
		/** @deprecated Use print function - dbme.c.print.htmlFromTemplate */
		printHtml: typeof htmlFromTemplate;
		/** @deprecated Use print function - dbme.c.print.pdfWithRenderer or dbme.c.print.pdfFromString */
		printPdf(urlOrBase64EncodedPdfString: string, templateData?: {}, settings?: TPrintSettings): never;
	};
	/**
	 * @deprecated Use print function - dbme.c.print.pdf*
	 *
	 * @since 1.0.0
	 * @namespace dbme.c.print
	 * @global
	 */
	export default PrintHandler;
}
declare module "dbme/c/print/pdfWithRenderer" {
	import { type TPrintSettings } from "dbme/c/print/printUtils";
	interface IPdf {
		print(): void;
	}
	/**
	 * Fallback interface for pdfMake @link https://pdfmake.github.io/docs/
	 */
	interface IPdfRenderer {
		createPdf(source: object): IPdf;
	}
	/**
	 * Usage with pdfMake:
	 *
	 * import * as pdfMake from "pdfmake/build/pdfmake";
	 * import * as pdfFonts from 'pdfmake/build/vfs_fonts';
	 * (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
	 *
	 * Pass pdfMake into pdfRenderer parameter
	 */
	export default function pdfWithRenderer(lodashTemplateForRendererUrl: string, oData: {} | undefined, pdfRenderer: IPdfRenderer, settings?: TPrintSettings): Promise<void>;
}
declare module "dbme/c/service/Enums" {
	export const ServiceName: {
		readonly EntityProperties: "EntityPropertiesService";
	};
	export const ServiceScopeType: {
		readonly Component: "component";
	};
}
declare module "dbme/c/service/EntityPropertiesServiceFactory" {
	import ServiceFactory from "sap/ui/core/service/ServiceFactory";
	import Service from "sap/ui/core/service/Service";
	import ServiceContext from "sap/ui/core/service/ServiceContext";
	type TServiceSettings = {
		entitySet?: string[];
	};
	export interface IEntitySetProvider {
		getEntitySet(): string[];
	}
	export class EntityPropertiesService extends Service<TServiceSettings> {
		private _component?;
		private _entitySetProvider?;
		private static _mEntityProperties;
		init(): void;
		private loadProperties;
		private setProperties;
		hasProperties(entitySet: string): boolean;
		getProperties(entitySet: string): string[] | undefined;
		setEntitySetProvider(provider: IEntitySetProvider): void;
		getInterface(): unknown;
	}
	/**
	 * @namespace dbme.c.service
	 */
	export default class EntityPropertiesServiceFactory extends ServiceFactory<TServiceSettings> {
		createInstance(context: ServiceContext<TServiceSettings>): Promise<EntityPropertiesService>;
	}
}
declare module "dbme/c/util/FilterFactory" {
	import Filter from "sap/ui/model/Filter";
	import FilterOperator from "sap/ui/model/FilterOperator";
	export function fromObject(aProps: string[], oData: Record<string, unknown>, sOperator?: FilterOperator): Filter[];
}
declare module "dbme/c/util/FioriLaunchpad" {
	import type FioriLaunchpadContainer from "sap/ushell/Container";
	import type Navigation from "sap/ushell/services/Navigation";
	export type TSemanticObject = {
		intent: string;
	};
	export enum LaunchpadService {
		/** @deprecated use Navigation service */
		CrossApplicationNavigation = "CrossApplicationNavigation",
		Navigation = "Navigation"
	}
	export function getLaunchpadContainer(): FioriLaunchpadContainer | undefined;
	export function isLaunchpad(): boolean;
	/**
	 * @deprecated Use dbme.c.util.FioriLaunchpad.getNavigation()
	 */
	export function getCrossApplicationNavigation(): Promise<Navigation>;
	export function getNavigation(): Promise<Navigation>;
}
declare module "dbme/c/util/InstanceManagerOverride" {
	import EventProvider from "sap/ui/base/EventProvider";
	import type { EventHandler } from "dbme/c/types/EventHandler";
	/**
	 * Event ID pattern: (before|after)(keyof InstanceManager with 1st capital letter),
	 * for ex.: "afterAddDialogInstance", "beforeAddDialogInstance"
	 */
	export enum InstanceManagerEvent {
		afterAddDialogInstance = "afterAddDialogInstance",
		beforeAddDialogInstance = "beforeAddDialogInstance"
	}
	/**
	 * @namespace dbme.c.util
	 */
	export default class InstanceManagerOverride extends EventProvider {
		static metadata: {
			events: {
				afterAddDialogInstance: {};
				beforeAddDialogInstance: {};
			};
		};
		constructor();
		attachAfterAddDialogInstance(eventHandler: EventHandler, listener?: object): this;
		attachOnceAfterAddDialogInstance(eventHandler: EventHandler, listener?: object): this;
		attachBeforeAddDialogInstance(eventHandler: EventHandler, listener?: object): this;
		attachOnceBeforeAddDialogInstance(eventHandler: EventHandler, listener?: object): this;
	}
}
declare module "dbme/c/util/waitFor" {
	/**
	 * Wait until target() will return non-falsy value
	 *
	 * @namespace dbme.c.util
	 */
	export default function waitFor<TResult>(target: CallableFunction, limit?: $waitForSettings): Promise<TResult>;
	export type $waitForSettings = {
		times: number;
		timeout: number;
	};
}
declare module "dbme/c/util/fieldLoaded" {
	import type SmartField from "sap/ui/comp/smartfield/SmartField";
	import { type IAnyField } from "dbme/c/model/CommonType";
	export function fieldLoaded(field: IAnyField, waitForItems?: boolean, innerControlsTimeout?: number): Promise<SmartField>;
}
declare module "dbme/c/util/filterLoaded" {
	import { type IAnyFilterControl } from "dbme/c/model/CommonType";
	export function filterLoaded(filter: IAnyFilterControl): Promise<void>;
}
declare module "dbme/c/util/minUI5VersionCheck" {
	import type UIComponent from "sap/ui/core/UIComponent";
	function minUI5VersionCheck(this: UIComponent, bBlockUi?: boolean): void;
	/**
	 * Check loaded UI5 version against current component
	 *
	 * @namespace dbme.c.util
	 */
	export default minUI5VersionCheck;
}
declare module "dbme/c/util/tableLoaded" {
	import type ListBase from "sap/m/ListBase";
	import type ListItemBase from "sap/m/ListItemBase";
	import type ResponsiveTable from "sap/m/Table";
	import type ListBinding from "sap/ui/model/ListBinding";
	import type Row from "sap/ui/table/Row";
	import type Table from "sap/ui/table/Table";
	import type { IAnyTable } from "dbme/c/model/CommonType";
	import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
	export function internalTableLoaded(table: SmartTable): Promise<IAnyTable>;
	export function itemsLoaded(table: ResponsiveTable | ListBase): Promise<ListItemBase[]>;
	export function rowsLoaded(table: Table): Promise<Row[]>;
	export function bindingLoaded(table: IAnyTable | SmartTable | ListBase, timeout?: number): Promise<ListBinding>;
}
declare module "dbme/c/view/fragment/TemplateFragment" {
	import { type $XMLPreprocessorProcessSettings } from "sap/ui/core/util/XMLPreprocessor";
	import Control from "sap/ui/core/Control";
	const TemplateFragment: {
		load(fragmentName: string, settings: $XMLPreprocessorProcessSettings, extension?: string): Promise<Control | Control[]>;
	};
	/**
	 * @namespace dbme.c.view.fragment
	 */
	export default TemplateFragment;
}
