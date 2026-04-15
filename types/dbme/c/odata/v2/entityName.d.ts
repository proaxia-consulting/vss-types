import type ODataMetaModel from "sap/ui/model/odata/ODataMetaModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
export declare function entityNameForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): string | undefined;
export declare function entityName(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): Promise<string | undefined>;
