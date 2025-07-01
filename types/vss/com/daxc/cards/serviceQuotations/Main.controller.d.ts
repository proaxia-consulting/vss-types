import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
/**
 * @namespace vss.com.daxc.cards.serviceQuotations
 */
export default class Main extends LinkListController {
    onInit(): void;
    private _getEntityPath;
    onHeaderClick(oEvent: jQuery.Event & {
        target: {
            id: string;
        };
    }): void;
    private resizeCard;
    private getVizFrameData;
    private onFlattenedDatasetDataChange;
    private initSelect;
    private onSelectTaskChange;
    private _isObjectRelevant;
    private _onVizFrameSelectData;
    private requestChartData;
    private onRefresh;
    private areFiltersIdentical;
    private storeFilters;
}
