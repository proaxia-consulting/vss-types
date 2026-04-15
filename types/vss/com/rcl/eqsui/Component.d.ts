import type Event from "sap/ui/base/Event";
import ComponentContainer from "sap/ui/core/ComponentContainer";
import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import UIComponentAbstract from "vss/com/rcl/component/UIComponentAbstract";
import type { $IEquipmentAwareComponentSettings, EquipmentStructureSettings } from "vss/com/rcl/types/IComponent";
export type Component$EquipmentResolvedParameters = EquipmentStructureSettings;
export type Component$EquipmentResolved = Event<Component$EquipmentResolvedParameters, Component>;
/**
 * @link https://sapui5.hana.ondemand.com/1.120.19/#/topic/6314fcd2510648fbaad3cee8a421030d
 *
 * Wrapper for vss.com.rcl.eqs component. At the moment in version 1.120.21, sap.fe.core.AppComponent does not resolve
 * bindings from manifest into values. This wrapper resolves settings and passes them to vss.com.rcl.eqs.Component
 * @see vss.com.rcl.eqs
 *
 * @namespace vss.com.rcl.eqsui
 */
export default class Component extends UIComponentAbstract {
    getEquipment: () => string | null;
    fireEquipmentResolved: (params: Component$EquipmentResolvedParameters) => void;
    attachEquipmentResolved: (handler: (event: Component$EquipmentResolved, ...args: unknown[]) => void, listener?: object) => void;
    static metadata: {
        manifest: string;
        library: string;
        interfaces: string[];
        properties: {
            equipment: {
                type: string;
                group: string;
                defaultValue: any;
            };
        };
        events: {
            equipmentResolved: {
                enableEventBubbling: boolean;
                parameters: {
                    equipment: {
                        type: string;
                    };
                };
            };
        };
    };
    private _container;
    private _settings;
    constructor(settings: $IEquipmentAwareComponentSettings);
    init(): void;
    /**
     * override default setter
     */
    setEquipment(value: string | null): void;
    createContent(): Promise<ComponentContainer>;
    getEquipmentModel(): ODataModel;
}
