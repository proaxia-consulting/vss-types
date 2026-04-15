import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { TRootEntity } from "vss/com/rcl/types/EntitySet";
export type TCriteria = Record<string, string | number | boolean>;
export declare class ErrorRootEntityNotFound extends Error {
    readonly Criteria?: TCriteria;
    constructor(message: string, Criteria?: TCriteria);
}
export declare function rootByEquipment(model: ODataModel, criteria: TCriteria, urlParams?: Record<string, string>): Promise<TRootEntity>;
