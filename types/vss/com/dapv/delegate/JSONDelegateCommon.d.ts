import Icon from "sap/ui/core/Icon";
import { PropertyInfo } from "sap/ui/mdc/FilterBar";
import { TablePropertyInfo } from "sap/ui/mdc/Table";
import ObjectStatus from "sap/m/ObjectStatus";
import StackedBarMicroChart from "sap/suite/ui/microchart/StackedBarMicroChart";
import Button from "sap/m/Button";
import Text from "sap/m/Text";
import ResponsiveColumnSettings from "sap/ui/mdc/table/ResponsiveColumnSettings";
import Link from "sap/m/Link";
export declare function getMainTableExtendedSettings(): {
    path: string;
    settings: ResponsiveColumnSettings;
}[];
export declare function getMainTableControls(): ({
    path: string;
    control: Link;
} | {
    path: string;
    control: Icon;
} | {
    path: string;
    control: ObjectStatus;
} | {
    path: string;
    control: StackedBarMicroChart;
} | {
    path: string;
    control: Button;
} | {
    path: string;
    control: Text;
})[];
export declare function getMainTablePropertyInfo(): PropertyInfo[] | TablePropertyInfo[];
export declare function getMainPropertyInfo(): PropertyInfo[] | TablePropertyInfo[];
export declare function getPropertyInfo(): PropertyInfo[] | TablePropertyInfo[];
