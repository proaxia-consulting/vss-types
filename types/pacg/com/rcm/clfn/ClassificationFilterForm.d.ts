import type Token from "sap/m/Token";
import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { TFilterCondition } from "vss/com/fe/ListReport";
import type { IClassificationFilterController } from "pacg/com/rcm/types/IController";
/**
 * @namespace pacg.com.rcm.clfn
 */
export default class ClassificationFilterForm {
    private _model;
    private _ctrl;
    private _uiModel;
    private _form;
    private _vh;
    private _cb;
    private _query;
    private _lastFilters;
    private _currentEntity?;
    private _fieldMap;
    private _existingTokens?;
    private _existingKeys?;
    private _existingSimple;
    private _propagateFilterBarConditionsEnabled;
    private _createPromise;
    constructor(_model: ODataModel, _ctrl: IClassificationFilterController);
    setPropagateFilterBarConditionsEnabled(enabled: boolean): void;
    getSearchCriteria(): TFilterCondition[];
    create(): Promise<void>;
    addExistingToken(characteristicKey: string, ...token: Token[]): void;
    addExistingKey(characteristicKey: string, ...keys: string[]): void;
    private characteristicsDeterminationFilters;
    setBusy(flag: boolean): void;
    private createField;
    private createForm;
    private saveExistingTokens;
    private propagateFilterBarConditions;
    private createNoDataIndicator;
}
