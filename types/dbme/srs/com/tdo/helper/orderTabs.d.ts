import type Controller from "sap/ui/core/mvc/Controller";
import type { IIconTabBar, SerializedTabsType } from "dbme/srs/com/tdo/types/ITabsAware";
export type { SerializedTabsType };
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default function orderTabs(this: Controller): IIconTabBar;
export declare function serializeTabs(this: Controller, tabsControl?: IIconTabBar): SerializedTabsType;
