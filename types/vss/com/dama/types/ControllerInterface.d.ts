import Dialog from "sap/m/Dialog";
import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import { DialogMode, FragmentId, ItemType, OrderLevel } from "vss/com/dama/model/Enums";
import { TItemIn } from "vss/com/dama/service/actionCommandService";
import { TJobEntity } from "vss/com/dama/types/Entity";
export interface IWindow extends Window {
    webkitSpeechRecognition: any;
    start(): any;
    onstart(): any;
    onresult(event: any): any;
}
export interface IDialog {
    _Dialog: Dialog;
    _UiModel: JSONModel;
    open(event: Event, dialogMode?: DialogMode, level?: OrderLevel): void;
    setItemCtx?(itemType: ItemType, jobCtx: TJobEntity, itemIn?: TItemIn): void;
    loadDialog?(fragmentId: FragmentId): Promise<Dialog>;
    setBeforeLoad?(event: Event, dialogMode?: DialogMode): void;
    getModel?(): void;
}
