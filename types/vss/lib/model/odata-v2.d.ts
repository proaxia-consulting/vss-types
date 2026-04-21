import type { default as ODataMetaModel, EntityType } from "sap/ui/model/odata/ODataMetaModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
export declare function isODataV2Model(obj: unknown): obj is ODataModel;
export declare function entityTypeForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): EntityType | undefined;
export declare function entityType(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): Promise<EntityType | undefined>;
export declare function entityPropertiesForLoadedMeta(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): string[];
export declare function entityProperties(model: ODataModel | ODataMetaModel, entitySet: string, throwException?: boolean): Promise<string[]>;
