export type Item = {
    ItemNumber: string;
    NewStorageBin: string;
    Quantity: number | null;
    PurchaseOrderNumber: string;
    Plant: string;
    DeliveryNumber: string;
    MaterialNumber: string;
    MaterialDescription: string;
    StorageLocation: string;
    StorageBin: string;
    OpenQuantity: number;
    UoM: string;
    Batch: string;
    VSSOrderNumber: string;
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
    ButtonVisible: boolean;
    MaterialMasterUpdate: boolean;
    ProposeQuantity: boolean;
};
