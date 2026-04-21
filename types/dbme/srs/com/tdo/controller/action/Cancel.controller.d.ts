import AbstractBase from "dbme/srs/com/tdo/controller/AbstractBase.controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import type Event from "sap/ui/base/Event";
import type { Button$PressEvent } from "sap/m/Button";
/**
 * @namespace dbme.srs.com.tdo.controller.action
 */
export default class Cancel extends AbstractBase {
    private _actionContext?;
    private _actionData?;
    private _batchGroupId;
    private _localModel?;
    private _parentController?;
    onInit(): void;
    onActionExecute(event: Button$PressEvent): void;
    onActionCancel(event: Button$PressEvent): void;
    onFieldChange(event: Event): void;
    private _validate;
    private _getDialog;
    _getJSONModel(): JSONModel;
    /**
     * Override abstract method
     */
    ODataToJSON(): void;
}
