export type StockMaterial = {
    Material: string;
    Plant: string;
    StorageLocation: string;
    Conversion_Factor: number;
    StockMaterial: string;
    StockMaterialSloc: string;
    StockQuantity: string;
    StockBaseUnit: string;
    Qty: string;
    Uom: string;
    CompleteMaterialName: string;
    StockMaterialName: string;
    StorageLocationName: string;
    PlantName: string;
};
export type CompleteWheelMaterial = {
    Material: string;
    Plant: string;
    StorageLocation: string;
    StorageLocationName: string;
    PlantName: string;
    MaterialName: string;
    Maktx: string;
    StockQty: string;
    StockDescription: string;
    Uom: string;
    _StockMaterial: StockMaterial[];
};
export type TransferMaterial = {
    info: {
        plant: string;
        storageLocation: string;
        stockMaterials: string;
        completeWheelMaterial: string;
        qtyToConvert: string;
        orderUnit: string;
    };
};
export type TransferMaterialResult = {
    isConversionSuccessfull: boolean;
    message: string;
};
