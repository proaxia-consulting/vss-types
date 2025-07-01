import type Router from "sap/f/routing/Router";
export declare const SemanticHash: {
    fromUri(uri?: string): string;
    isHandover(hash: string): boolean;
    isHandoverCreate(hash: string): boolean;
    isHandoverDisplay(hash: string): boolean;
    params(hash: string): URLSearchParams;
};
export declare function createHandoverCreateParamsFromUri(uri?: string): URLSearchParams;
export declare function createHandoverDisplayParamsFromUri(uri?: string): URLSearchParams;
export declare function createHandoverDisplayHash(handover: string, router: Router): string;
