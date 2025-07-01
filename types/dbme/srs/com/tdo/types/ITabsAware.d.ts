import type IconTabFilter from "sap/m/IconTabFilter";
import type Control from "sap/ui/core/Control";
import { TabKey } from "dbme/srs/com/tdo/model/Enums";
import type { ScreenEntity, ScreenSectionEntity } from "dbme/w/lib/core/types/IEntity";
import type IconTabBar from "sap/m/IconTabBar";
type TSectionFactory = (oSectionData?: object) => Promise<Control> | Control;
export type IScreenSection = ScreenSectionEntity & {
    sectionFactory?: TSectionFactory;
};
export type IScreen = ScreenEntity & {
    Items: IScreenSection[];
};
export type SerializedTabsType = {
    [key in TabKey | string]: IconTabFilter;
};
export interface ITabsAware {
    serializeTabs(): SerializedTabsType;
}
export interface IIconTabBar extends IconTabBar {
    getItems(): IconTabFilter[];
}
export {};
