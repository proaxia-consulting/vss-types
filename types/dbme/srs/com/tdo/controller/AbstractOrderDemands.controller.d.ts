import type ListBase from "sap/m/ListBase";
import type Table from "sap/m/Table";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import AbstractOrder from "dbme/srs/com/tdo/controller/AbstractOrder.controller";
import ScreenSectionTableLinkTargetUpdate from "dbme/srs/com/tdo/helper/ScreenSectionTable";
import ScreenSectionBindingRefresh from "dbme/srs/com/tdo/helper/ScreenSectionBindingRefresh";
import { type SerializedTabsType } from "dbme/srs/com/tdo/helper/orderTabs";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
/**
 * @namespace dbme.srs.com.tdo.controller
 * @controller
 */
export default abstract class AbstractOrderDemands extends AbstractOrder implements IDemandsAwareController {
    helper: {
        demandTemplate: {
            getDemandTemplate(this: IDemandsAwareController, bRecalc?: boolean): Promise<import("sap/m/ColumnListItem").default>;
            getDemandsTable(this: IDemandsAwareController, bRecalc?: boolean): Table;
            getDemandTableFields(this: IDemandsAwareController): Promise<import("sap/ui/comp/smartfield/SmartField").default[]>;
        };
        sectionTable: ScreenSectionTableLinkTargetUpdate;
        sectionBindingRefresh: ScreenSectionBindingRefresh;
    };
    orderEntityExpand?: string;
    _oAgreementsList?: ListBase;
    _oDemandsTable?: Table;
    _oNotesList?: ListBase;
    _oParametersList?: ListBase;
    _oDateParameters?: ListBase;
    protected _serializedTabs?: SerializedTabsType;
    abstract reloadSaveEnabled(): Promise<void>;
    protected abstract _destroy(unbind?: boolean, orderId?: string): void;
    onInit(): void;
    onExit(): void;
    onOrderParameterChange(event: ListBase$SelectionChangeEvent): void;
    onTabSelect(event: IconTabBar$SelectEvent): void;
    serializeTabs(): SerializedTabsType;
    getSelectedOrder(): IOrderEntity[];
    _getForm(): SmartForm;
    /**
     * Should be called in the controller's _destroy method
     */
    protected _destroyTabs(): void;
    protected isDemandTableValid(): Promise<boolean>;
}
