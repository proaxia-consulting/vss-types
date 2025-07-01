import htmlFromTemplate from "dbme/c/print/htmlFromTemplate";
import pdfFromBackend from "dbme/c/print/pdfFromBackend";
import type { TPrintSettings } from "dbme/c/print/printUtils";
export declare const print: typeof pdfFromBackend;
declare const PrintHandler: {
    /** @deprecated Use print function - dbme.c.print.pdfFromBackend */
    print: typeof pdfFromBackend;
    /** @deprecated Use print function - dbme.c.print.htmlFromTemplate */
    printHtml: typeof htmlFromTemplate;
    /** @deprecated Use print function - dbme.c.print.pdfWithRenderer or dbme.c.print.pdfFromString */
    printPdf(urlOrBase64EncodedPdfString: string, templateData?: {}, settings?: TPrintSettings): never;
};
/**
 * @deprecated Use print function - dbme.c.print.pdf*
 *
 * @since 1.0.0
 * @namespace dbme.c.print
 * @global
 */
export default PrintHandler;
