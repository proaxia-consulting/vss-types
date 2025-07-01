export type TViewGroupEntity = {
    ViewGroupId: string;
    HeaderText: string;
    ViewIcon: string;
};
export type TGlobalSettingsEntity = {
    ViewLayoutId: string;
    CentralOrgActive: boolean;
};
export type TPropertyNavParamEntity = {
    NavParamId: string;
    NavParamValue: string;
};
export type TKeyPropertyEntity = {
    TaskProperty: string;
    PropertyValue: string;
    PropertyName: string;
    PropertyDescription: string;
};
export type TPanelPropertyEntity = TKeyPropertyEntity & {
    SectionId: string;
    SectionNo: number;
    SequenceNo: number;
    SectionName: string;
    SectionTitle: string;
    Sensitive: boolean;
    PropertyValueFormatted: string;
    IsNavigation: boolean;
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
export type TUserOrgData = {
    plant: string;
    plantName: string;
    salesOrganization: string;
    dialogEnabled: boolean;
    orgDataFormatted: string;
    orgDataAssigned: boolean;
};
