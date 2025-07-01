import { type $XMLPreprocessorProcessSettings } from "sap/ui/core/util/XMLPreprocessor";
import Control from "sap/ui/core/Control";
declare const TemplateFragment: {
    load(fragmentName: string, settings: $XMLPreprocessorProcessSettings, extension?: string): Promise<Control | Control[]>;
};
/**
 * @namespace dbme.c.view.fragment
 */
export default TemplateFragment;
