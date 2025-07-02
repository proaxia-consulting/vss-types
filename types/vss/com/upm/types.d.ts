export type TDialogItem = {
    DialogItemID: string;
    ItemText: string;
};
export type TOperationEntity = {
    OperationID: string;
    OperationType: string;
    Caption: string;
    InfoMessage: string;
    WithDialog: boolean;
    DialogID: string;
    DialogType: string;
    InquiryMultiSelect: boolean;
    InquirySubmitBtnTitle: string;
    _DialogItems?: TDialogItem[];
    IsEnabled: boolean;
};
export type TOperationParameters = {
    DialogID?: string;
    DialogItemSelectedIndex?: number;
    DialogItemID?: string;
};
export type TActionEntity = {
    ActionID: string;
    Caption: string;
    Description: string;
    InfoMessage: string;
    AcceptsComment: boolean;
    AcceptsAcceptedBy: boolean;
    IsEnabled: boolean;
};
export type TActionParameters = {
    PersonType?: string;
    UserID?: string;
    EmployeeNo?: string;
    Remarks?: string;
};
