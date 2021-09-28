declare module "dbme/w/lib/core" {
    import ResourceBundle from "sap/base/i18n/ResourceBundle";

    export class library {
        public static getResourceBundle(): ResourceBundle;
    }
}

declare module "dbme/w/lib/core/ui/UIComponent" {
    import { default as UICom } from "sap/ui/core/UIComponent";

    export default class UIComponent extends UICom {
        public static getDBMEComponent(): string;
    }
}