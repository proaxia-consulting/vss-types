import type Control from "sap/ui/core/Control";
import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
export type IContentAware = {
    getContent(): Control;
} & Control;
/**
 * @deprecated Use AbstractObjectPageExtension instead
 *
 * @nonui5
 * @namespace vss.com.rcl.templates.ObjectPage
 */
export default abstract class AbstractObjectPageSectionExtension<TBaseEntityType> extends AbstractObjectPageExtension<TBaseEntityType> {
}
