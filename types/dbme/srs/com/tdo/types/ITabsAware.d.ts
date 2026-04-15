import type { ScreenEntity, ScreenSectionEntity } from "dbme/w/lib/core/types/IEntity";
import type IconTabBar from "sap/m/IconTabBar";
import type IconTabFilter from "sap/m/IconTabFilter";
import type Control from "sap/ui/core/Control";
import type { TabKey } from "dbme/srs/com/tdo/model/Enums";
type TSectionFactory = (oSectionData?: object) => Promise<Control> | Control;
export type IScreenSection = ScreenSectionEntity & {
    sectionFactory?: TSectionFactory;
};
export type IScreen = ScreenEntity & {
    Items: IScreenSection[];
};
export type SerializedTabsType = Record<TabKey | string, IconTabFilter>;
export type ITabsAware = {
    serializeTabs(): SerializedTabsType;
};
export type IIconTabBar = {
    getItems(): IconTabFilter[];
} & IconTabBar;
export {};
