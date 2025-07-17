import ManagedObject, { type $ManagedObjectSettings } from "sap/ui/base/ManagedObject";
import type { IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
import type Context from "sap/ui/model/odata/v2/Context";
import type { $EventTyped } from "ui5";
import type { IScreen } from "dbme/srs/com/tdo/types/ITabsAware";
import type { IEntity } from "dbme/srs/com/tdo/types/IEntity";
export declare const Events: {
    readonly AfterAllocationProposalEntityCheck: "AfterAllocationProposalEntityCheck";
    readonly AfterBatchUpdate: "AfterBatchUpdate";
    readonly AfterDemandSectionDataCreate: "AfterDemandSectionDataCreate";
    readonly AfterInit: "AfterInit";
    readonly AfterOrderContextCreate: "AfterOrderContextCreate";
    readonly AfterOrderEntityExpandProperties: "AfterOrderEntityExpandProperties";
    readonly BeforeBatchUpdate: "BeforeBatchUpdate";
    readonly BeforeOrderCreate: "BeforeOrderCreate";
    readonly BeforeValidateFieldGroupIds: "BeforeValidateFieldGroupIds";
};
export interface $OrderControllerExtensionSettings extends $ManagedObjectSettings {
    controller: IOrderAwareController;
}
export type OrderControllerExtension$AfterInit = $EventTyped<{}, OrderControllerExtension>;
export type $AfterDemandSectionDataCreate = {
    tabsData: IScreen[];
};
export type OrderControllerExtension$AfterDemandSectionDataCreateEvent = $EventTyped<$AfterDemandSectionDataCreate, OrderControllerExtension>;
export type $AfterOrderContextCreate = {
    orderContext: Context;
};
export type OrderControllerExtension$AfterOrderContextCreateEvent = $EventTyped<$AfterOrderContextCreate, OrderControllerExtension>;
export type OrderControllerExtension$BeforeOrderCreate = $EventTyped<{}, OrderControllerExtension>;
export type $AfterAllocationProposalEntityCheck = {
    uiParams: {
        enabled?: boolean;
    };
    path: string;
    entityData: IEntity;
};
export type OrderControllerExtension$AfterAllocationProposalEntityCheckEvent = $EventTyped<$AfterAllocationProposalEntityCheck, OrderControllerExtension>;
export type $BeforeValidateFieldGroupIds = {
    fieldGroupIds: string[];
};
export type OrderControllerExtension$BeforeValidateFieldGroupIdsEvent = $EventTyped<$BeforeValidateFieldGroupIds, OrderControllerExtension>;
export type $AfterOrderEntityExpandProperties = {
    expandProperties: string[];
};
export type OrderControllerExtension$AfterOrderEntityExpandPropertiesEvent = $EventTyped<$AfterOrderEntityExpandProperties, OrderControllerExtension>;
export type OrderControllerExtension$AfterBatchUpdateEvent = $EventTyped<{}, OrderControllerExtension>;
export type OrderControllerExtension$BeforeBatchUpdateEventParameters = {
    reset: boolean;
};
export type OrderControllerExtension$BeforeBatchUpdateEvent = $EventTyped<OrderControllerExtension$BeforeBatchUpdateEventParameters, OrderControllerExtension>;
/**
 * @namespace dbme.srs.com.tdo.controller.ext
 */
export default class OrderControllerExtension extends ManagedObject {
    fireAfterAllocationProposalEntityCheck: (params: $AfterAllocationProposalEntityCheck) => void;
    attachAfterAllocationProposalEntityCheck: (handler: (event: OrderControllerExtension$AfterAllocationProposalEntityCheckEvent) => void, listener?: object) => this;
    fireAfterDemandSectionDataCreate: (params: $AfterDemandSectionDataCreate) => void;
    attachAfterDemandSectionDataCreate: (handler: (event: OrderControllerExtension$AfterDemandSectionDataCreateEvent) => void, listener?: object) => this;
    fireAfterInit: () => void;
    attachAfterInit: (handler: (event: OrderControllerExtension$AfterInit) => void, listener?: object) => this;
    fireAfterOrderContextCreate: (params: $AfterOrderContextCreate) => void;
    attachAfterOrderContextCreate: (handler: (event: OrderControllerExtension$AfterOrderContextCreateEvent) => void, listener?: object) => this;
    fireBeforeOrderCreate: () => void;
    attachBeforeOrderCreate: (handler: (event: OrderControllerExtension$BeforeOrderCreate) => void, listener?: object) => this;
    fireAfterOrderEntityExpandProperties: (params: $AfterOrderEntityExpandProperties) => void;
    attachAfterOrderEntityExpandProperties: (handler: (event: OrderControllerExtension$AfterOrderEntityExpandPropertiesEvent) => void, listener?: object) => this;
    fireAfterBatchUpdate: () => void;
    attachAfterBatchUpdate: (handler: (event: OrderControllerExtension$AfterBatchUpdateEvent) => void, listener?: object) => this;
    fireBeforeBatchUpdate: (params: OrderControllerExtension$BeforeBatchUpdateEventParameters) => void;
    attachBeforeBatchUpdate: (handler: (event: OrderControllerExtension$BeforeBatchUpdateEvent) => void, listener?: object) => this;
    fireBeforeValidateFieldGroupIds: (params: $BeforeValidateFieldGroupIds) => void;
    attachBeforeValidateFieldGroupIds: (handler: (event: OrderControllerExtension$BeforeValidateFieldGroupIdsEvent) => void, listener?: object) => this;
    protected _controller: IOrderAwareController;
    protected _objectMap?: Map<string, ManagedObject>;
    protected _initPromise: Promise<unknown>[];
    protected _batchUpdate?: Promise<unknown>[];
    protected _initialized: boolean;
    static metadata: {
        events: {
            AfterAllocationProposalEntityCheck: {
                parameters: {
                    uiParams: string;
                    path: string;
                    entityData: string;
                };
            };
            AfterBatchUpdate: {};
            AfterDemandSectionDataCreate: {
                parameters: {
                    tabsData: string;
                };
            };
            AfterInit: {};
            AfterOrderContextCreate: {
                parameters: {
                    orderContext: string;
                };
            };
            AfterOrderEntityExpandProperties: {
                parameters: {
                    expandProperties: string;
                };
            };
            BeforeBatchUpdate: {
                parameters: {
                    reset: string;
                };
            };
            BeforeOrderCreate: {};
            BeforeValidateFieldGroupIds: {
                parameters: {
                    fieldGroupIds: string;
                };
            };
        };
    };
    constructor(mSettings?: $OrderControllerExtensionSettings, oScope?: object);
    getController(): IOrderAwareController;
    getObjectMap(): Map<string, ManagedObject>;
    appendInitPromise(promise: Promise<unknown>): this;
    initialized(): Promise<void>;
    beforeBatchUpdate(reset?: boolean): void;
    afterBatchUpdate(): Promise<void>;
    appendBatchUpdate(promise: Promise<unknown>): void;
}
