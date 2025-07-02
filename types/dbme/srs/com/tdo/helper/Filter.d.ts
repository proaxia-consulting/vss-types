import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
import type { Button$PressEvent } from "sap/m/Button";
import type Context from "sap/ui/model/Context";
import ModelFilter from "sap/ui/model/Filter";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
export interface IFilter {
    getPath?: () => string;
    sPath?: string;
    sValue1?: string;
    sValue2?: string;
}
export declare function filterPath(oFilter: IFilter): string;
declare const Filter: {
    _getOrderData(this: ISrsController): Record<string, unknown>;
    /**
     * @deprecated use dbme.srs.com.tdo.helper.bindingFilters instead
     */
    _createFilters(this: ISrsController, oDefault?: {}, aKeys?: string | string[]): ModelFilter[];
    createFiltersPromise(this: ISrsController, oDefault?: {}, aKeys?: string | string[]): Promise<ModelFilter[]>;
    onBtnSmartTableFilter(oEvent: Button$PressEvent): void;
    mapOrderListToOrder(oOrderListCtx: Context): IOrderEntity;
    createFiltersFromData(this: ISrsController, data: Record<string, unknown>, entitySet: string): ModelFilter[];
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default Filter;
