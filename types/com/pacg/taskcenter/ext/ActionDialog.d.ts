import type { Button$PressEvent } from "sap/m/Button";
import type Event from "sap/ui/base/Event";
import ManagedObject from "sap/ui/base/ManagedObject";
import type View from "sap/ui/core/mvc/View";
import type Context from "sap/ui/model/odata/v4/Context";
export type TActionDialogOptions = {
    ActionName: string;
    AcceptsComment?: boolean;
    AcceptsAttachments?: boolean;
};
export type TActionDialogResult = {
    Comment?: string;
    SelectedAttachmentId?: string[];
};
/**
 * @namespace com.pacg.taskcenter.ext
 */
export default class ActionDialog extends ManagedObject {
    static open(options: TActionDialogOptions, view: View, context?: Context): Promise<TActionDialogResult>;
    private static initialize;
    private constructor();
    private setView;
    private getActionModel;
    private getAttachmentList;
    private openDialog;
    onConfirm(event: Button$PressEvent): void;
    onCancel(event: Button$PressEvent): void;
    onAttachmentValueHelp(): void;
    onSelectAllAttButton(): void;
    onUnselectAllAttButton(): void;
    onBeforeActionDialogOpen(): void;
    onAttachmentTokenUpdate(event: Event): void;
    onAfterAttSelDialogOpen(): void;
    private getAttSelUploadSet;
    private getAttSelMultiInput;
    private static _instance;
    private _view;
    private _dialogPromise;
    private _attSelDialogPromise;
}
