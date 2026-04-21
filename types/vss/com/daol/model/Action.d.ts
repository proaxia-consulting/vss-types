import type Dialog from "sap/m/Dialog";
import type { ActionNameType, TActionEntity } from "vss/com/daol/model/Enums";
export declare function actionExists(value: string): value is ActionNameType;
export declare function isActionDialog(bindingPath: string, dialog: Dialog): dialog is Dialog;
export declare function assembleActionPath(actionData: TActionEntity, withDots?: boolean): string;
export declare function getActionData(actionName: ActionNameType): TActionEntity;
