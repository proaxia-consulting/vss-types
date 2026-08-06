import type ExtensionAPI from "sap/fe/core/ExtensionAPI";
import type Context from "sap/ui/model/odata/v4/Context";
import type { HeaderType_SetStepNumberParams, SnapshotCardType, xDBExDAOW_A_Vehicle, xDBExDAOW_A_WizardStep } from "vss/com/daow/types/odata/wizardApp/ComSapGatewaySrvdDbeDaowIOrderwizardV0001Model";
export default class OrderWizardApp {
    private _api;
    static readonly ServiceName = "com.sap.gateway.srvd.dbe.daow_i_orderwizard.v0001";
    static readonly PathName: {
        SnapshotCard: string;
    };
    static readonly ActionsName: {
        SetStepNumber: string;
        GetWizardSteps: string;
        CreateVehicle: string;
        AssignCustomer: string;
        SetVehicle: string;
        UpdateVehicle: string;
    };
    private _editFlow;
    constructor(_api: ExtensionAPI);
    SetStepNumber(context: Context, params: HeaderType_SetStepNumberParams): Promise<void>;
    CreateVehicle(context: Context): Promise<void>;
    Reassignment(context: Context): Promise<void>;
    GetWizardSteps(context: Context): Promise<xDBExDAOW_A_WizardStep[]>;
    GetSnapshotCards(): Promise<SnapshotCardType[]>;
    GetServicePath(actionName: string): string;
    SetVehicle(context: Context, vehicleEntity: xDBExDAOW_A_Vehicle): Promise<void>;
    UpdateVehicle(context: Context, vehicleEntity: xDBExDAOW_A_Vehicle): Promise<void>;
}
