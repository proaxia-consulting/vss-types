import Text from "sap/m/Text";
import { $TextSettings } from "sap/m/Text";
export type $DraggableTextSettings = $TextSettings | {
    color: string;
};
/**
 * @namespace vss.com.dadm.control
 */
export default class DraggableText extends Text {
    getColor: () => string;
    setColor: (color: string) => this;
    static readonly renderer: {
        render(rm: import("sap/ui/core/RenderManager").default, text: Text): void;
    };
    static metadata: {
        dnd: {
            draggable: boolean;
            droppable: boolean;
        };
        properties: {
            color: {
                type: string;
                group: string;
                defaultValue: string;
            };
        };
    };
}
