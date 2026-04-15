import type Context from "sap/ui/model/odata/v4/Context";
import type UpsellingPartnerObjectPage from "dbme/w/lib/core/upselling/controller/UpsellingPartnerObjectPage.controller";
/**
 * @namespace dbme.w.lib.core.upselling.model
 * @controller
 */
export default class OperationExecutor {
    private _controller;
    constructor(_controller: UpsellingPartnerObjectPage);
    Execute(context: Context): Promise<void>;
}
