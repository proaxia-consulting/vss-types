export type TEquipmentKey = {
    Equipment: string;
};
export type TEquipmentEntity = {
    Equipment: string;
    EquipmentName?: string;
    Product?: string;
    ProductDescription?: string;
    ProductLine: string;
    ProductLineText: string;
    ProductGroup: string;
    ProductGroupText: string;
    ProductSubGroup: string;
    ProductSubGroupText: string;
    IsRental?: boolean;
    IsRentalCriticality?: number;
    HasHierarchyChldCriticality: number;
    SuperordinateEquipment?: string;
};
export type TEquipmentHierarchyItem = TEquipmentEntity & {
    items: TEquipmentHierarchyItem[];
};
