import Dialog from "sap/m/Dialog";
type TMessageDialogSettings = {
    title: string;
    html: string;
};
declare const MessageDialog: {
    error(settings: TMessageDialogSettings): Dialog;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default MessageDialog;
