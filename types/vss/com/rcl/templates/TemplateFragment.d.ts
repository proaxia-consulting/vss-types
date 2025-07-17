import { $XMLPreprocessorProcessSettings } from "sap/ui/core/util/XMLPreprocessor";
import Control from "sap/ui/core/Control";
/**
 * @namespace vss.com.rcl.templates
 */
export default class TemplateFragment {
    static load(fragmentName: string, settings: $XMLPreprocessorProcessSettings, extension?: string): Promise<Control | Control[]>;
}
