import type Control from "sap/ui/core/Control";
import type { $XMLPreprocessorProcessSettings } from "sap/ui/core/util/XMLPreprocessor";
/**
 * @namespace vss.com.rcl.templates
 */
export default class TemplateFragment {
    static load(fragmentName: string, settings: $XMLPreprocessorProcessSettings, extension?: string): Promise<Control | Control[]>;
}
