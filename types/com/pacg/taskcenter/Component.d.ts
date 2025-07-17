import AppComponent from "sap/fe/core/AppComponent";
import { TGlobalSettingsEntity } from "./types/EntitySet";
/**
 * @namespace com.pacg.taskcenter
 */
export default class Component extends AppComponent {
    static metadata: {
        manifest: string;
    };
    private _singlePage;
    init(): void;
    readSettings(): Promise<TGlobalSettingsEntity>;
    getSinglePage(): boolean;
    handleTaskDetailError(): void;
}
