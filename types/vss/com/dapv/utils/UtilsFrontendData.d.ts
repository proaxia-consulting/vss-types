import type { ValueState } from "sap/ui/core/library";
import type { AvailabilityBarStatus } from "vss/com/dapv/entities/Types";
export type OrderOverviewHeader = {
    OrderNumber: string;
    Type: string;
    Priority: string;
    PriorityState: string;
    StartDate: string;
    Status: string;
    StatusState: string;
    OrderHeaderStatus: string;
    OrderHeaderStatusIcon: string;
    OrderHeaderStatusDescription: string;
    AdvisorName: string;
    AdvisorSurname: string;
    LicensePlate: string;
    VehicleVIN: string;
    VehicleModelText: string;
    CustomerName: string;
    Street: string;
    CountyCode: string;
    PostalCode: string;
    City: string;
    Telephone1: string;
    Telephone2: string;
};
export type MaterialOverviewHeader = {
    MaterialNumber: string;
    MaterialDescription: string;
    PlantDescription: string;
    Plant: string;
    PrimaryStockQuantityUnrestricted: string;
    PrimaryStockQuantityAvailable: string;
    PrimaryStockQuantitySafetyStock: string;
    PrimaryStockQuantityUnit: string;
    ABCIndicator: string;
};
export type OrderSubmitLog = {
    VSSOrder?: string;
    OrderNumber?: string;
};
export type CustomFioriColorSettings = {
    sNegativeTextColor: string;
    sCriticalTextColor: string;
    sPositiveTextColor: string;
    sNegativeBgColor: string;
    sCriticalBgColor: string;
    sPositiveBgColor: string;
    sColorGreenBackground: string;
    sColorYellowBackground: string;
    sColorRedBackground: string;
};
export type AvailabilityBarConfig = {
    code: AvailabilityBarStatus;
    text: string;
    state: ValueState;
    barColor: string;
};
export type CentralizedSalesOrgData = {
    Name1: string;
    SalesOrganization: string;
    Plant: string;
};
