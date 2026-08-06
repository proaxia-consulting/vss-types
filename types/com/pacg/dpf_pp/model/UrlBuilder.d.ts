export type UrlQueryParams = Record<string, string | number | boolean | null | undefined | (string | number | boolean)[]>;
/**
 * @namespace com.pacg.dpf_pp.model
 * @nonui5
 */
export declare class UrlBuilder {
    /**
     * Build a relative URL from a base path, optional additional path, and optional query params.
     */
    static build(basePath: string, additionalPath?: string, queryParams?: UrlQueryParams): string;
}
