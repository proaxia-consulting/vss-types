import SmartReportComponent from "dbme/w/lib/core/SmartReport/SmartReportComponent";
/**
 * @namespace dbme.srs.com.vdj
 */
export default class Component extends SmartReportComponent {
    static metadata: {
        manifest: string;
        interfaces: string[];
    };
    getEntitySet(): string[];
}
