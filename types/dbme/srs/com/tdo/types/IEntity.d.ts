import type { DemandEntity } from "dbme/w/lib/core/types/IEntity";
import type { MeasuringPointEntity } from "dbme/srs/com/tdo/measuringPoint/model/IEntity";
export type TUISettings = {
    C_X_ATT_MAX_SIZE: string;
};
export type TCommonError = {
    reason?: string;
    message?: string;
    title?: string;
};
export type TRouteData = {
    name: string;
    pattern: string;
    target: string;
    prefix?: string;
};
/** @deprecated Use Record<string, unknown> instead! */
export type TObject = Record<string, unknown>;
export interface IEntity {
    __metadata?: {
        uri?: string;
        created?: {
            groupId?: string;
        };
    };
}
export interface IEntityNavigation {
    results: IEntity[];
}
export interface IOrderTypeEntity {
    ORDER_TYPE: string;
}
export interface IOrderEntity {
    WPO_DOCNR: string;
    ORDER_TYPE: string;
    WLOHID: string;
    MAKE_CODE: string;
    MODEL_CODE: string;
    MILEAGE: string;
    PREFERRED_COMM: string;
    PARTNER: string;
    CUSTOMER: string;
    USERID: string;
    ALLOCATED_FROM: string;
    ALLOCATED_TO: string;
    PLANNED_FROM_TS?: Date;
    PICKUP_AT_TS?: Date;
    APLAN_MODE?: string;
    REQ_MAX_DUR?: number;
    REQ_MAX_DUR_UOM?: string;
    CommChannelNav?: IEntity[];
    DemandsNav?: DemandEntity[];
    HistoryNav?: IEntity[];
    ParameterNav?: IOrderParameterEntity[];
    AgreementNav?: IEntity[];
    NoteNav?: IEntity[];
    AttachmentNav?: TOrderAttachment[];
    MeasuringPointNav?: MeasuringPointEntity[];
}
export type TOrderAttachment = IEntity & {
    FILENAME: string;
    ATT_URL?: string;
};
export interface ITimeSlotEntity {
    WPO_DOCNR: string;
    TMSLTNO: string;
    START_TIME: string;
    END_TIME: string;
    APARAM_ID: string;
}
export interface IOrderParameterEntity {
    APARAM_ID: string;
    APARAM_DESC: string;
    STATE: boolean;
    PICKUP?: boolean;
    DEFAULT_CHECKED: boolean;
    OBLIGATORY: boolean;
    PLANRL: boolean;
    TimeSlotsNav?: ITimeSlotEntity[];
    DemandsNav?: DemandEntity[];
}
export interface IAllocationProposalData extends IEntity {
    ParametersNav?: IOrderParameterEntity[];
    DemandsNav?: DemandEntity[];
    IntervalsNav?: IEntityNavigation;
    LocationNav?: ILocationEntity[];
    HIERARCHY_ID?: string;
    IGNORE_PLANNING?: boolean;
    VISIT_START_TS?: Date;
    VISIT_END_TS?: Date;
    UI_TEXT?: string;
    UI_TEXT_SHORT?: string;
    UI_TITLE?: string;
    VISIT_DURATION?: number;
    DATA?: string;
    WPO_DOCNR?: string;
}
export interface ILocationEntity {
    HIERARCHY_ID: string;
    SELECTED: boolean;
    APLAN_MODE: string;
    UI_TITLE: string;
}
export type TActionEntity = {
    FUNCTION: string;
    PARAMSTR: string;
    URL: string;
};
export type TStatusEntity = {
    WPSTAT: string;
    DESCR1: string;
    UI5_ICON?: string;
    UI5_COLOR?: string;
    COUNT_ROWS: number;
    HIERARCHY_ID: string;
    ActionsNav: TStatusActionEntity[];
};
export type TStatusActionEntity = {
    WPSTAT: string;
    FUNCTION: string;
    UI5_ICON?: string;
    DESCR1: string;
    WPACTION: string;
    WPO_DOCNR: string;
    SELECTION_MODE: string;
};
export type TMimeTypeEntity = {
    MIMETYPE: string;
};
export type TAgreementEntity = {
    WPO_DOCNR: string;
    HIERARCHY_ID: string;
    AGRMNT_ID: string;
    AGTYP: string;
    AGRMNT_DESC: string;
    OBLIG: boolean;
    SEQUENCE: number;
    STATE: boolean;
    UI5_ICON: string;
    UI5_STATUS: string;
};
export type TVehicleCustomerEntity = {
    ROW_ID?: number;
    VH_OBJ_NUMBER: string;
    PARTNER: string;
    CUSTOMER: string;
    MILEAGE?: number;
    MILEAGE_UOM?: string;
    REG_DATE_D?: Date;
    ORDER_TYPE?: string;
    MAKE_CODE?: string;
    MODEL_CODE?: string;
};
export type TOrderListEntity = {
    WPO_DOCNR: string;
    REF_DOCNR: string;
};
export type TUserEntity = {
    USERID: string;
    EMAIL_ADDR: string;
};
export type TResourceRoleEntity = {
    RESOURCE_ROLE: string;
    RESOURCE_TYPE: string;
};
export type TOrderNoteEntity = {
    CONTENT?: string;
    EDITABLE?: boolean;
};
