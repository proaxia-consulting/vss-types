declare const Clipboard: {
    data: {
        copy: unknown[];
        cut: unknown[];
    };
    clear(): void;
    copy(data?: unknown[]): unknown[];
    cut(data?: unknown[]): unknown[];
};
/**
 * @namespace dbme.w.lib.core.util
 * @global
 */
export default Clipboard;
