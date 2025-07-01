import AppComponent from "sap/fe/core/AppComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace com.pacg.taskcenter
 */
export default class Component extends AppComponent {
    static metadata: {
        manifest: string;
    };
    private _singlePageMode;
    init(): void;
    updateUserOrgData(): void;
    getSinglePageMode(): boolean;
    handleTaskDetailError(): void;
    getOrgDataModel(): JSONModel;
    private _getFcl;
}
