import type PageController from "sap/fe/core/PageController";
import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import type ResponsiveTable from "sap/m/Table";
import type View from "sap/ui/core/mvc/View";
type IView = {
    getController(): PageController;
} & View;
export default class UpsellingItemsCountExtension {
    protected _api: ExtensionAPI;
    protected _view: IView;
    constructor(_api: ExtensionAPI);
    run(): void;
    protected table(): Promise<ResponsiveTable>;
}
export {};
