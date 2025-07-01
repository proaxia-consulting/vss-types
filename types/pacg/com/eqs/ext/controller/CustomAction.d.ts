import ExtensionAPI from "sap/fe/templates/ObjectPage/ExtensionAPI";
import { Button$PressEvent } from "sap/m/Button";
import FlexBox from "sap/m/FlexBox";
import Control from "sap/ui/core/Control";
import Context from "sap/ui/model/Context";
export declare function onButton1Press(event: Button$PressEvent): void;
export declare function onButton2Press(event: Button$PressEvent): void;
export type $CustomActionsSettings = {
    contextPath?: string;
    controller?: object;
    id: string;
    initialBindingContext?: Context;
    name: string;
};
export declare function loadCustomActions(api: ExtensionAPI, control: FlexBox, settings: $CustomActionsSettings): Promise<Control | Control[]>;
