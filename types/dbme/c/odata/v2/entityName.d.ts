import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type ODataMetaModel from "sap/ui/model/odata/ODataMetaModel";
export declare function entityNameForLoadedMeta(entitySet: string, model: ODataModel | ODataMetaModel): string;
export declare function entityName(entitySet: string, model: ODataModel | ODataMetaModel): Promise<string>;
