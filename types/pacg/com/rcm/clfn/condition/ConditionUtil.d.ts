import FilterOperator from "sap/ui/model/FilterOperator";
import type { TFilterCondition } from "vss/com/fe/ListReport";
import type { TTokenData } from "ui5";
import Filter from "sap/ui/model/Filter";
/**
 * @namespace pacg.com.rcm.clfn.condition
 */
export type TSimpleCondition = {
    operator: FilterOperator;
    value: string;
};
export declare enum ConditionKey {
    CharacteristicValue = "CharacteristicValueFilter",
    CharcNumber = "_CharcValue/CharcInternalID",
    CharcNumberAll = "_CharcValue+/CharcInternalID",
    CharcNumberAny = "_CharcValue*/CharcInternalID",
    CharcValueDecimal = "_CharcValue/CharcFromDecimalValue",
    CharcValueDecimalAll = "_CharcValue+/CharcFromDecimalValue",
    CharcValueDecimalAny = "_CharcValue*/CharcFromDecimalValue",
    CharcValueString = "_CharcValue/CharcValue",
    CharcValueStringAll = "_CharcValue+/CharcValue",
    CharcValueStringAny = "_CharcValue*/CharcValue"
}
export declare enum ConditionDelimiter {
    Condition = ", ",
    Value = "_"
}
export declare function createCondition(td: TTokenData): TFilterCondition;
export declare function createConditionWithValue(value: string): TFilterCondition;
export declare function serialize(...condition: TFilterCondition[]): string;
export declare function unserializeSimple(condition: string): TSimpleCondition[];
export declare function unserialize(condition: string): TFilterCondition[];
export declare function createFiltersFromConditions(conditions: Record<string, TFilterCondition[]>): Filter[];
