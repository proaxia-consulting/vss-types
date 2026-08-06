import { EntitySet } from "dbme/w/lib/core/model/Enums";
export { EntitySet };
export declare const ModelName: {
    readonly Agreements: "Agreements";
};
export declare const BindingPath: {
    readonly ConsentNav: "CommunicationConsentNav";
    readonly ConsentSet: "/TDOCommConsentSet";
    readonly CommMethodSet: "TDOCommMethodSet";
    readonly ConsentChannelSet: "/TDOCommConsentChannelSet";
    readonly ConsentChannelNav: "CommConsentChannelNav";
};
export declare const EntityAction: {
    readonly create: "C";
    readonly update: "U";
    readonly delete: "D";
    readonly inactive: "I";
    readonly initial: "";
};
export type EntityActionType = (typeof EntityAction)[keyof typeof EntityAction];
export declare const OrderEntityExpand: {
    readonly CommunicationConsent: "CommunicationConsentNav/CommConsentChannelNav";
    readonly CommunicationChannel: "CommConsentChannelNav";
};
