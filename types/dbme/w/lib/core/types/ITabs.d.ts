import type IconTabBar from "sap/m/IconTabBar";
import type IconTabFilter from "sap/m/IconTabFilter";
export type IconTabFilterBar = {
    getItems(): IconTabFilter[];
} & IconTabBar;
