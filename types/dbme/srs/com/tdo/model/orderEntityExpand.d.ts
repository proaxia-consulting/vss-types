import type { IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
export declare const OrderEntityExpand: {
    readonly Actions: "ActionsNav";
    readonly Agreement: "AgreementNav";
    readonly Attachment: "AttachmentNav";
    readonly CommChannel: "CommChannelNav";
    readonly Demands: "DemandsNav";
    readonly History: "HistoryNav";
    readonly Location: "LocationNav";
    readonly Parameter: "ParameterNav";
    readonly Note: "NoteNav";
};
export declare function orderEntityExpand(this: IOrderAwareController): string;
