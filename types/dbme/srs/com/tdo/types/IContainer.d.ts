import type Control from "sap/ui/core/Control";
export interface IContainer {
    getContent(): Control[];
    removeContent(item: Control): void;
}
interface IScrollExtension extends Control {
    getHorizontalScrollbar(): HTMLDivElement;
}
export interface IScrollExtensionAware {
    _getScrollExtension(): IScrollExtension;
}
export {};
