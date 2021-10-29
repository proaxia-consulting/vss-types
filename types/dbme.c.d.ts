declare module "dbme/c/library" {
    import ResourceBundle from "sap/base/i18n/ResourceBundle";

    export enum HttpHeaderName {
        DBMEMessage = "dbme-message"
    }

    export function getResourceBundle(): ResourceBundle;
    export function getVersion(): number;
}

declare module "dbme/c/Log" {
    export default class Log {
        public addResponse(oResponse: object, oDefaultSuccess: any, oDefaultError: any): any;
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

declare module "dbme/c/odata/ODataQuery" {
    import Model from "sap/ui/model/Model";
    import Filter from "sap/ui/model/Filter";

    export default class ODataQuery {
        constructor(oModel: Model, sPath: string, aFilters?: Filter[]);
        public read(oUrlParams?: object): Promise<any>;
    }
}