import type Dialog from "sap/m/Dialog";
import type FlexBox from "sap/m/FlexBox";
import type { IParentController } from "dbme/c/att/types";
export declare function fragmentId(parentController?: IParentController): string | undefined;
export declare function findMediaContainer(dialog: Dialog): FlexBox;
export declare function handleError(err: unknown, show?: boolean): void;
/**
 * Prepare the file name
 */
export declare function prepareFileName(fileName: string): string;
declare const AttachmentUtil: {
    handleError: typeof handleError;
    prepareFileName: typeof prepareFileName;
};
/**
 * @namespace dbme.c.att
 */
export default AttachmentUtil;
