import Control from "sap/ui/core/Control";
export interface IContainer extends Control {
    addContent(content: Control): this;
    destroyContent(): this;
    getContent(): Control[];
    insertContent(content: Control, index: int): this;
    removeContent(content: int | string | Control): Control;
    removeAllContent(): Control[];
}
