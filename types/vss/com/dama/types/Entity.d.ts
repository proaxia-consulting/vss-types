import { ValueState } from "sap/ui/core/library";
import { TAvailableOrderEntity, TEventsEntity, TPersonalEntity } from "../service/timeClockingService";
export type TOrderEntity = {
    OrderID: string;
    Plant: string;
    OrderJobKey?: string;
    TestDrive: boolean;
    Mileage: number;
    MileageUom: string;
    EngineHours: number;
    EngineHoursUom: string;
    IsMileage: boolean;
    IsEngineHours: boolean;
    VehicleGuid: string;
    VehicleIdentificationNumber?: string;
    LaborValueType?: string;
    LaborCatalog?: string;
    CustomerPhoneNumber1?: string;
    CustomerPhoneNumber2?: string;
    CustomerFaxNumber: string;
    Email: string;
    OrderTypeDescription?: string;
    LongText?: string;
    _OrderJob?: TJobEntity[];
};
export type TJobEntity = {
    OrderID: string;
    JobNo: string;
    Description1: string;
    JobType: string;
    LongText: string;
    CauseCode?: string;
    DefectCode?: string;
    SymptomCode?: string;
    ApprovalStatus?: string;
    EXECUTE_EVENT?: boolean;
    ATTACHMENT_COUNT?: number;
};
export type TItemEntity = {
    OrderID: string;
    ItemNo: string;
    ItemCategory: string;
    ItemObjectID: string;
    LongDescription: string;
    PackageID: string;
    PackageName: string;
    Quantity: string;
    QuantityUoM: string;
    JobNo?: string;
    Description1?: string;
};
export type TMechOrder = {
    Person: string;
    OrderId: string;
    Selected: boolean;
};
export type TMechOrderOut = {
    person: string;
    orderId: string;
    jobId: string;
    selected: boolean;
    lockingOrder: string;
};
export type TNotificationEntity = {
    event: string;
    eventDescription: string;
    orderLevel: string;
    expanded: boolean;
    defaultMessage: string;
};
export type TTicButtonData = {
    enabled: boolean;
    userPersonal: TPersonalEntity;
    ticEvent: TEventsEntity;
    order: TAvailableOrderEntity;
};
export type TMainConfig = {
    DefItemCategory: string;
    DefaultJobTextId: string;
    PauseEvent: string;
    FilterVM: boolean;
    ImageUrl: string;
    SpeechRecognitionEnabled: boolean;
};
export type TExtNavigation = {
    NavigationId: string;
    Description: string;
    NewWindow: boolean;
    Url: string;
    Icon?: string;
};
export type TApproveJobs = {
    Selected?: boolean;
    AttachmentNo?: string;
    Job: TJobEntity;
    State?: ValueState;
};
export type TCheckListRootOut = {
    root: TCheckListRoot;
};
export type TCheckListRoot = {
    generalStatus: string;
    types: TCheckListType[];
    valueHelps: TValueHelps;
};
export type TCheckListType = {
    listTypeId: string;
    listTypeDescr: string;
    listTypeIcon: string;
    listTypeComplete: number;
    listTypeCatDescr: string;
    isConfirmed: boolean;
    lists: TCheckList[];
};
export type TCheckList = {
    listId: string;
    listDescr: string;
    listComplete: number;
    listTypeId: string;
    listTypeDescr: string;
    listTypeComplete: number;
    isConfirmed: boolean;
    category: string;
    categoryDescr: string;
    tiresInfo: TTiresInfo;
    items: TCheckItem[];
};
export type TTiresInfo = {
    wheelSetupId: string;
    wheelSetupDescr: string;
    axles: TAxle[];
};
export type TAxle = {
    axleId: string;
    axleDescr: string;
    tires: TTire[];
};
export type TTire = {
    axleId: string;
    axleDescr: string;
    tireId: string;
    brand: string;
    type: string;
    dimension: TDimension;
    condition: TCondition;
    conditionLimits: TConditionLimits;
    isConfirmed: boolean;
};
export type TDimension = {
    width: number;
    section: number;
    diameter: number;
    loadCapacity: number;
    speedIndex: string;
    dimensionComplex: string;
};
export type TCondition = {
    innerDepth: number;
    middleDepth: number;
    outerDepth: number;
    depthUom: string;
    pressure: number;
    pressureUom: string;
};
export type TConditionLimits = {
    treadMax: number;
    treadFactor: number;
    treadCaution: number;
    treadWarning: number;
    treadUom: string;
    pressureMax: number;
    pressureFactor: number;
    pressureCaution: number;
    pressureWarning: number;
    pressureUom: string;
};
export type TValueHelps = {
    brandVh: TBrandVh[];
    typeVh: TTypeVh[];
    widthVh: TWidthVh[];
    sectionVh: TSectionVh[];
    diameterVh: TDiameterVh[];
    loadCapacityVh: TLoadCapacityVh[];
    speedIndexVh: TSpeedIndexVh[];
};
export type TBrandVh = {
    tireBrand: string;
    tireBrandDescr: string;
};
export type TTypeVh = {
    wheelTypeCode: string;
    wheelTypeDesc: string;
};
export type TWidthVh = {
    value: number;
};
export type TSectionVh = {
    value: number;
};
export type TDiameterVh = {
    value: number;
};
export type TLoadCapacityVh = {
    value: number;
};
export type TSpeedIndexVh = {
    speedIndex: string;
};
export type TCheckItem = {
    checkItemId: string;
    checkItemDescr: string;
    checkItemStatus: number;
    tireId: string;
    repairCode: string;
    repairCodeDescr: string;
    isChanged: boolean;
    currentValue: number;
    currentValueUom: string;
    measure: TMeasure;
    measureType: string;
    itemComplete: number;
    isMandatory: boolean;
    jobId: string;
    jobType: string;
    isConfirmed: boolean;
    attachmentsBoKey: string;
    attachmentsCount: number;
    repairCodes: TRepairCode[];
    longText: string;
    longTextId: string;
};
export type TMeasure = {
    calcType: string;
    rangeMin: number;
    rangeMax: number;
    factor: number;
    caution: number;
    warning: number;
    uom: string;
};
export type TRepairCode = {
    repairCode: string;
    repairCodeDescr: string;
    packageId: string;
    selected: boolean;
};
