export type CommunicationConsentEntity = TConsentUUID & {
    HIERARCHY_ID?: string;
    PARTNER?: string;
    CONTROLLER_ID?: string;
    CONTROLLER_TXT?: string;
    PURPOSE?: string;
    PURPOSE_TXT?: string;
    CONSENT_DESC?: string;
    ACTION?: string;
    TRANSIENT?: boolean;
    CommConsentChannelNav?: CommConsentChannelEntity[];
};
type TConsentUUID = {
    CONSENT_UUID?: string;
};
export type CommConsentChannelEntity = TConsentUUID & TCommMethodFields & {
    HIERARCHY_ID?: string;
    PARTNER?: string;
    ACTIVE?: boolean;
};
export type CommMethodEntity = TCommMethodFields;
type TCommMethodFields = {
    METHOD_ID?: string;
    METHOD_TXT?: string;
    METHOD_UI_ICON?: string;
    METHOD_UI_TEXT?: string;
};
export {};
