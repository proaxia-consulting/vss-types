export type TViewGroupEntity = {
    ViewGroupId: string;
    HeaderText: string;
    ViewIcon: string;
};
export type TGlobalSettingsEntity = {
    ViewLayoutId: string;
};
export type TPropertyNavParamEntity = {
    NavParamId: string;
    NavParamValue: string;
};
export type TKeyPropertyEntity = {
    TaskProperty: string;
    Sensitive: boolean;
    PropertyValue: string;
    PropertyValueSensitive?: string;
    PropertyName: string;
    PropertyDescription: string;
};
export type TPanelPropertyEntity = {
    SectionId: string;
    SectionNo: number;
    SequenceNo: number;
    SectionName: string;
    SectionTitle: string;
    TaskProperty: string;
    Sensitive: boolean;
    IsNavigation: boolean;
    PropertyValue: string;
    PropertyValueSensitive?: string;
    PropertyName: string;
    PropertyDescription: string;
    SemanticObject?: string;
    NavAction?: string;
    _NavParam?: TPropertyNavParamEntity[];
};
export type TPropertyEntity = TKeyPropertyEntity | TPanelPropertyEntity;
export type TActionEntity = {
    ItsUid: string;
    TaskId: string;
    ActionId: string;
    ActionName: string;
    IsEnabled: boolean;
    IsPrimary: boolean;
    IsSuggested: boolean;
    IsQuick: boolean;
    AcceptsAttachments: boolean;
    AcceptsComment: boolean;
    SequenceNo: number;
    Status: string;
};
export type TAttachmentEntity = {
    AttachmentId: string;
    CreatedAt: string;
    UserName: string;
    FileName: string;
    AttachmentSize: number;
    AttachmentUrl: string;
    _Mime: {
        FileExtension: string;
        MimeType: string;
    };
};
