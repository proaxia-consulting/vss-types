import AbstractBase from "dbme/srs/com/tdo/controller/AbstractBase.controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import type Event from "sap/ui/base/Event";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type { Button$PressEvent } from "sap/m/Button";
import type { IFormAware } from "dbme/srs/com/tdo/types/IController";
/**
 * @namespace dbme.srs.com.tdo.controller.action
 */
export default class Replan extends AbstractBase implements IFormAware {
    private _oParentController?;
    private _oLocalJSONModel?;
    private oActionData?;
    onInit(): void;
    private _setPickupAtVisibility;
    _getJSONModel(): JSONModel;
    private _getDialog;
    onBtnDialogOK(oEvent: Button$PressEvent): void;
    onBtnDialogCancel(oEvent: Button$PressEvent): void;
    onFieldChange(oEvent: Event): void;
    private _validate;
    _getForm(): SmartForm;
    /**
     * Override abstract method
     */
    ODataToJSON(): void;
}
