import UIComponent from "sap/ui/core/UIComponent";
import type { IDBMEComponentBase } from "dbme/w/lib/core/types/IComponent";
import { type GlobalSettingsService } from "dbme/w/lib/core/service/GlobalSettingsServiceFactory";
import { type DBMEComponentType } from "dbme/w/lib/core/ui/Enums";
/**
 * @namespace dbme.w.lib.core.ui
 */
export default abstract class UIComponentBase extends UIComponent implements IDBMEComponentBase {
    protected _modelSizeLimit: boolean;
    static metadata: Record<string, unknown>;
    abstract getDBMEComponent(): DBMEComponentType;
    init(): void;
    getGlobalSettingsService(): Promise<GlobalSettingsService>;
    getDefaultModel(): import("sap/ui/model/odata/v2/ODataModel").default;
    createContent(): Promise<any>;
    destroy(bSuppressInvalidate?: boolean): void;
}
