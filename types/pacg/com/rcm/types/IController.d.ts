import type PageController from "sap/fe/core/PageController";
import type { IFilterBar } from "vss/com/fe/ListReport";
import type ClassificationFilterForm from "pacg/com/rcm/clfn/ClassificationFilterForm";
import type { IContainer } from "pacg/com/rcm/types/IControl";
export type IClassificationFilterController = {
    clfnForm(): ClassificationFilterForm;
    filterContainer(): IContainer;
    getMainFilter(): IFilterBar;
    initFilters(filter: IFilterBar): void;
} & PageController;
