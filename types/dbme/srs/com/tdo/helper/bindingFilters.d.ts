import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
import Filter from "sap/ui/model/Filter";
import type ManagedObject from "sap/ui/base/ManagedObject";
type TFilters = Filter[] | Record<string, Filter>;
/**
 * Create an array of filters based on current binding
 */
export default function bindingFilters(this: ISrsController, oDefault?: object, aKeys?: string | string[], asObject?: boolean, boundObject?: ManagedObject): TFilters;
export {};
