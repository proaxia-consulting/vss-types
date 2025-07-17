import Event from "sap/ui/base/Event";
import { DialogMode, FragmentId } from "../../model/Enums";
import { TJobIn } from "../../service/actionCommandService";
import Order from "../../controller/Order.controller";
import { IDialog } from "../../types/ControllerInterface";
import BaseDialog from "../BaseDialog";
import { SpeechRecorder$Error, SpeechRecorder$RecordingFinished, SpeechRecorder$Result } from "dbme/c/control/speech/SpeechRecorder";
export interface IActionHandler {
    onSave(event: Event): void;
}
export default class JobDetails extends BaseDialog implements IDialog {
    protected _orderCtrl: Order;
    protected fragmentId: FragmentId;
    _jobEntity: TJobIn;
    constructor(_orderCtrl: Order, fragmentId: FragmentId);
    setBeforeLoad(event: Event, dialogMode: DialogMode): void;
    setAfterLoad(event: Event, dialogMode?: DialogMode): void;
    static onSave(this: JobDetails, event: Event): void;
    static onClose(this: JobDetails, event: Event): void;
    static onRecordStart(this: JobDetails): void;
    static onRecordEnd(this: JobDetails, event: SpeechRecorder$RecordingFinished): void;
    static onResult(this: JobDetails, event: SpeechRecorder$Result): void;
    static onError(this: JobDetails, event: SpeechRecorder$Error): void;
    getSpeechRecognitionEnabled(): Promise<boolean>;
}
