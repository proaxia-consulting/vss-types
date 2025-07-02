export type AbapBoolean = AbapTrue | AbapFalse;
export type AbapTrue = "X";
export type AbapFalse = "";
export type MainTable = {
    OrderNumber: string;
    CustomerNumber: string;
    LicensePlate: string;
    VehicleGUID: string;
    AvailabilityStatus: string;
    OrderType: string;
    StartDate: string;
    Priority: string;
    PriorityCode: string;
    AvailabilityBar: string;
    LatestDate: string;
    LatestDateStatus: string;
    LastItem: string;
    Plant: string;
    SalesOrganization: string;
    OrderStatus: string;
    IsProcurement: boolean;
    _Customer?: Customer;
    _MaterialDescr?: MaterialDescription[];
    _Vehicle?: Vehicle;
    _PersonelData?: PersonData[];
    _OrderItems?: OrderItems[];
    _OrderJobs?: OrderJobs[];
    _StatusIcons?: StatusIcons;
};
export type StatusIcons = {
    Status: string;
    IconId: string;
    IconIdFiori: string;
    Description: string;
};
export type OrderItems = {
    LatestDateState: string;
    Plant: string;
    OrderNumber: string;
    PositionNumber: string;
    ItemMatnr: string;
    MatnrLong: string;
    Description1: string;
    OrderQuantity: string;
    OrderQuantityUnit: string;
    JobNumber: string;
    LatestDate: string;
};
export type OrderJobs = {
    OrderNumber: string;
    Jobnr: string;
    Description: string;
    Rejected: string;
    JobIconStatus: string;
};
export type Customer = {
    CustomerNumber: string;
    Name: string;
    Street: string;
    CountyCode: string;
    PostalCode: string;
    City: string;
    TelephoneFirst: string;
    TelephoneSecond: string;
};
export type MaterialDescription = {
    MaterialNumber: string;
    Language: string;
    Description: string;
    DescriptionUpper: string;
    EntryPriority: number;
};
export type Vehicle = {
    VehicleGUID: string;
    VehicleVIN: string;
    ObjectGUID: string;
    _VehicleModelTexts?: VehicleModelTexts[];
};
export type VehicleModelTexts = {
    ProductGuid: string;
    Language: string;
    Description: string;
    EntryPriority: number;
};
export type PersonData = {
    PersonNumber: string;
    Subtype: string;
    ObjectID: string;
    LockIndicator: string;
    EndDate: string;
    BeginDate: string;
    SequenceNo: string;
    Surname: string;
    Name: string;
};
export type JobOverview = {
    JobNumber: string;
    JobDescription: string | undefined;
    JobStatus: string;
    JobStatusState: string;
    _OrderPositions: OrderPositionOverview[];
};
export type MaterialOverview = {
    MaterialNumber: string;
    Plant: string;
    _MaterialDescr?: MaterialDescription[];
    _StockOverview?: StockOverview[];
    _OrderAtp?: MaterialATPOverview[];
};
export type StockOverview = {
    Plant: string;
    PlantDescription: string;
    NearbyPlant: string;
    NearbyPlantDescription: string;
    MaterialNumber: string;
    GroupCode: string;
    GroupCodeDescription: string;
    UnrestrictedQuantity: string;
    AvailableQuantity: string;
    SafetyStockQuantity: string;
    QuantityMeasure: string;
    ABCIndicator: string;
};
export type OrderPositionOverview = {
    Plant: string;
    OrderNumber: string;
    OrderPosition: string;
    Item: string;
    MaterialDescription: string;
    OrderQuantity: string;
    Status: string;
    StatusState: string;
    Posted: string | number;
    Stock: string | number;
    Open: string | number;
    Purchase: string | number;
    LastDate: string;
    LastDateState: string;
    IsProcurement: AbapBoolean;
};
export type AvailabilityBar = {
    resultsItems: Array<ItemsInfo>;
    resultsQuantities: Array<QuantityInfo>;
};
export type ItemsInfo = {
    Job: string;
    Order: string;
    OrderPosition: string;
    Status: string;
    IsProcurement: AbapBoolean;
};
export type QuantityInfo = {
    Amount: number;
    AmountUnit: string;
    Job: string;
    Order: string;
    OrderPosition: string;
    Status: string;
};
export type JobItems = {
    Job: string;
    Items: ItemsInfo[];
};
export type ProcureSubmit = {
    OrderNumber: string;
    Positions: Array<string>;
};
export type BackendMessage = {
    type: string;
    code: string;
    message: string;
};
export type MaterialATPOverview = {
    FinalConfirmedQuantity: string;
    FinalDeliveryDate: string;
    OrderNumber: string;
    OrderPosition: string;
    OriginalOrderNumber: string;
    LicensePlate: string;
    MaterialNumber: string;
    Plant: string;
    OrderStatus: string;
    StartDate: string;
    DeliveryDate: string;
    Priority: string;
    PriorityCode: string;
    OrderQuantity: string;
    ConfirmedQuantity: string;
    PostedQuantity: string;
    InDeliveryQuantity: string;
    PRQuantity: string;
    POQuantity: string;
    StockCovQuantity: string;
    OpenQuantity: string;
    NewConfirmedQuantity: string;
    QuantityMeasure: string;
    CustomerNumber: string;
    IsSwappable: boolean;
    _StatusIcons: StatusIcons;
    _Customer: Customer;
};
export type SwapATPReservations = {
    OrderNumber: string;
    OrderPosition: string;
    ConfirmedQuantity?: string;
    NewConfirmedQuantity?: string;
    QuantityMeasure?: string;
    AvailabilityCheck: boolean;
    SwapActivated: boolean;
};
