import type Menu from "sap/ui/unified/Menu";
import type { Button$PressEvent } from "sap/m/Button";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { MenuItemBase$SelectEvent } from "sap/ui/unified/MenuItemBase";
declare const DemandMenu: {
    show(this: IDemandsAwareController, oEvent: Button$PressEvent): Promise<Menu>;
    onMenuItemSelect(this: IDemandsAwareController, oEvent: MenuItemBase$SelectEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default DemandMenu;
