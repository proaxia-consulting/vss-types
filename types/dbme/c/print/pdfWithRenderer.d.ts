import { type TPrintSettings } from "dbme/c/print/printUtils";
interface IPdf {
    print(): void;
}
/**
 * Fallback interface for pdfMake @link https://pdfmake.github.io/docs/
 */
interface IPdfRenderer {
    createPdf(source: object): IPdf;
}
/**
 * Usage with pdfMake:
 *
 * import * as pdfMake from "pdfmake/build/pdfmake";
 * import * as pdfFonts from 'pdfmake/build/vfs_fonts';
 * (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
 *
 * Pass pdfMake into pdfRenderer parameter
 */
export default function pdfWithRenderer(lodashTemplateForRendererUrl: string, oData: {}, pdfRenderer: IPdfRenderer, settings?: TPrintSettings): Promise<void>;
export {};
