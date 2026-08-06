/**
 * @namespace com.pacg.dpf_pp.model
 * @nonui5
 */
export default class ServiceCallApi<TInput, TOutput> {
    private _path;
    private _sapClient?;
    constructor(_path: string, _sapClient?: string);
    get(): Promise<TOutput>;
    post(requestData: TInput): Promise<TOutput>;
    put(requestData: TInput): Promise<TOutput>;
    private _request;
    private _getApiResponse;
}
