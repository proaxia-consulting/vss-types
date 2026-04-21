import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
import type { CardLayout } from "vss/com/daxc/types/CustomData";
/**
 * @namespace vss.com.daxc.cards.serviceQuotations
 */
export default class Main extends LinkListController {
    private _myDelegate;
    onInit(): void;
    onHeaderClick(oEvent: jQuery.Event & {
        target: {
            id: string;
        };
    }): void;
    resizeCard(newCardLayout: CardLayout): void;
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
    private onAnyChange;
    private setDatasetAndFeeds;
    private onCheckBoxSelect;
}
