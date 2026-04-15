import StackedBarMicroChartBar from "sap/suite/ui/microchart/StackedBarMicroChartBar";
import type { AvailabilityBarProperty, AvailabilityBarStatus } from "vss/com/dapv/entities/Types";
export declare function getParts(sStatus: AvailabilityBarStatus, sProperty: AvailabilityBarProperty): ({
    path: string;
    targetType: string;
    value?: undefined;
} | {
    value: AvailabilityBarStatus;
    path?: undefined;
    targetType?: undefined;
} | {
    value: AvailabilityBarProperty;
    path?: undefined;
    targetType?: undefined;
})[];
export declare function getStackedBarMicroChart(sStatus: AvailabilityBarStatus): StackedBarMicroChartBar;
