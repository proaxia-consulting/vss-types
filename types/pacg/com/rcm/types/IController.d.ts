import type PageController from "sap/fe/core/PageController";
import type FilterBar from "sap/ui/mdc/FilterBar";
import type ClassificationFilterForm from "pacg/com/rcm/clfn/ClassificationFilterForm";
import type { IContainer } from "pacg/com/rcm/types/IControl";
export type IClassificationFilterController = {
    clfnForm(): ClassificationFilterForm;
    filterContainer(): IContainer;
    getMainFilter(): FilterBar;
    initFilters(filter: FilterBar): void;
} & PageController;
