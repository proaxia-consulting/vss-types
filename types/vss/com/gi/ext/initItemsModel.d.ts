import type View from "sap/ui/core/mvc/View";
export type Item = {
    VSSOrderNumber: string;
    ItemNumber: string;
    MaterialNumber: string;
    MaterialDescription: string;
    Plant: string;
    PositionType: string;
    StorageLocation: string;
    StorageBin: string;
    OpenQuantity: number;
    Quantity: number;
    UoM: string;
    Batch: string;
};
export type ItemWithLocations = Item & {
    Locations: {
        StorageLocation: string;
        StorageLocationText: string;
        StorageBin: string;
    }[];
};
export type Config = {
    ConfigKey: string;
    ProposeQuantity: boolean;
    CreateDelivery: boolean;
};
export declare const loadCustomData: (view: View) => Promise<void>;
