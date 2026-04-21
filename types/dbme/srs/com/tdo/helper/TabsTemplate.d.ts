import type IconTabFilter from "sap/m/IconTabFilter";
import type ListBase from "sap/m/ListBase";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IScreen } from "dbme/srs/com/tdo/types/ITabsAware";
import type { IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
declare const TabsTemplate: {
    /**
     * Returns data for JSONModel
     */
    getModelData(this: IDemandsAwareController, oOrderData?: IOrderEntity, bCreate?: boolean): Promise<IScreen[]>;
    /**
     * - Call section factories
     * - Bind tab section into order
     */
    createTabsContent(this: IDemandsAwareController): Promise<IconTabFilter[]>;
    destroy(this: IDemandsAwareController): void;
    getTable(tab: IconTabFilter): ListBase[];
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default TabsTemplate;
