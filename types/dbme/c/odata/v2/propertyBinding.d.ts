import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { type TODataEntityType } from "dbme/c/odata/v2/entityType";
export declare function createPropertyBindingType(model: ODataModel, entitySet: string | TODataEntityType, propertyName: string): Promise<import("sap/ui/model/SimpleType").default>;
