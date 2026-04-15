import type { EntityType } from "sap/ui/model/odata/ODataMetaModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
export declare function createPropertyBindingType(model: ODataModel, entitySet: string | EntityType, propertyName: string): Promise<import("sap/ui/model/SimpleType").default>;
