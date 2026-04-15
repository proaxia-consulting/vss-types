import type Control from "sap/ui/core/Control";
import type View from "sap/ui/core/mvc/View";
import type Context from "sap/ui/model/odata/v4/Context";
import type ObjectPageLayout from "sap/uxap/ObjectPageLayout";
import type ObjectPageSection from "sap/uxap/ObjectPageSection";
import type { IObjectPageExtensionAPI } from "vss/com/fe/ObjectPage";
export type IContentAware = {
    getContent(): Control;
} & Control;
/**
 * @nonui5
 * @namespace vss.com.rcl.templates.ObjectPage
 */
export default abstract class AbstractObjectPageExtension<TBaseEntityType> {
    protected _api: IObjectPageExtensionAPI;
    protected _pageLayout: ObjectPageLayout;
    protected _view: View;
    protected _context?: Context;
    protected _contextLoadPromise?: Promise<Context>;
    protected _contextLoadTimeout: number;
    constructor(_api: IObjectPageExtensionAPI, run?: boolean);
    protected abstract run(): void;
    contextLoaded(): Promise<Context>;
    dataLoaded(): Promise<TBaseEntityType>;
    protected _contextLoaded(): Promise<Context>;
    protected section(sid: string, throwException?: boolean): ObjectPageSection | undefined;
    protected blocks(sid: string, throwException?: boolean): IContentAware[];
    protected data(): TBaseEntityType;
    protected fioriTable(sid: string): import("sap/ui/mdc/Table").default;
    protected responsiveTable(sid: string): Promise<import("sap/m/Table").default>;
}
