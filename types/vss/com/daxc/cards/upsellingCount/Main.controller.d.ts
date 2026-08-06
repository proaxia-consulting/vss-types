import BaseAnalyticalChartController from "sap/ovp/cards/charts/analytical/analyticalChart.controller";
import type Event from "sap/ui/base/Event";
/**
 * @namespace vss.com.daxc.cards.upsellingCount
 */
export default class Main extends BaseAnalyticalChartController {
    onInit(): void;
    onSelectData(oEvent: Event): void;
    doNavigation(oContext: object, oNavigationField: object, sNavMode: string): void;
    private _isObjectRelevant;
    private requestData;
    onRefresh(): void;
}
