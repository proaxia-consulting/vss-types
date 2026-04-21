import type { SpeechRecorder$RecordingFinished, SpeechRecorder$RecordingStarted, SpeechRecorder$Result } from "dbme/c/control/speech/SpeechRecorder";
import type { Button$PressEvent } from "sap/m/Button";
import type { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
import type { Slider$ChangeEvent } from "sap/m/Slider";
import type Controller from "sap/ui/core/mvc/Controller";
import type { Input$ChangeEvent } from "sap/ui/webc/main/Input";
import type OrderController from "vss/com/dama/controller/Order.controller";
/**
 * @namespace vss.com.dama.eh
 */
export default class VehicleCheckEventHandler {
    static onRangeStatus(this: OrderController, event: Button$PressEvent): void;
    static onSliderChanged(this: OrderController, event: Slider$ChangeEvent): void;
    static onRepairCodePress(this: OrderController, event: Button$PressEvent): void;
    static onStepInputChange(this: OrderController, event: Input$ChangeEvent): void;
    static onConditionStatus(this: OrderController, event: Button$PressEvent): void;
    static onSelectListType(this: OrderController, event: IconTabBar$SelectEvent): void;
    static onCheckItemAttachment(this: OrderController, event: Button$PressEvent): void;
    static onTirePress(this: OrderController, event: Button$PressEvent): void;
    static onApplyAxle(this: OrderController, event: Button$PressEvent): void;
    static onDimensionVh(this: OrderController, event: Input$ChangeEvent): void;
    static onCheckItemLongText(this: OrderController, event: Button$PressEvent): void;
    static onLongTextClose(this: OrderController, event: Button$PressEvent): void;
    static onRecordStart(this: Controller, event: SpeechRecorder$RecordingStarted): void;
    static onRecordEnd(this: Controller, event: SpeechRecorder$RecordingFinished): void;
    static onResult(this: Controller, event: SpeechRecorder$Result): void;
}
