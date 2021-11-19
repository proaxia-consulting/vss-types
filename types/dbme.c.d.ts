declare module "dbme/c/library" {
    import ResourceBundle from "sap/base/i18n/ResourceBundle";

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

    export function getResourceBundle(): ResourceBundle;
    export function getVersion(): number;
}

declare module "dbme/c/Log" {
    import { MessageType } from "sap/ui/core/library";

    export type TMessage = {
        type: MessageType,
        counter: number,
        hasError: boolean,
        hasWarning: boolean,
        success: string,
        warning: string,
        error: string,
        message: string,
        code: string,
        description: string,
        title: string,
        subtitle: string
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
         TIME_EMPTY_STRING = "00:00:00",        
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
    
    export type TResponseData = {
        __count: int,
        results: any[]
    }

    export type TResponse = {
        body: string,
        data: TResponseData,
        headers: Record<string, string>,
        requestUri: string,
        statusCode: int,
        statusText: string
    }

    export type TODataMessage = {
        code: string,
        counter: int,
        description?: string,
        error: string,
        hasError: boolean,
        hasWarning: boolean,
        message: string,
        subtitle: string,
        success: string,
        title: string,
        type: MessageType,
        warning: string
    }

    export type TODataCommandResult = {
        data: any | any[],
        response: TResponse,
        message: TODataMessage
    }

    export default class ODataCommand {
        protected oModel: ODataModel;

        constructor(oModel: ODataModel);
        create(sPath: string, oCreateData: any): Promise<TODataCommandResult>;
        update(sPath: string, oUpdateData: any): Promise<TODataCommandResult>;
        submit(sBatchGroupId: string): Promise<TODataCommandResult>;
        remove(sPath: string): Promise<TODataCommandResult>;
    }
}

declare module "dbme/c/odata/ODataQuery" {
    import ODataModel from "sap/ui/model/odata/v2/ODataModel";
    import Filter from "sap/ui/model/Filter";
    import { TResponse } from "dbme/c/odata/ODataCommand";

    export type TODataQueryResult = {
        data: any | any[],
        response: TResponse
    }

    export default class ODataQuery {
        protected oModel: ODataModel;
        
        constructor(oModel: ODataModel, sPath: string, aFilters?: Filter[]);
        public read(oUrlParams?: object): Promise<TODataQueryResult>;
    }
}

declare module "dbme/c/odata/ODataMessageParser" {
    import BaseODataMessageParser from "sap/ui/model/odata/ODataMessageParser";
    import Message from "sap/ui/core/message/Message";

    export default class ODataMessageParser extends BaseODataMessageParser {
        getLastMessages(bUnique?: boolean, bClear ?: boolean): Message[];
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

declare module "dbme/c/util/waitFor" {
    export default function waitFor(callable: CallableFunction): Promise<any>;
}