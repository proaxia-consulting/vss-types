import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type ODataMetaModel from "sap/ui/model/odata/ODataMetaModel";
/** TODO: reorder parameters */
export declare function entityPropertiesForLoadedMeta(entitySet: string, model: ODataModel | ODataMetaModel): string[];
/** TODO: reorder parameters */
export declare function entityProperties(entitySet: string, model: ODataModel | ODataMetaModel): Promise<string[]>;
