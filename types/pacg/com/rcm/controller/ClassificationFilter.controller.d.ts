import type { IFilterBar } from "vss/com/fe/ListReport";
import ClassificationFilterForm from "pacg/com/rcm/clfn/ClassificationFilterForm";
import BaseController from "pacg/com/rcm/controller/BaseController";
import type { IContainer } from "pacg/com/rcm/types/IControl";
import type { IClassificationFilterController } from "pacg/com/rcm/types/IController";
/**
 * @controller
 * @namespace pacg.com.rcm.controller
 */
export default class ClassificationFilter extends BaseController implements IClassificationFilterController {
    private _mainFilter;
    private _localModel;
    private _filterContainer;
    private _clfnForm;
    onInit(): void;
    getMainFilter(): IFilterBar;
    initFilters(filter: IFilterBar): void;
    clfnForm(): ClassificationFilterForm;
    filterContainer(): IContainer;
    private _initModel;
    private _reloadForm;
}
