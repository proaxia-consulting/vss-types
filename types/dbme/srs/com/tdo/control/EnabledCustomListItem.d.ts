import CustomListItem from "sap/m/CustomListItem";
import CustomListItemRenderer from "sap/m/CustomListItemRenderer";
import Control from "sap/ui/core/Control";
interface IEnabledAwareControl extends Control {
    getEnabled?: () => boolean;
}
/**
 * @namespace dbme.srs.com.tdo.control
 */
declare class EnabledCustomListItem extends CustomListItem {
    getSelectEnabled: () => boolean;
    setSelectEnabled: (enabled: boolean) => this;
    isIncludedIntoSelection: () => boolean;
    static renderer: typeof CustomListItemRenderer;
    static metadata: {
        properties: {
            selectEnabled: {
                type: string;
                defaultValue: boolean;
            };
        };
    };
    _oSingleSelectControl: IEnabledAwareControl;
    _oMultiSelectControl: IEnabledAwareControl;
    /**
     * Override sap.m.ListItemBase.getSingleSelectControl
     */
    getSingleSelectControl(bCreateIfNotExist: boolean): Control;
    /**
     * Override sap.m.ListItemBase.getMultiSelectControl
     */
    getMultiSelectControl(bCreateIfNotExist: boolean): Control;
}
export default EnabledCustomListItem;
