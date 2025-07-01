import Order from "../controller/Order.controller";
import { BorType, CounterType, ItemType } from "../model/Enums";
import { TCheckList, TCheckListRootOut, TMechOrderOut, TOrderEntity } from "../types/Entity";
export type TPerson = {
    Person: string;
    Selected?: boolean;
    JobId?: string;
};
export type THeaderIn = {
    TestDrive?: boolean;
    Mileage?: number;
    MileageUom?: string;
    EngineHours?: number;
    EngineHoursUom?: string;
    MeasurePoints?: TMeasurePoint[];
};
export type TJobIn = {
    JobNo: string;
    Description1?: string;
    JobType?: string;
    LongText?: string;
    DefectCode?: string;
    CauseCode?: string;
    SymptomCode?: string;
    Event?: string;
    Delete?: boolean;
};
export type TItemIn = {
    JobNo?: string;
    ItemNo: string;
    ItemCategory?: string;
    Description?: string;
    Type?: ItemType;
    ObjectKey?: string;
    Quantity?: string;
    QuantityUom?: string;
    Delete?: boolean;
    CatalogId?: string;
};
export type TRecallIn = {
    RecallNo: string;
};
export type TNotificationIn = {
    JobNo: string;
    Event: string;
    Text: string;
    Attachment: TAttachmentList[];
};
type TAttachmentIn = {
    IvObjectKey: string;
    IvObjectType: string;
};
export type TCounterIn = {
    IvVguid: string;
};
export type TMeasurePointsIn = {
    IvOrder: string;
};
export type TCounter = {
    defaultMileage: boolean;
    engineHoursActive: boolean;
    engineHoursType: CounterType;
    engineHoursUomDef: string;
    mileageActive: boolean;
    mileageType: CounterType;
    mileageUomDef: string;
};
export type TCounterOut = {
    esCounters: TCounter;
};
export type TMeasurePoint = {
    measurePoint: string;
    description: string;
    value: string;
    unit: string;
};
export type TMeasurePointsOut = {
    etMeasurePoints: TMeasurePoint[];
};
export type TAttachmentList = {
    applicationId: string;
    arObject: string;
    archivId: string;
    assignUnassignCode: string;
    attachmentContent: string;
    attachmentStatus: string;
    attachmentUrl: string;
    createdat: string;
    createdby: string;
    createdbyFullname: string;
    deletionIndicator: string;
    documentnumber: string;
    documentpart: string;
    documenttype: string;
    documentversion: string;
    fileId: string;
    fileTransferNotCompleted: string;
    filename: string;
    filesize: number;
    isCheckedin: string;
    length: number;
    loioClass: string;
    mandt: string;
    mimetype: string;
    newAttachmentInd: string;
    objectkey: string;
    objecttype: string;
    objecttypeLong: string;
    phioClass: string;
    renamedIndicator: string;
    selected: boolean;
    storageCat: string;
    url: string;
    wsapplication: string;
};
export type TAttachmentOut = {
    etList: TAttachmentList[];
    etMessages: any[];
};
export type TMaterialCheckIn = {
    ivMaterial: string;
    ivPlant: string;
};
export type TMaterialCheckOut = {
    evAvailableQuantity: float;
};
type TAttachmentCountOut = {
    count: number;
};
type TCallParamsOut = void;
/**
 * @namespace vss.com.dama.service
 */
export default class actionCommandService {
    private _OrderCtrl;
    private static _team;
    constructor(_OrderCtrl: Order);
    get headerData(): TOrderEntity;
    updateJob(job: TJobIn): Promise<TCallParamsOut>;
    executeEvent(job?: TJobIn, job_req?: TJobIn[]): Promise<TCallParamsOut>;
    updateHeader(header: THeaderIn): Promise<TCallParamsOut>;
    sendJobNotification(notification: TNotificationIn): Promise<TCallParamsOut>;
    createRecalls(Recalls: TRecallIn[]): Promise<TCallParamsOut>;
    createOrderItem(Item: TItemIn): Promise<TCallParamsOut>;
    deleteOrderItem(ItemNo: string): Promise<TCallParamsOut>;
    getAttachmentList(input: TAttachmentIn): Promise<TAttachmentOut>;
    getCounters(vehicleGuid: string): Promise<TCounterOut>;
    getMeasurePoints(orderID: string): Promise<TMeasurePointsOut>;
    checkMaterialAvailibility(MaterialNo: string): Promise<TMaterialCheckOut>;
    updatePersonOrderAssignment(contextOrder: string, persons: TPerson[]): Promise<TCallParamsOut>;
    deletePersonOrderAssignment(contextOrder: string): Promise<TCallParamsOut>;
    static getPersonOrderAssignment(contextOrder: string, persons: TPerson[], selected?: boolean): Promise<TMechOrderOut[]>;
    getVhcList(): Promise<TCheckListRootOut>;
    updateVhcList(checkLists: TCheckList[]): Promise<TCheckListRootOut>;
    getAttachmentCount(borKey: string, borType?: BorType): Promise<TAttachmentCountOut>;
}
export {};
