export type TPrintSettings = {
    close?: boolean;
    print?: boolean;
    imports?: Record<string, unknown>;
    title?: string;
    fileName?: string;
};
export declare function createDefaultPrintSettings(): TPrintSettings;
export declare function readTemplateFromUrl(templateUrl: string): Promise<string>;
