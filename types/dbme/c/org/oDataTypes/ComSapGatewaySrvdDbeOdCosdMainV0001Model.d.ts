export type UserOrgDataType = {
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SalesOrganization` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    SalesOrganization: string;
    /**
     * **Key Property**: This is a key property used to identify the entity.
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Plant` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Plant: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyCode` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CompanyCode: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CompanyCodeName` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CompanyCodeName: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City1` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    City1: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Country` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Country: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Currency` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Currency: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Language` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Language: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name1` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Name1: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ValuationArea` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    ValuationArea: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `CustomerNumber` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    CustomerNumber: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SupplierNumber` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    SupplierNumber: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `FactoryCalendarKey` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    FactoryCalendarKey: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Name2` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    Name2: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `StreetNumber` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    StreetNumber: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `POBox` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    POBox: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `PostalCode` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    PostalCode: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `City2` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    City2: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `DefaultValue` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    DefaultValue: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Criticality` |
     * | Type | `Edm.Byte` |
     * | Nullable | `false` |
     */
    Criticality: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `__EntityControl` |
     * | Type | `com.sap.gateway.srvd.dbe.od_cosd_main.v0001.EntityControl` |
     */
    __EntityControl: EntityControl | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `__OperationControl` |
     * | Type | `com.sap.gateway.srvd.dbe.od_cosd_main.v0001.UserOrgDataOperationControl` |
     */
    __OperationControl: UserOrgDataOperationControl | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `SAP__Messages` |
     * | Type | `Collection(com.sap.gateway.srvd.dbe.od_cosd_main.v0001.SAP__Message)` |
     * | Nullable | `false` |
     */
    SAP__Messages: SAP__Message[];
};
export type UserOrgDataTypeId = {
    SalesOrganization: string;
    Plant: string;
};
export type UserOrgDataOperationControl = {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `ChangeDefault` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    ChangeDefault: boolean;
};
export type EntityControl = {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `Updatable` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    Updatable: boolean;
};
export type SAP__Message = {
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `code` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    code: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `message` |
     * | Type | `Edm.String` |
     * | Nullable | `false` |
     */
    message: string;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `target` |
     * | Type | `Edm.String` |
     */
    target: string | null;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `additionalTargets` |
     * | Type | `Collection(Edm.String)` |
     * | Nullable | `false` |
     */
    additionalTargets: string[];
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `transition` |
     * | Type | `Edm.Boolean` |
     * | Nullable | `false` |
     */
    transition: boolean;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `numericSeverity` |
     * | Type | `Edm.Byte` |
     * | Nullable | `false` |
     */
    numericSeverity: number;
    /**
     *
     * OData Attributes:
     * |Attribute Name | Attribute Value |
     * | --- | ---|
     * | Name | `longtextUrl` |
     * | Type | `Edm.String` |
     */
    longtextUrl: string | null;
};
