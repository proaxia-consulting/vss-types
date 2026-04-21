import Button from "sap/m/Button";
import ObjectNumber from "sap/m/ObjectNumber";
import ObjectStatus from "sap/m/ObjectStatus";
/**
 * @namespace vss.com.dama.model
 */
export default function (this: Button, jobs: Record<string, unknown>): boolean;
export declare function itemQuantity(this: ObjectNumber, quantity: string): string;
export declare function approvalIcon(this: ObjectStatus, ApprovalStatus: string): string;
export declare function approvalState(this: ObjectStatus, ApprovalStatus: string): string;
export declare function itemStatusIcon(this: ObjectStatus, PartsStatus: string): string;
export declare function itemState(this: ObjectStatus, PartsStatus: string): string;
