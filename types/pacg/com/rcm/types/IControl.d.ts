import type Control from "sap/ui/core/Control";
export type IContainer = {
    addContent(content: Control): IContainer;
    destroyContent(): IContainer;
    getContent(): Control[];
    insertContent(content: Control, index: int): IContainer;
    removeContent(content: int | string | Control): Control;
    removeAllContent(): Control[];
} & Control;
