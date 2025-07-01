import { TDraftAwareEntity } from "vss/com/fe/DraftTypes";
export type TDraftAwareDocumentEntity = TDocumentEntity & TDraftAwareEntity;
export type TDraftAwareDocumentItemEntity = TDocumentItemEntity & TDraftAwareEntity;
export type TGlobalParametersEntity = {
    StatusProfile: string;
};
export type TDocumentEntity = {
    SalesDocument: string;
    SDDocumentCategory: string;
    _ShipToParty: TShipToPartyEntity;
};
export type TDocumentItemEntity = {
    SalesDocument: string;
    SalesDocumentItem: string;
    HigherLevelItem?: string;
    _Header: TDocumentEntity;
};
export type TShipToPartyEntity = {
    SalesDocument: string;
    ShipToParty: string;
    ShipToPartyName?: string;
    AddressID?: string;
    _Address: TAddressEntity;
};
export type TAddressEntity = {
    AddressID: string;
    Title: string;
    Name1: string;
    StreetName: string;
    HouseNumber: string;
    PostalCode: string;
    Country: string;
    Region: string;
    CityCode: string;
    CityName: string;
    AddressTimeZone: string;
    CorrespondenceLanguage: string;
    PhoneNumber: string;
    MobilePhone: string;
    FaxNumber: string;
    EmailAddress: string;
};
