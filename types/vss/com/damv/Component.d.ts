import AppComponent from "sap/fe/core/AppComponent";
import type IAppComponent from "vss/com/fe/IAppComponent";
import type IAppContainer from "vss/com/fe/IAppContainer";
/**
 * @namespace vss.com.dama
 */
export default class Component extends AppComponent implements IAppComponent {
    static metadata: {
        manifest: string;
    };
    private _appContainer;
    init(): void;
    getAppContainer(): IAppContainer;
}
