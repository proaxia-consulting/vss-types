import RemoteMethodCall from "com/pacg/disc_appr/model/RemoteMethodCall";
/**
 * @namespace com.pacg.disc_appr.model
 * @nonui5
 */
export default class ServiceCall<TInput, TOutput> extends RemoteMethodCall<TInput, TOutput> {
    constructor(messageId: string);
}
