import type ResourceBundle from "sap/base/i18n/ResourceBundle";
export declare function getBundle(): ResourceBundle;
export declare function __(key: string, args?: unknown[]): string;
export declare function setBundle(b: ResourceBundle): void;
declare const Translate: typeof __;
/**
 * @namespace dbme.c.i18n
 * @global
 */
export default Translate;
