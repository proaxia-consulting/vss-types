import UIComponent from "dbme/w/lib/core/ui/UIComponent";
import View from "sap/ui/core/mvc/View";
/**
 * @namespace dbme.srs.com.settings
 */
export default class Component extends UIComponent {
    protected fireContentCreated: () => void;
    attachContentCreated: (handler: (event: Event, ...args: unknown[]) => void, listener?: object) => void;
    static metadata: {
        manifest: string;
        events: {
            contentCreated: {
                enableEventBubbling: boolean;
                parameters: {};
            };
        };
    };
    init(): void;
    getDBMEComponent(): "STS";
    createContent(): Promise<View>;
}
