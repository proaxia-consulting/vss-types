import type NavContainer from "sap/m/NavContainer";
import type Model from "sap/ui/model/Model";
import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import AppComponentAbstract from "vss/com/rcl/component/AppComponentAbstract";
import type { $IEquipmentAwareComponentSettings, IEquipmentAwareComponent } from "vss/com/rcl/types/IComponent";
import type { InvokablePageController } from "vss/com/rcl/types/IController";
/**
 * @link https://sapui5.hana.ondemand.com/1.120.19/#/topic/6314fcd2510648fbaad3cee8a421030d
 *
 * For internal use only @see vss.com.rcl.eqsui
 *
 * @namespace vss.com.rcl.eqs
 */
export default class Component extends AppComponentAbstract implements IEquipmentAwareComponent {
    getEquipment: () => string;
    getRootContainer: () => NavContainer;
    static metadata: {
        manifest: string;
        library: string;
    };
    private _registeredControllers;
    private _pendingEquipmentNavigation;
    private _settings;
    constructor(settings: $IEquipmentAwareComponentSettings);
    init(): void;
    registerController(key: string, controller?: InvokablePageController): this;
    getEquipmentId(): string;
    setEquipmentId(value: string): this;
    getEquipmentModel(): ODataModel;
    getModel(modelName?: string): Model | undefined;
    getSettings(): $IEquipmentAwareComponentSettings;
    destroy(bSuppressInvalidate?: boolean): void;
    private _navigateToEquipment;
}
