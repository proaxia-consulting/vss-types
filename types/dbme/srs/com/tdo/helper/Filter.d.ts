import type { Button$PressEvent } from "sap/m/Button";
import ModelFilter from "sap/ui/model/Filter";
import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
export type IFilter = {
    getPath?: () => string;
    sPath?: string;
    sValue1?: string;
    sValue2?: string;
};
export declare function filterPath(oFilter: IFilter): string;
declare const Filter: {
    createFiltersPromise(this: ISrsController, oDefault?: {}, aKeys?: string | string[]): Promise<ModelFilter[]>;
    onBtnSmartTableFilter(oEvent: Button$PressEvent): void;
    createFiltersFromData(this: ISrsController, data: Record<string, unknown>, entitySet: string): ModelFilter[];
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default Filter;
