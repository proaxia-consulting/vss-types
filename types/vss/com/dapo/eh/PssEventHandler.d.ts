import type Event from "sap/ui/base/Event";
import type { DialogModel, ExtendedSuperSessionReplacementParts, ObjectPageBaseController, OrderItemContext } from "vss/com/dapo/ext/types/interface";
export declare const getPssMaterials: (controllerExt: ObjectPageBaseController, parameters: OrderItemContext) => Promise<DialogModel>;
export declare const createOrderItemsFromSuperSession: (controllerExt: ObjectPageBaseController, orderItem: DialogModel) => Promise<{}>;
export declare const QtyValidationPassed: (parts: ExtendedSuperSessionReplacementParts[], targetQty: number) => boolean;
export declare const getBundleItemParts: (bundlePart: ExtendedSuperSessionReplacementParts, parts: ExtendedSuperSessionReplacementParts[]) => ExtendedSuperSessionReplacementParts[];
export declare const getReplacementPartsBySelectionMode: (parts: DialogModel) => ExtendedSuperSessionReplacementParts[];
export declare const getProcessedBundleParts: (parts: ExtendedSuperSessionReplacementParts[], bundleId: string, bundleQty: number) => {
    id: string;
    items: ExtendedSuperSessionReplacementParts[];
};
declare const _default: {
    onQtyChange(event: Event): void;
    onselectionchange(event: Event): void;
};
export default _default;
