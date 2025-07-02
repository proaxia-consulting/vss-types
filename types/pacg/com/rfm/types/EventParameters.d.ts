import ListItemBase from "sap/m/ListItemBase";
export type TListSelectionChangeParameters = {
    listItem: ListItemBase;
    listItems: ListItemBase[];
    selected: boolean;
    selectAll: boolean;
};
