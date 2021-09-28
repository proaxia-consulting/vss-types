import ResourceBundle from "sap/base/i18n/ResourceBundle";
import { default as UICom } from "sap/ui/core/UIComponent";

declare module "dbme/w/lib/core" {
    export class library {
        public static getResourceBundle(): ResourceBundle;
    }
}

declare module "dbme/w/lib/core/ui" {
    export class UIComponent extends UICom {}
}