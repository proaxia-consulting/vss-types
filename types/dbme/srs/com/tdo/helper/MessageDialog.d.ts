import Dialog from "sap/m/Dialog";
declare const MessageDialog: {
    error(settings: {
        title: string;
        html: string;
    }): Dialog;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default MessageDialog;
