import type ResponsiveTable from "sap/m/Table";
import type { IObjectPageController } from "vss/com/fe/ObjectPage";
/**
 * Extends standard UI5 `sap.m.Table`
 * @nonui5
 * @namespace vss.com.daol.ext
 */
export default class ResponsiveTableExtension {
    protected ctrl: IObjectPageController;
    protected table: ResponsiveTable;
    constructor(ctrl: IObjectPageController, table: ResponsiveTable);
    initialize(): void;
    private _initializeListToolbarExtension;
}
