import Event from "sap/ui/base/Event";
import type OrderController from "vss/com/dama/controller/Order.controller";
import { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
import { Button$PressEvent } from "sap/m/Button";
import { SpeechRecorder$RecordingFinished, SpeechRecorder$Result } from "dbme/c/control/speech/SpeechRecorder";
import Controller from "sap/ui/core/mvc/Controller";
/**
 * @namespace vss.com.dama.eh
 */
export default class VehicleCheckEventHandler {
    static onRangeStatus(this: OrderController, event: Event): void;
    static onSliderChanged(this: OrderController, event: Event): void;
    static onRepairCodePress(this: OrderController, event: Event): void;
    static onStepInputChange(this: OrderController, event: Event): void;
    static onConditionStatus(this: OrderController, event: Button$PressEvent): void;
    static onSelectListType(this: OrderController, event: IconTabBar$SelectEvent): void;
    static onCheckItemAttachment(this: OrderController, event: Event): void;
    static onTirePress(this: OrderController, event: Event): void;
    static onApplyAxle(this: OrderController, event: Event): void;
    static onDimensionVh(this: OrderController, event: Event): void;
    static onCheckItemLongText(this: OrderController, event: Event): void;
    static onLongTextClose(this: OrderController, event: Event): void;
    static onRecordStart(this: Controller, event: Event): void;
    static onRecordEnd(this: Controller, event: SpeechRecorder$RecordingFinished): void;
    static onResult(this: Controller, event: SpeechRecorder$Result): void;
}
