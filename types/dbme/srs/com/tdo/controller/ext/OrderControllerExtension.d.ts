import type Event from "sap/ui/base/Event";
import ManagedObject, { type $ManagedObjectSettings } from "sap/ui/base/ManagedObject";
import type Context from "sap/ui/model/odata/v2/Context";
import type { IOrderAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IEntity, IOrderEntity } from "dbme/srs/com/tdo/types/IEntity";
import type { IScreen } from "dbme/srs/com/tdo/types/ITabsAware";
export declare const Events: {
    readonly AfterAllocationProposalEntityCheck: "AfterAllocationProposalEntityCheck";
    readonly AfterBatchUpdate: "AfterBatchUpdate";
    readonly AfterTabDataCreate: "AfterTabDataCreate";
    readonly AfterEditCancel: "AfterEditCancel";
    readonly AfterInit: "AfterInit";
    readonly AfterOrderContextCreate: "AfterOrderContextCreate";
    readonly AfterOrderEntityExpandProperties: "AfterOrderEntityExpandProperties";
    readonly AfterOrderSaveCommandDataPrepare: "AfterOrderSaveCommandDataPrepare";
    readonly BeforeBatchUpdate: "BeforeBatchUpdate";
    readonly BeforeOrderCreate: "BeforeOrderCreate";
    readonly BeforeValidateFieldGroupIds: "BeforeValidateFieldGroupIds";
};
export type $OrderControllerExtensionSettings = {
    controller: IOrderAwareController;
} & $ManagedObjectSettings;
export type OrderControllerExtension$AfterInit = Event<{}, OrderControllerExtension>;
export type $AfterOrderSaveCommandDataPrepare = {
    order: IOrderEntity;
    deepCreateRequestData: IOrderEntity;
};
export type OrderControllerExtension$AfterOrderSaveCommandDataPrepareEvent = Event<$AfterOrderSaveCommandDataPrepare, OrderControllerExtension>;
export type $AfterTabDataCreate = {
    tabKey: string;
    tabIndex: number;
    tabData: IScreen;
    tabsData: IScreen[];
};
export type OrderControllerExtension$AfterTabDataCreateEvent = Event<$AfterTabDataCreate, OrderControllerExtension>;
export type $AfterOrderContextCreate = {
    orderContext: Context;
};
export type OrderControllerExtension$AfterOrderContextCreateEvent = Event<$AfterOrderContextCreate, OrderControllerExtension>;
export type OrderControllerExtension$BeforeOrderCreate = Event<{}, OrderControllerExtension>;
export type $AfterAllocationProposalEntityCheck = {
    uiParams: {
        enabled?: boolean;
    };
    path: string;
    entityData: IEntity;
};
export type OrderControllerExtension$AfterAllocationProposalEntityCheckEvent = Event<$AfterAllocationProposalEntityCheck, OrderControllerExtension>;
export type $BeforeValidateFieldGroupIds = {
    fieldGroupIds: string[];
};
export type OrderControllerExtension$BeforeValidateFieldGroupIdsEvent = Event<$BeforeValidateFieldGroupIds, OrderControllerExtension>;
export type $AfterOrderEntityExpandProperties = {
    expandProperties: string[];
};
export type OrderControllerExtension$AfterOrderEntityExpandPropertiesEvent = Event<$AfterOrderEntityExpandProperties, OrderControllerExtension>;
export type OrderControllerExtension$AfterBatchUpdateEvent = Event<{}, OrderControllerExtension>;
export type OrderControllerExtension$BeforeBatchUpdateEventParameters = {
    reset: boolean;
};
export type OrderControllerExtension$BeforeBatchUpdateEvent = Event<OrderControllerExtension$BeforeBatchUpdateEventParameters, OrderControllerExtension>;
export type OrderControllerExtension$AfterEditCancelEventParameters = {};
export type OrderControllerExtension$AfterEditCancelEvent = Event<{}, OrderControllerExtension>;
/**
 * @namespace dbme.srs.com.tdo.controller.ext
 */
export default class OrderControllerExtension extends ManagedObject {
    fireAfterAllocationProposalEntityCheck: (params: $AfterAllocationProposalEntityCheck) => void;
    attachAfterAllocationProposalEntityCheck: (handler: (event: OrderControllerExtension$AfterAllocationProposalEntityCheckEvent) => void, listener?: object) => this;
    fireAfterOrderSaveCommandDataPrepare: (params: $AfterOrderSaveCommandDataPrepare) => void;
    attachAfterOrderSaveCommandDataPrepare: (handler: (event: OrderControllerExtension$AfterOrderSaveCommandDataPrepareEvent) => void, listener?: object) => this;
    fireAfterTabDataCreate: (params: $AfterTabDataCreate) => void;
    attachAfterTabDataCreate: (handler: (event: OrderControllerExtension$AfterTabDataCreateEvent) => void, listener?: object) => this;
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
    fireAfterEditCancel: () => void;
    attachAfterEditCancel: (handler: (event: OrderControllerExtension$AfterEditCancelEvent) => void, listener?: object) => this;
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
            AfterOrderSaveCommandDataPrepare: {
                parameters: {
                    order: string;
                    deepCreateRequestData: string;
                };
            };
            AfterTabDataCreate: {
                parameters: {
                    tabKey: string;
                    tabIndex: string;
                    tabData: string;
                    tabsData: string;
                };
            };
            AfterEditCancel: {};
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
