export declare function isUrl(sUrl: string): boolean;
export declare function getUrlParams(sUrl?: string): Record<string, string>;
export declare function baseUrl(sUrl?: string): string;
/**
 * @namespace dbme.c
 */
declare const _default: {
    baseUrl: typeof baseUrl;
    getUrlParams: typeof getUrlParams;
    isUrl: typeof isUrl;
};
export default _default;
