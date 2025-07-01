import Controller from "sap/ui/core/mvc/Controller";
import type View from "sap/ui/core/mvc/View";
import type { IDBMEComponentBase } from "dbme/w/lib/core/types/IComponent";
import HierarchyAssignment from "dbme/w/lib/core/controllerextensions/HierarchyAssignment";
import type { IBaseController } from "dbme/w/lib/core/types/IController";
/**
 * @namespace dbme.w.lib.core.controller
 * @controller
 */
export default abstract class AbstractBase extends Controller implements IBaseController {
    getView: () => View;
    getOwnerComponent: () => IDBMEComponentBase;
    static metadata: {
        abstract: boolean;
    };
    hierarchyAssignment: HierarchyAssignment;
    constructor(name: string);
    onInit(): void;
}
