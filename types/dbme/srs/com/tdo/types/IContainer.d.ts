import type Control from "sap/ui/core/Control";
export type IContainer = {
    getContent(): Control[];
    removeContent(item: Control): void;
};
type IScrollExtension = {
    getHorizontalScrollbar(): HTMLDivElement;
} & Control;
export type IScrollExtensionAware = {
    _getScrollExtension(): IScrollExtension;
};
export {};
