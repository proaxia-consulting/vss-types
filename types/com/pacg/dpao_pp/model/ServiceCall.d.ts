import RemoteMethodCall from "./RemoteMethodCall";
/**
 * @namespace com.pacg.dpao_pp.model
 * @nonui5
 */
export default class ServiceCall<TInput, TOutput> extends RemoteMethodCall<TInput, TOutput> {
    constructor(messageId: string);
}
