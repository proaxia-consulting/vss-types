import type Controller from "sap/ui/core/mvc/Controller";
export type TPrintEntity = {
    AUTO_PRINT: boolean;
    TITLE: string;
    TYPE: string;
    AREA: string;
    OBJECT: string;
    PRID: string;
    OBJKEY: string;
    PRNKEY: string;
};
export type TPrintContentEntity = TPrintEntity & {
    CONTENT: string;
};
/**
 * Entities of Printouts OData Services
 */
export declare enum Entity {
    PrintList = "PrintGetIDs",
    PrintData = "PrintGetPDF"
}
/**
 * Supported printout types
 */
export declare enum PrintoutType {
    BackendPdf = "BPDF",
    BackendPdfNoSapMessaging = "B1",
    BackendPdfSapMessaging = "B2",
    FrontendPdf = "FPDF",
    FrontendHtml = "FHTM"
}
/**
 * Trigger the printout from backend using /sap/opu/odata/DBME/CMP_MAIN OData V2 service
 *
 * @param {String} sArea	Printout Area; DBM|E Application, for ex. SRS, VGM
 * @param {String} sObject	Printout Object; UI5 application component's name
 * @param {String} sObjKey	Object key; Business object ID
 * @param {sap.ui.core.mvc.Controller} ctrl 	App. controller
 */
export default function pdfFromBackend(sArea: string, sObject: string, sObjKey: string, ctrl?: Controller): Promise<void>;
