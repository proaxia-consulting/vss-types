import UIComponent from "dbme/w/lib/core/ui/UIComponent";
/**
 * @namespace dbme.srs
 */
export default class Component extends UIComponent {
    static metadata: {
        manifest: string;
    };
    getDBMEComponent(): "";
    init(): void;
}
