import View from "sap/ui/core/mvc/View";
/**
 * @namespace com.pacg.taskcenter.ext
 */
export default class GenInfoSectionProcessor {
    private _view;
    private _contentForm;
    private _crossAppNavSrvPromise;
    constructor(_view: View);
    process(): void;
    private _addKeyProperties;
    private _addInfoPanelProperties;
    private _cleanupFormContainer;
    private _addProperties;
}
