import Controller from "sap/ui/core/mvc/Controller";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import ResponseLogger from "dbme/c/Log";
/**
 * @name dbme.c.controller.Base
 * @controller
 */
declare class Base extends Controller {
    protected _initialized: {
        message: {
            manager: boolean;
            popover: boolean;
        };
    };
    protected _oLog?: ResponseLogger;
    /**
     * allow to call super.onInit() in child controllers
     */
    onInit(): void;
    /**
     * @deprecated use i18n/Translate function instead
     *
     * Translate given key
     */
    _(sKey: string, aArgs?: string[]): string;
    /**
     * @deprecated Use dbme.c.util.handleReturn instead!
     *
     * Initialize message popover && OData message parser && response handler
     */
    getLog(): ResponseLogger;
    protected _initMessageManager(): void;
    /**
     * We assume that view fragment dbme.c.view.fragment.MessagePopover is rendered within the controller's view
     */
    protected _initLogPopover(): void;
    _getModel(): ODataModel;
}
export default Base;
