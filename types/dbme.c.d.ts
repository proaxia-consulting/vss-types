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
        public _(key: string, args?: any): string;
    }
}