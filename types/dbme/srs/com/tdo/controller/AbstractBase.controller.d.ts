import SrsController from "dbme/w/lib/core/controller/Base";
import type AppComponent from "dbme/srs/com/tdo/Component";
import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
/**
 * @namespace dbme.srs.com.tdo.controller
 * @controller
 */
export default abstract class AbstractBase extends SrsController implements ISrsController {
    getOwnerComponent: () => AppComponent;
    static metadata: {
        abstract: boolean;
    };
    onInit(): void;
    onExit(): void;
    isEditMode(): boolean;
}
