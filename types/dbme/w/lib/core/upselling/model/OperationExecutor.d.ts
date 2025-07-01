import Context from "sap/ui/model/odata/v4/Context";
import UpsellingPartnerObjectPage from "dbme/w/lib/core/upselling/controller/UpsellingPartnerObjectPage.controller";
/**
 * @namespace dbme.w.lib.core.upselling.model
 * @controller
 */
export default class OperationExecutor {
    constructor(controller: UpsellingPartnerObjectPage);
    Execute(context: Context): Promise<void>;
    private _controller;
}
