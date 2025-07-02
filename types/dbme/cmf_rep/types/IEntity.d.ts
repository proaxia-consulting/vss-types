import { type OutputModeType } from "../Const";
export type ReportFieldEntity = {
    REPORTID: string;
    FIELDNAME: string;
    FCOLOR: string;
};
export type ReportIDEntity = {
    REPORTID: string;
    OUTPUT_TYPE: OutputModeType;
    ENTITY_NAME: string;
    REFRESH_INT: int;
    REPORT_NAME: string;
    SERVICE_URL: string;
    FieldNav?: ReportFieldEntity[];
};
