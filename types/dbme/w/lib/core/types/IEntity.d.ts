import type { ActionType, UxfcType } from "dbme/w/lib/core/model/Enums";
import type { IntervalTypeType, PlanningModeType } from "dbme/w/lib/core/calendar/Enums";
import type { CSSSize } from "sap/ui/core/library";
export type TUnknownEntity = {
    [key: string]: unknown;
};
export type HierarchyAssignmentEntity = {
    UNAME: string;
    SEQNO: number;
    HIERARCHY_ID: string;
    HIERARCHY_NAME: string;
    HIERARCHY_DEFAULT: boolean;
    WEEK_FIRST_DAY: number;
    DEF_MILEAGE_UOM: string;
};
/**
 * @deprecated Use HierarchyAssignmentEntity instead!
 */
export type UserHierarchyAsgnEntity = HierarchyAssignmentEntity;
export type UIAppSettingsEntity = {
    SETTING_IS_GROUP: boolean;
    SETTING_TYPE: string;
    SETTING_TECH_NAME: string;
    SETTING_VALUE: string;
    SETTING_FLAG: boolean;
};
export type ResourceEntity = {
    RESOURCE_ID: string;
    RESOURCE_TYPE: string;
    DISPLAY_WPO_DOCNR?: string;
    DISPLAY_CHARDT_FROM?: string;
    DISPLAY_CHARDT_TO?: string;
    DESCR1?: string;
    AvatarNav?: ResourceAvatarEntity;
};
export type ResourceAvatarEntity = {
    RESOURCE_ID: string;
    AVATAR_URL: string;
    FILENAME: string;
    MIMETYPE: string;
    CONTENT_BASE64?: string;
};
export type AppEntity = {
    ID: string;
    UI5_APP: string;
    URL: string;
    ICON: string;
    TITLE: string;
    DESCR: string;
    ACTIVE: boolean;
    MENU: boolean;
    NEW_TAB: boolean;
};
export type AbsenceTypeEntity = {
    ABSENCE_TYPE: string;
    DESCR1: string;
    ALL_DAY: boolean;
};
export type IntervalTypeEntity = {
    UI_APPLICATION: string;
    INTERVAL_TYPE: string;
    EDITABLE: boolean;
    DESCR1: string;
};
export type ReservationTypeEntity = {
    RESERVATION_TYPE: string;
    DESCR1: string;
    ALL_DAY: boolean;
    AC_PROC: number;
};
export type ResourceRoleEntity = {
    RESOURCE_ROLE: string;
    RESOURCE_TYPE: string;
    DESCR1: string;
    ICON: string;
    UI5_ICON: string;
    DEF_VALUE: boolean;
    UXFC_AC_PROC: UxfcType;
};
export type ResourceStatusEntity = {
    RESOURCE_ID: string;
    AVB_DATA_OUTDATED: boolean;
};
export type IntervalEntity = {
    INTERVAL_ID?: string;
    INTERVAL_TYPE: IntervalTypeType;
    MODEL_ID?: string;
    AC_PROC?: number;
    ABSENCE_TYPE: string;
    RESERVATION_TYPE: string;
    ACTION: ActionType;
    PLANNING_MODE: PlanningModeType;
    REQAL_CHARDT_FROM?: string;
    REQAL_CHARDT_TO?: string;
    VALID_FROM_TS: Date;
    VALID_TO_TS: Date;
    VALID_FROM_DATE?: Date;
    VALID_TO_DATE?: Date;
    CHARDT_FROM?: string;
    CHARDT_TO?: string;
    DEMAND_ID?: string;
    DEMAND_TYPE?: string;
    RESOURCE_ID: string;
    NEW_RESOURCE_ID?: string;
    RESOURCE_TYPE?: string;
    RESOURCE_ROLE?: string;
    RESOURCE_GROUP?: boolean;
    ORDER_TYPE?: string;
    WPO_DOCNR?: string;
    TITLE?: string;
    TEXT: string;
    TEXT_HEADER: string;
    TEXT_SHORT: string;
    DESCR_LTEXT?: string;
    TOOLTIP: string;
    UI5_EDITABLE: boolean;
};
export type CalendarViewEntity = {
    CAL_VIEW: string;
    DEFAULT_VIEW: boolean;
};
export type DemandEntity = {
    DEMAND_ID: string;
    DEMAND_DESC?: string;
    DEMAND_TYPE: string;
    DEMAND_TYPE_DESC?: string;
    DEPARTMENT?: string;
    DEPARTMENT_DESC?: string;
    WPO_DOCNR: string;
    WPO_POSNR?: string;
    WLOHID?: string;
    DURATION_WORKV?: number;
    DURATION_WORKU?: string;
    PRICE?: float;
    PRICE_CURR?: string;
    RESOURCE_ID_PREF?: string;
    ALLOCATED?: boolean;
    CANCELLED?: boolean;
    LBRVAL_ID?: string;
    LBRVAL_OR?: string;
    LBRVAL_PATH?: string;
    PARAM_ID?: string;
    ALLOC_DATE_FROM: Date;
    ALLOC_DATE_TO: Date;
    REQAL_DATE_FROM?: Date;
    REQAL_DATE_TO?: Date;
    REQAL_CHARDT_FROM?: string;
    REQAL_CHARDT_TO?: string;
    REQAL_START_M?: boolean;
    REQAL_END_M?: boolean;
    WRK_DEFERRED?: boolean;
    REMARKS_TEXT?: string;
    TEXT?: string;
    UXFC_DEMAND_DESC?: UxfcType;
    UXFC_DEMAND_TYPE?: UxfcType;
    UXFC?: UxfcType;
    UXFC_REQAL_DATE?: UxfcType;
    UXFC_DURATION?: UxfcType;
    UXFC_DEPARTMENT?: UxfcType;
};
export type ScreenEntity = {
    SCRNUM: string;
    SCRNUM_DESC: string;
    UI_ICON: string;
    UI_COLOR: string;
    COUNTABLE: boolean;
    COUNT_VALUE: number;
    ORDER_TYPE: string;
    FOR_EDIT?: boolean;
    ENABLED: boolean;
    SectionNav?: ScreenSectionEntity[];
};
export type ScreenSectionEntity = {
    SECTION_NO?: string;
    SECTION_TYPE?: string;
    SCRNUM?: string;
    SECTION_HEIGHT?: CSSSize;
    SECTION_URL?: string;
    SECTION_NAME?: string;
    FieldsNav?: ScreenFieldEntity[];
};
export type ScreenFieldEntity = {
    SCREEN_AREA: string;
    FIELD_NAME: string;
    FIELD_NAME_DESC: string;
    FIELD_STATUS: string;
    CAPPL: string;
    ORDER_TYPE: string;
};
export type TimeStepEntity = {
    HIERARCHY_ID: string;
    VISIT_TIME_RES: number;
};
export type WorkingHoursEntity = {
    HIERARCHY_ID: string;
    VISIT_START: Date;
};
export type AllocationFieldFilterEntity = {
    DEMAND_TYPE: string;
    RESOURCE_ROLE: string;
    TO_DEMAND_TYPE: string;
    TO_RESOURCE_ROLE: string;
};
