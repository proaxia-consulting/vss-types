import type { UserOrgDataType } from "dbme/c/org/oDataTypes/ComSapGatewaySrvdDbeOdCosdMainV0001Model";
export declare function getUserOrgData(): Promise<UserOrgDataType[]>;
export declare function getUserOrgDataDefault(): Promise<UserOrgDataType | void>;
