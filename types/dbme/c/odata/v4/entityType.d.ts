import type ODataMetaModel from "sap/ui/model/odata/v4/ODataMetaModel";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
export type TEntityTypeProperty = {
    $kind: string;
    $Type: string;
    $Nullable?: boolean;
    $MaxLength?: number;
};
export type TEntityType = Record<string, TEntityTypeProperty> & {
    $Key: string[];
    $kind: string;
};
/**
 * @namespace dbme.c.odata.v4
 */
export default function entityType(model: ODataModel | ODataMetaModel, entityName: string): Promise<TEntityType>;
