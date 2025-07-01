import SmartReportComponent from "dbme/w/lib/core/SmartReport/SmartReportComponent";
/**
 * @namespace dbme.w.lib.core.vehicle.vrc
 */
export default class Component extends SmartReportComponent {
    static metadata: {
        manifest: string;
        library: string;
    };
    getEntitySet(): string[];
}
