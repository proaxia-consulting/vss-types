import type IconTabBar from "sap/m/IconTabBar";
import type IconTabFilter from "sap/m/IconTabFilter";
export interface IconTabFilterBar extends IconTabBar {
    getItems(): IconTabFilter[];
}
