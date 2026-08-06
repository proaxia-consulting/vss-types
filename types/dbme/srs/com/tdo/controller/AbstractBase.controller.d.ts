import SrsController from "dbme/w/lib/core/controller/Base";
import type { $UISettings as $ControllerUISettings } from "dbme/w/lib/core/types/IController";
import type AppComponent from "dbme/srs/com/tdo/Component";
import type { CustomerClearModeType } from "dbme/srs/com/tdo/model/Enums";
import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
/**
 * All settings with key prefix "C_X_TDO_" are hidden in settings dialog.
 */
export type $UISettings = $ControllerUISettings & {
    C_X_TDO_HIDE_MEAS_POINT_TAB?: boolean;
    C_X_TDO_HIDE_PREF_COMM_FT?: boolean;
    C_X_TDO_PLAN_FROM_PAST?: boolean;
    TDO_BP_CLEAR_MODE?: CustomerClearModeType;
    TDO_CANC_DEMA_SHOW?: boolean;
    TDO_DEF_DEM_UOM?: string;
    TDO_DEF_ORD_TYPE?: string;
};
/**
 * @namespace dbme.srs.com.tdo.controller
 * @controller
 */
export default abstract class AbstractBase extends SrsController implements ISrsController {
    UISettings: $UISettings;
    getOwnerComponent: () => AppComponent;
    onInit(): void;
    onExit(): void;
    isEditMode(): boolean;
}
