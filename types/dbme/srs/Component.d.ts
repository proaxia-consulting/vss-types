import UIComponent from "dbme/w/lib/core/ui/UIComponent";
import { DBMEComponent } from "dbme/w/lib/core/library";
/**
 * @namespace dbme.srs
 */
export default class Component extends UIComponent {
    static metadata: {
        manifest: string;
    };
    getDBMEComponent(): DBMEComponent;
    init(): void;
}
