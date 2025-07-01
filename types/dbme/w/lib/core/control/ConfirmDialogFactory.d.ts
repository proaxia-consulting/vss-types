import Dialog from "sap/m/Dialog";
import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
export type ConfirmDialogFunction = (this: IModelAwareController, ...args: unknown[]) => void;
declare const ConfirmDialogFactory: {
    create(this: IModelAwareController, fnOnConfirmButtonPress: ConfirmDialogFunction, aArguments?: unknown[]): Dialog;
};
/**
 * @name dbme.w.lib.core.control
 */
export default ConfirmDialogFactory;
