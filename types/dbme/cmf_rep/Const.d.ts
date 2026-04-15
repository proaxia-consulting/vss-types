export declare const OutputMode: {
    readonly universal: "";
    readonly chartOnly: "C";
    readonly tableOnly: "T";
};
export type OutputModeType = (typeof OutputMode)[keyof typeof OutputMode];
export declare const StartingView: {
    readonly table: "table";
    readonly chart: "chart";
};
export type StartingViewType = (typeof StartingView)[keyof typeof StartingView];
export declare const EntitySet: {
    readonly ReportID: "ReportIDSet";
};
export type EntitySetType = (typeof EntitySet)[keyof typeof EntitySet];
export declare const Const: {
    readonly msg: {
        readonly title: "appTitle";
        readonly oDataError: "oDataError";
        readonly reportNotLoaded: "reportNotLoaded";
        readonly reportInProgress: "reportInProgress";
        readonly reportInProgressCancel: "reportInProgressCancel";
        readonly reportInProgressWait: "reportInProgressWait";
    };
    readonly urlParam: {
        readonly reportID: "reportId";
        readonly selectionVariant: "selVar";
        readonly view: "view";
    };
    readonly httpHeader: {
        readonly reportId: "dbme-cmp-report-id";
        readonly reportRunId: "dbme-cmp-report-runid";
    };
    readonly tableCellStylePrefix: "dbmeCmpColumn";
};
/**
 * @namespace dbme.cmf_rep
 */
export default Const;
/**
 * @deprecated Do not use!
 */
export declare enum ComponentId {
    Reporting = "container-dbme.cmf_rep"
}
export declare const ModelName: {
    readonly Control: "ctrl";
    readonly Conf: "conf";
    readonly Device: "device";
    readonly Translate: "i18n";
};
export type ModelNameType = (typeof ModelName)[keyof typeof ModelName];
export declare const ControlId: {
    readonly chart1: "sc1";
    readonly chart2: "sc2";
    readonly chartContainer: "chartContainer";
    readonly iconTabBar: "iconTabBar";
    readonly filter1: "sf1";
    readonly filter2: "sf2";
    readonly mainContainer: "mainContainer";
    readonly tabFilterTable: "tabFilterTable";
    readonly tabFilterChart: "tabFilterChart";
    readonly table1: "st1";
    readonly table2: "st2";
    readonly tableContainer: "tableContainer";
};
export type ControlIdType = (typeof ControlId)[keyof typeof ControlId];
