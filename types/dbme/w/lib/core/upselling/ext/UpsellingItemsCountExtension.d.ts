import type ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import type View from "sap/ui/core/mvc/View";
import type ResponsiveTable from "sap/m/Table";
import type PageController from "sap/fe/core/PageController";
interface IView extends View {
    getController(): PageController;
}
export default class UpsellingItemsCountExtension {
    protected _api: ExtensionAPI;
    protected _view: IView;
    constructor(_api: ExtensionAPI);
    run(): void;
    protected table(): Promise<ResponsiveTable>;
}
export {};
