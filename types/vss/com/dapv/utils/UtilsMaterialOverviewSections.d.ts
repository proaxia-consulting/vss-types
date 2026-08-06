import type ObjectPageLayout from "sap/uxap/ObjectPageLayout";
import type { MaterialOverview } from "vss/com/dapv/entities/Entities";
import type { MaterialOverviewHeader } from "vss/com/dapv/utils/UtilsFrontendData";
export declare function constructAllSections(oObjPageLayout: ObjectPageLayout, aStockOverview: MaterialOverview["_StockOverview"], aATPOverview: MaterialOverview["_OrderAtp"], bAvailabilityCheck: boolean, bSwapActivated: boolean): void;
export declare function fillHeaderData(x: MaterialOverview): MaterialOverviewHeader;
