import type Dialog from "sap/m/Dialog";
import type Event from "sap/ui/base/Event";
import type Control from "sap/ui/core/Control";
import type Context from "sap/ui/model/Context";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type { DialogMode, FragmentId, ItemType, OrderLevel } from "vss/com/dama/model/Enums";
import type { TItemIn } from "vss/com/dama/service/actionCommandService";
import type { TJobEntity } from "vss/com/dama/types/Entity";
export type Control$EventParameters = Record<string, unknown>;
export type Control$Event = Event<Control$EventParameters, Control>;
export type IWindow = {
    webkitSpeechRecognition: any;
    start(): any;
    onstart(): any;
    onresult(event: any): any;
} & Window;
export type IDialog = {
    _Dialog: Dialog;
    _UiModel: JSONModel;
    open(event: Control$Event, dialogMode?: DialogMode, level?: OrderLevel, context?: Context): void;
    setItemCtx?(itemType: ItemType, jobCtx: TJobEntity, itemIn?: TItemIn): void;
    loadDialog?(fragmentId: FragmentId): Promise<Dialog>;
    setBeforeLoad?(event: Control$Event, dialogMode?: DialogMode): void;
    getModel?(): void;
};
