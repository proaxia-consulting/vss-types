import AbstractDeliveryActionDialogFactory from "vss/com/rcl/templates/ListReport/AbstractDeliveryActionDialogFactory";
/**
 * @nonui5
 * @namespace pacg.com.so.eh.listReport
 */
export default class DialogActionFactory extends AbstractDeliveryActionDialogFactory {
    protected _fragmentSettings(): {
        name: string;
        id: string;
    };
}
