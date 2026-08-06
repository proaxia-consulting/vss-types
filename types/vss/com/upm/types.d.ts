export type TDialogItem = {
    DialogItemID: string;
    ItemText: string;
};
export type TRejectionReasonEntity = {
    UpsellingType: string;
    RejectionReason: string;
    RejectionReasonDescription: string;
};
export type TOperationParameters = {
    DialogID?: string;
    DialogItemSelectedIndex?: number;
    DialogItemID?: string;
};
export type TOperationResult = {
    RedirectURL?: string;
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
export type TActionBaseParams = {
    PersonType?: string;
    UserID?: string;
    EmployeeNo?: string;
    RejectionReason?: string;
};
export type TActionParameters = TActionBaseParams & {
    Remarks?: string;
};
export type TActionResult = {
    RedirectURL?: string;
};
export type TActionEntity = {
    ActionID: string;
    Caption: string;
    Description: string;
    InfoMessage: string;
    WithDialog: boolean;
    AcceptsComment: boolean;
    AcceptsAcceptedBy: boolean;
    AcceptsRejectionReason: boolean;
    IsEnabled: boolean;
    IsSuggested: boolean;
    UpsellingType: string;
    RejectionReasons?: TRejectionReasonEntity[];
    HasError: boolean;
} & TActionBaseParams;
