import type { Button$PressEvent } from "sap/m/Button";
import type { IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
import type { TOrderNoteEntity } from "dbme/srs/com/tdo/types/IEntity";
declare const NotesList: {
    getNotesList(this: IOrderAwareController, bRecalc?: boolean): Promise<import("sap/m/ListBase").default>;
    reloadFilters(this: IOrderAwareController, oDefaults?: TOrderNoteEntity): void;
    onOrderNoteActionPressed(this: IOrderAwareController, oEvent: Button$PressEvent): void;
    onBtnFormNoteCancel(this: IOrderAwareController, event: Button$PressEvent): void;
    onBtnFormNoteOK(event: Button$PressEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default NotesList;
