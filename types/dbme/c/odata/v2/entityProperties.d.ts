import type ODataMetaModel from "sap/ui/model/odata/ODataMetaModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
export declare function entityPropertiesForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string): string[];
export declare function entityProperties(model: ODataModel | ODataMetaModel, entitySet: string): Promise<string[]>;
