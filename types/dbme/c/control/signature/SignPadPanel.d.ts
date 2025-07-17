import HTML from "sap/ui/core/HTML";
import Panel from "sap/m/Panel";
import type { $PanelSettings } from "sap/m/Panel";
import type { EventHandler } from "dbme/c/types/EventHandler";
import JQuery from "sap/ui/thirdparty/jquery";
import type { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import SignaturePad, { type PointGroup } from "signature_pad";
import type { $EventTyped } from "ui5";
export interface $SignPadPanelSettings extends $PanelSettings {
    padWidth?: number | PropertyBindingInfo | `{${string}}`;
    padHeight?: number | PropertyBindingInfo | `{${string}}`;
    editable?: boolean | PropertyBindingInfo | `{${string}}`;
    value?: string | PropertyBindingInfo;
    change?: EventHandler;
}
export type SignPadPanel$ChangeEventParameters = {
    reason?: string;
};
export type SignPadPanel$ChangeEvent = $EventTyped<SignPadPanel$ChangeEventParameters, SignPadPanel>;
/**
 * @namespace dbme.c.control.signature
 */
export default class SignPadPanel extends Panel {
    getPadHeight: () => number;
    getPadWidth: () => number;
    getEditable: () => boolean;
    getValue: () => string;
    attachChange: (fn: (event: SignPadPanel$ChangeEvent) => void, listener?: object) => this;
    detachChange: (fn: (event: SignPadPanel$ChangeEvent) => void, listener?: object) => this;
    fireChange: (parameters?: SignPadPanel$ChangeEventParameters) => void;
    protected _htmlArea?: HTML;
    protected _signature?: SignaturePad;
    protected _canvas?: HTMLCanvasElement;
    protected _pendingValueChange: boolean;
    static renderer: {
        render(rm: import("sap/ui/core/RenderManager").default, control: import("sap/ui/core/Control").default): void;
    };
    static readonly metadata: {
        library: string;
        properties: {
            padWidth: {
                type: string;
                group: string;
                defaultValue: number;
            };
            padHeight: {
                type: string;
                group: string;
                defaultValue: number;
            };
            editable: {
                type: string;
                group: string;
                defaultValue: boolean;
            };
            value: {
                type: string;
                group: string;
                defaultValue: string;
            };
        };
        events: {
            change: {
                enableEventBubbling: boolean;
            };
        };
        aggregations: {
            _htmlArea: {
                type: string;
                multiple: boolean;
                singularName: "_htmlArea";
                visibility: string;
            };
        };
    };
    constructor(idOrSettings?: string | $SignPadPanelSettings);
    constructor(id?: string, settings?: $SignPadPanelSettings);
    init(): void;
    onBeforeRendering(oEvent: JQuery.Event): void;
    getImage(encoded?: boolean): string;
    getImageHtml(): string;
    setBusy(bBusy: boolean): this;
    setPadHeight(height: number): this;
    setPadWidth(width: number): this;
    setValue(value: string): this;
    setEditable(editable: boolean): this;
    protected _getHtmlArea(): HTML;
    protected _createHtmlArea(): HTML;
    /**
     * Convert internal signature format into string
     */
    protected _stringify(...points: PointGroup[]): string;
    /**
     * Convert string to internal signature format
     */
    protected _parse(value: string): PointGroup[];
    protected _setValue(value: string, bFireChange?: boolean, bSignature?: boolean): this;
    protected _setSignatureValue(...points: PointGroup[]): void;
    destroy(bSuppressInvalidate?: boolean): void;
}
