import JSONModel from "sap/ui/model/json/JSONModel";
import { type OutputModeType, type StartingViewType } from "dbme/cmf_rep/Const";
export type ControlModel = {
    report: {
        id: string;
        name: string;
        loaded: boolean;
        output: OutputModeType;
        entityName: string;
        refreshInterval: number;
    };
    reportRun: {
        source: string;
        id: string;
        started: boolean;
    };
    param: {
        startingSelVariant: string;
        startingView: StartingViewType;
    };
    hasNavHistory: boolean;
};
declare const models: {
    createDeviceModel(): JSONModel;
    createControlModel(): JSONModel;
};
/**
 * @namespace dbme.cmf_rep.model
 */
export default models;
