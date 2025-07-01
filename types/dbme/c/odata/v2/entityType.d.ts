import { EdmType as EdmTypeBase } from "sap/ui/export/library";
import type ODataMetaModel from "sap/ui/model/odata/ODataMetaModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
export declare const EntityAnnotation: {
    readonly FieldControl: "com.sap.vocabularies.Common.v1.FieldControl";
    readonly IsDigitSequence: "com.sap.vocabularies.Common.v1.IsDigitSequence";
    readonly Label: "com.sap.vocabularies.Common.v1.Label";
    readonly LineItem: "com.sap.vocabularies.UI.v1.LineItem";
    readonly SapFilterable: "sap:filterable";
    readonly SapLabel: "sap:label";
    readonly TextArrangement: "com.sap.vocabularies.UI.v1.TextArrangement";
    readonly Unit: "Org.OData.Measures.V1.Unit";
    readonly ValueList: "com.sap.vocabularies.Common.v1.ValueList";
    readonly ValueListWithFixedValues: "com.sap.vocabularies.Common.v1.ValueListWithFixedValues";
};
export type EntityAnnotationType = (typeof EntityAnnotation)[keyof typeof EntityAnnotation];
export declare const FieldControlType: {
    readonly Hidden: "com.sap.vocabularies.Common.v1.FieldControlType/Hidden";
    readonly Inapplicable: "com.sap.vocabularies.Common.v1.FieldControlType/Inapplicable";
    readonly ReadOnly: "com.sap.vocabularies.Common.v1.FieldControlType/ReadOnly";
    readonly Mandatory: "com.sap.vocabularies.Common.v1.FieldControlType/Mandatory";
};
export type FieldControlTypeType = (typeof FieldControlType)[keyof typeof FieldControlType];
/**
 * EDM Types W/O 'Edm.' prefix
 */
export declare const EdmType: {
    readonly Binary: "Binary";
    readonly Byte: "Byte";
    readonly DateTimeOffset: "DateTimeOffset";
    readonly Decimal: "Decimal";
    readonly Double: "Double";
    readonly Guid: "Guid";
    readonly Int16: "Int16";
    readonly Int32: "Int32";
    readonly Int64: "Int64";
    readonly SByte: "SByte";
    readonly Single: "Single";
    readonly Stream: "Stream";
    readonly TimeOfDay: "TimeOfDay";
    readonly BigNumber: EdmTypeBase.BigNumber;
    readonly Boolean: EdmTypeBase.Boolean;
    readonly Currency: EdmTypeBase.Currency;
    readonly Date: EdmTypeBase.Date;
    readonly DateTime: EdmTypeBase.DateTime;
    readonly Enumeration: EdmTypeBase.Enumeration;
    readonly Number: EdmTypeBase.Number;
    readonly Percentage: EdmTypeBase.Percentage;
    readonly String: EdmTypeBase.String;
    readonly Time: EdmTypeBase.Time;
};
export type EdmTypeType = (typeof EdmType)[keyof typeof EdmType];
export declare function edmType(type: string): EdmTypeType;
export type TODataEntityProperty = {
    [key in EntityAnnotationType]: unknown;
} & {
    name: string;
    type: EdmTypeType;
    maxLength?: string;
    nullable?: string;
    precision?: string;
    scale?: string;
    extensions?: {
        name: string;
        value: string;
    }[];
    [EntityAnnotation.FieldControl]?: {
        EnumMember: FieldControlTypeType;
    };
    [EntityAnnotation.Unit]?: {
        Path: string;
    };
    [EntityAnnotation.SapFilterable]?: "true" | "false";
    [EntityAnnotation.IsDigitSequence]?: {
        Bool: "true" | "false";
    };
    [EntityAnnotation.LineItem]?: {
        Label: {
            String: string;
        };
        Value: {
            Path: string;
        };
        EdmType: EdmTypeType;
    }[];
};
export type TODataEntity = {
    name: string;
    entityType: string;
};
export type TODataKeyProperty = {
    name: string;
};
export type TODataNavigationProperty = {
    name: string;
    relationship: string;
    fromRole: string;
    toRole: string;
};
export type TODataEntityType = {
    name: string;
    namespace: string;
    key: {
        propertyRef: TODataKeyProperty[];
    };
    property: TODataEntityProperty[];
    navigationProperty?: TODataNavigationProperty[];
    $path: string;
};
/** TODO: reorder parameters */
export declare function entityType(entitySet: string, model: ODataModel | ODataMetaModel, throwException?: boolean): Promise<TODataEntityType>;
/** TODO: reorder parameters */
export declare function entityTypeForLoadedMeta(entitySet: string, model: ODataModel | ODataMetaModel, throwException?: boolean): TODataEntityType | undefined;
