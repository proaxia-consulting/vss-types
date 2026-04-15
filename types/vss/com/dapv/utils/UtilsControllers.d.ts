import type MaterialStockOverview from "vss/com/dapv/controller/MaterialStockOverview.controller";
import type OrderOverview from "vss/com/dapv/controller/OrderOverview.controller";
import type View from "vss/com/dapv/controller/View.controller";
export declare function setViewController(x: View): void;
export declare function setMaterialStockController(x: MaterialStockOverview): void;
export declare function setOrderOverviewController(x: OrderOverview): void;
export declare function getViewController(): View;
export declare function getMaterialStockController(): MaterialStockOverview;
export declare function getOrderOverviewController(): OrderOverview;
