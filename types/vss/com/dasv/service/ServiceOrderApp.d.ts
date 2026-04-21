import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type Context from "sap/ui/model/odata/v4/Context";
import type { OrderEventResponseType, OrderEventType } from "vss/com/dasv/ext/fragment/OrderEventMenu";
import type { VssOrderType_AddPackageParams, VssOrderType_AddRecallParams } from "vss/com/dasv/types/odata/serviceOrderApp/ComSapGatewaySrvdDbeDasvCOrderV0001Model";
export default class ServiceOrderApp {
    private _api;
    static readonly ServiceName = "com.sap.gateway.srvd.dbe.dasv_c_order.v0001";
    static readonly PathName: {
        SnapshotCard: string;
    };
    static readonly ActionSuffix: string;
    static readonly ActionsName: {
        AddPackage: string;
        AddRecall: string;
        DeleteJob: string;
        RefreshJobItems: string;
        IsRelCustVehAssignment: string;
        AssignVehicle: string;
        ExecuteEvent: string;
        OrderEvents: string;
    };
    static readonly ServiceActionName: {
        AddOffer: string;
        AcceptUpselling: string;
        RejectUpselling: string;
        AddFromCatalog: string;
    };
    private _editFlow;
    constructor(_api: ExtensionAPI);
    AddPackage(context: Context, params: VssOrderType_AddPackageParams): Promise<void>;
    AddRecall(context: Context, params: VssOrderType_AddRecallParams): Promise<void>;
    RefreshJobItem(context: Context): Promise<void>;
    IsRelCustVehAssignment(context: Context): Promise<boolean>;
    AssignVehicle(context: Context): Promise<void>;
    ExecuteGenericEvent(context: Context, event: OrderEventType): Promise<void>;
    GetOrderEvents(context: Context): Promise<OrderEventResponseType>;
    GetServicePath(actionName: string): string;
    BuildGenericActionPath(rapAction: string): string;
}
