declare module "dbme/c" {
    export namespace dbme.c {}
}

declare module "dbme/c/library" {
    import ResourceBundle from "sap/base/i18n/ResourceBundle";
    
    export default class library {
        public static getResourceBundle(): ResourceBundle;
    }    
}