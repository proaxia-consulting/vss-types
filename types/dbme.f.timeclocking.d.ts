declare module "dbme/f/timeclocking/Component" {
    import UIComponent from "sap/ui/core/UIComponent";
    import Controller from "sap/ui/core/mvc/Controller";

    export default class Component extends UIComponent {
        public getCurrentRouteName(): string;
        public setCurrentRouteName(name: string): void;
        public getCurrentController(): Controller | null;
        public setCurrentController(controller: Controller): void;
    }
}

declare module "dbme/f/timeclocking/controller/PersonalData.controller" {
    import Controller from "sap/ui/core/mvc/Controller";
    import Panel from "sap/m/Panel";

    export default class PersonalData extends Controller {
        public getObjectPanel(): Panel;
    }

}