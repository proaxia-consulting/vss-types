/**
 * Isolate differences between UI5 versions
 */
import Messaging from "sap/ui/core/Messaging";
import MessageTypeBase from "sap/ui/core/message/MessageType";
export declare const MessageType: {
    readonly Error: MessageTypeBase.Error;
    readonly Information: MessageTypeBase.Information;
    readonly None: MessageTypeBase.None;
    readonly Success: MessageTypeBase.Success;
    readonly Warning: MessageTypeBase.Warning;
};
export default Messaging;
