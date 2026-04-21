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
export type TUpsellingItemEntity = {
    UpsellingID: string;
    PublChannelType: string;
    _Operations: TOperationEntity[];
};
export type TUpsellingPartnerEntity = {
    Partner: string;
    BusinessPartnerName?: string;
    _Items?: TUpsellingItemEntity[];
};
