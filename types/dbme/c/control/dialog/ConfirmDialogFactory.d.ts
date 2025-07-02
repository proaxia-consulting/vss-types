import Dialog from "sap/m/Dialog";
export type ConfirmDialogFunction = (this: object, ...args: unknown[]) => void;
declare const ConfirmDialogFactory: {
    create(this: object, fnOnConfirmButtonPress: ConfirmDialogFunction, args?: unknown[]): Dialog;
};
/**
 * @name dbme.c.control.dialog
 */
export default ConfirmDialogFactory;
