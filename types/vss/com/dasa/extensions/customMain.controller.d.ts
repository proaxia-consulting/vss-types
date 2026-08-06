import type { FilterBar$FilterChangeEvent } from "sap/ui/comp/filterbar/FilterBar";
import ControllerExtension from "sap/ui/core/mvc/ControllerExtension";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
/**
 * @description controller for custom filter, navigation param, action(quick view and global filter),
 * navigation target controller class name can be like app.ovp.ext.CustomFilter where app.ovp can be replaced with your application namespace
 *
 * @namespace vss.com.dasa.webapp.extensions
 */
export default class customMain extends ControllerExtension {
    static overrides: {
        /** @see sap.ovp.app.TemplateBaseExtension */
        templateBaseExtension: {
            provideCustomParameter(this: customMain, customParams?: string): () => {
                aSelectionVariant: {
                    path: string;
                    operator: FilterOperator;
                    value1: string | null;
                    value2: string | null;
                    sign: string;
                }[];
                bIgnoreEmptyString: boolean;
            };
        };
        onBeforeRendering(this: customMain): void;
    };
    initI18n(): Promise<void>;
    getI18nText(sKey: string): string;
    attachFilterChangedToFilterBar(): void;
    onSmartFilterBarFilterChange(oEvent: FilterBar$FilterChangeEvent): void;
    getFilters(): Filter;
    getDialog(): Promise<void>;
    getCustomFilters(): Filter;
    onButtonOrgDataPress(): void;
    onCloseButtonOrgDataPress(): void;
    getCOSDParameters(): {
        aSelectionVariant: {
            path: string;
            operator: FilterOperator;
            value1: string | null;
            value2: string | null;
            sign: string;
        }[];
        bIgnoreEmptyString: boolean;
    };
    getUpsellingParameters(): {
        aSelectionVariant: {
            path: string;
            operator: FilterOperator;
            value1: string | null;
            value2: string | null;
            sign: string;
        }[];
        bIgnoreEmptyString: boolean;
    };
}
