import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { type AnnotationFieldControlTypeType, EntityAnnotation } from "dbme/w/lib/core/model/Enums";
/** @deprecated Use dbme.w.lib.core.model.Enums.AnnotationFieldControlTypeType instead! */
export declare enum $FieldControlType {
    Hidden = "com.sap.vocabularies.Common.v1.FieldControlType/Hidden",
    Inapplicable = "com.sap.vocabularies.Common.v1.FieldControlType/Inapplicable",
    ReadOnly = "com.sap.vocabularies.Common.v1.FieldControlType/ReadOnly",
    Mandatory = "com.sap.vocabularies.Common.v1.FieldControlType/Mandatory"
}
export type $ServiceAnnotations = {
    [key: string]: {
        [EntityAnnotation.LineItem]?: {
            Label: {
                String: string;
            };
            Value: {
                Path: string;
            };
        }[];
    };
    propertyAnnotations: {
        [key: string]: {
            [key: string]: {
                [EntityAnnotation.FieldControl]: {
                    EnumMember: AnnotationFieldControlTypeType;
                };
            };
        };
    };
};
export interface IODataModel extends ODataModel {
    sServiceUrl: string;
}
