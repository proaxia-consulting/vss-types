/**
 * Isolate differences between UI5 versions
 */
import { MessageType as MessageTypeBase } from "sap/ui/core/library";
import type Message from "sap/ui/core/message/Message";
export declare const MessageType: {
    readonly Error: MessageTypeBase.Error;
    readonly Information: MessageTypeBase.Information;
    readonly None: MessageTypeBase.None;
    readonly Success: MessageTypeBase.Success;
    readonly Warning: MessageTypeBase.Warning;
};
declare const Messaging: {
    getMessageManager(): import("sap/ui/core/message/MessageManager").default;
    getMessageModel(): import("sap/ui/model/message/MessageModel").default;
    removeMessages(m: Message | Message[]): void;
    removeAllMessages(): void;
};
export default Messaging;
