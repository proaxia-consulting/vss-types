declare module "dbme/c/Log" {
	import { MessageType } from "sap/ui/core/library";

	export type TMessage = {
		type: MessageType;
		counter: number;
		hasError: boolean;
		hasWarning: boolean;
		success: string;
		warning: string;
		error: string;
		message: string;
		code: string;
		description: string;
		title: string;
		subtitle: string;
	};

	export default class Log {
		public addResponse(oResponse: object, oDefaultSuccess?: any, oDefaultError?: any): TMessage;
		public hasError(oResponse: object): boolean;
	}
}

declare module "dbme/c/controller/Base" {
	import Controller from "sap/ui/core/mvc/Controller";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import Log from "dbme/c/Log";

	export default abstract class Base extends Controller {
		public abstract _getModel(): ODataModel;
		public getLog(): Log;
		/**
		 * @deprecated use i18n/Translate function instead
		 */
		public _(key: string, args?: any): string;
	}
}

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

declare module "dbme/c/odata/ODataCommand" {
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { MessageType } from "sap/ui/core/library";
	import { TResponse } from "dbme/c/odata/ODataQuery";

	export type TODataMessage = {
		code: string;
		counter: int;
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

	export type TODataCommandResult = {
		data: any | any[];
		response: TResponse;
		message: TODataMessage;
	};

	export default class ODataCommand {
		protected oModel: ODataModel;

		constructor(oModel: ODataModel);
		create(sPath: string, oCreateData: any): Promise<TODataCommandResult>;
		update(sPath: string, oUpdateData: any): Promise<TODataCommandResult>;
		submit(sBatchGroupId: string): Promise<TODataCommandResult>;
		remove(sPath: string): Promise<TODataCommandResult>;
	}
}

declare module "dbme/c/odata/ODataMessageParser" {
	import BaseODataMessageParser from "sap/ui/model/odata/ODataMessageParser";
	import Message from "sap/ui/core/message/Message";

	export default class ODataMessageParser extends BaseODataMessageParser {
		getLastMessages(bUnique?: boolean, bClear?: boolean): Message[];
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
		 * Print from BACKEND
		 */
		public static print(sArea: string, sObject: string, sObjKey: string, oController?: Controller): Promise<SelectDialog | Blob | string>;
	}
}

// ========================================== GENERATED >>>
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
	export function isUrl(sUrl: string): Boolean;
	export function getUrlParams(sUrl?: string): Record<string, string>;
	export function baseUrl(sUrl?: string): string;
}
declare module "dbme/c/library" {
	import ResourceBundle from "sap/base/i18n/ResourceBundle";
	export const libraryNamespace = "dbme.c";
	const thisLib: any;
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
declare module "dbme/c/i18n/Translate" {
	/**
	 * @name dbme.c.i18n.Translate
	 */
	export default function (key: string, args?: any[]): string;
}
declare module "dbme/c/util/handleReturn" {
	export type TResponseSuccess = {
		body: string;
		data?: any;
		headers: Record<string, string>;
		requestUri: string;
		statusCode: number;
		statusText: string;
	};
	export type TError = {
		statusCode: number;
		statusText: string;
		message?: string;
		responseText: string;
	};
	export function handleError(e: any): void;
	export function handleSuccess(response: TResponseSuccess): void;
}
declare module "dbme/c/odata/ODataQuery" {
	import Filter from "sap/ui/model/Filter";
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	import { TResponseSuccess } from "dbme/c/util/handleReturn";
	export type TResponseData = {
		__count: int;
		results: any[];
	};
	export type TResponse = Omit<TResponseSuccess, "data"> & {
		data: TResponseData | object;
	};
	export type TODataQueryResult = {
		data: any | any[];
		response: TResponse;
	};
	/**
	 * @namespace dbme.c.odata
	 */
	export default class ODataQuery {
		private oModel;
		private sPath;
		private aFilters;
		constructor(oModel: ODataModel, sPath: string, aFilters?: Filter[]);
		read(oUrlParams?: Record<string, string>): Promise<TODataQueryResult>;
	}
}
declare module "dbme/c/util/RemoteMethodCall" {
	import ODataModel from "sap/ui/model/odata/v2/ODataModel";
	/**
	 * @namespace dbme.c.util
	 */
	export default class RemoteMethodCall<TInput, TOutput> {
		private _model?;
		private _displaySuccessMessages;
		private _displayErrorMessages;
		constructor(_model?: ODataModel, _displaySuccessMessages?: boolean, _displayErrorMessages?: boolean);
		call(handlerName: string, methodName: string, input: TInput): Promise<TOutput>;
	}
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
//# sourceMappingURL=index.d.ts.map
