import type { SpeechRecorder$Error, SpeechRecorder$RecordingFinished, SpeechRecorder$Result } from "dbme/c/control/speech/SpeechRecorder";
import type Event from "sap/ui/base/Event";
import type Order from "vss/com/dama/controller/Order.controller";
import BaseDialog from "vss/com/dama/eh/BaseDialog";
import type { FragmentId } from "vss/com/dama/model/Enums";
import { DialogMode } from "vss/com/dama/model/Enums";
import type { TJobIn } from "vss/com/dama/service/actionCommandService";
import type { Control$Event, IDialog } from "vss/com/dama/types/ControllerInterface";
export type IActionHandler = {
    onSave(event: Event): void;
};
export default class JobDetails extends BaseDialog implements IDialog {
    protected _orderCtrl: Order;
    protected fragmentId: FragmentId;
    _jobEntity: TJobIn;
    constructor(_orderCtrl: Order, fragmentId: FragmentId);
    setBeforeLoad(event: Control$Event, dialogMode: DialogMode): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode): void;
    static onSave(this: JobDetails, event: Event): void;
    static onClose(this: JobDetails, event: Event): void;
    static onRecordStart(this: JobDetails): void;
    static onRecordEnd(this: JobDetails, event: SpeechRecorder$RecordingFinished): void;
    static onResult(this: JobDetails, event: SpeechRecorder$Result): void;
    static onError(this: JobDetails, event: SpeechRecorder$Error): void;
    getSpeechRecognitionEnabled(): Promise<boolean>;
}
