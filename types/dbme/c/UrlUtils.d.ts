export declare function isUrl(sUrl: string): boolean;
export declare function getUrlParams(url?: string, arrayToStringSeparator?: string): Record<string, string | string[]>;
export declare function baseUrl(url?: string): string;
/**
 * @namespace dbme.c
 */
declare const _default: {
    baseUrl: typeof baseUrl;
    getUrlParams: typeof getUrlParams;
    isUrl: typeof isUrl;
};
export default _default;
