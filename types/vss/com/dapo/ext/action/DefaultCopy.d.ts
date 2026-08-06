import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type Context from "sap/ui/model/odata/v4/Context";
/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param pageContext the context of the page on which the event was fired
 */
export declare function DefaultCopy(this: ExtensionAPI, context: Context, object: unknown): Promise<{
    [key: string]: unknown;
    Customer?: string;
    DistributionChannel?: string;
}>;
