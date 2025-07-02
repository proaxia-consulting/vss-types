import type ResourceBundle from "sap/base/i18n/ResourceBundle";
export declare function getBundle(): ResourceBundle;
export declare function setBundle(b: ResourceBundle): void;
export declare function __(key: string, args?: unknown[]): string;
declare const Translate: typeof __;
/**
 * @namespace dbme.w.lib.core.i18n
 * @global
 */
export default Translate;
