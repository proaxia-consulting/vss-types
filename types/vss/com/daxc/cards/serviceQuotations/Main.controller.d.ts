import LinkListController from "sap/ovp/cards/linklist/LinkList.controller";
import type Event from "sap/ui/base/Event";
import type { CardLayout } from "vss/com/daxc/types/CustomData";
/**
 * @namespace vss.com.daxc.cards.serviceQuotations
 */
export default class Main extends LinkListController {
    private _myDelegate;
    onInit(): void;
    private _getEntityPath;
    onHeaderClick(oEvent: Event & {
        ctrlKey: boolean;
        target: {
            id: string;
        };
    }): void;
    resizeCard(newCardLayout: CardLayout): void;
    private getVizFrameData;
    private initSelect;
    private onSelectTaskChange;
    private _isObjectRelevant;
    private _onVizFrameSelectData;
    private requestChartData;
    private _getOrdersCounter;
    private onFlattenedDatasetDataChange;
    private onAnyChange;
    private onRefresh;
    private setDatasetAndFeeds;
    private onCheckBoxSelect;
}
