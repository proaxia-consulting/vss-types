import RenderManager from "sap/ui/core/RenderManager";
import type Text from "sap/m/Text";
declare const DraggableTextRenderer: {
    apiVersion: number;
    render(rm: RenderManager, text: Text): void;
};
/**
 * @namespace vss.com.dadm.control
 */
export default DraggableTextRenderer;
