export type EditStateItem = {
    StorageLocation: string;
    NewStorageBin: string;
    Quantity: number | null;
    checked: boolean;
};
export type OrderItem = {
    ItemNumber: string | number | symbol;
    StorageLocation: string;
    NewStorageBin: string;
    Quantity: number | null;
};
export type EditState = Record<string, EditStateItem>;
