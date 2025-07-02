/**
 * @namespace com.pacg.dpf_pp.model
 * @nonui5
 */
export default class ServiceCallApi<TInput, TOutput> {
    private _path;
    constructor(_path: string);
    get(): Promise<TOutput>;
    post(requestData: TInput): Promise<TOutput>;
    put(requestData: TInput): Promise<TOutput>;
    private _request;
    private _getApiResponse;
}
