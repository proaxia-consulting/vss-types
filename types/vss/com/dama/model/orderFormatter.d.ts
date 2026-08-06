import type Button from "sap/m/Button";
import type ObjectNumber from "sap/m/ObjectNumber";
import type ObjectStatus from "sap/m/ObjectStatus";
/**
 * @namespace vss.com.dama.model
 */
export default function orderFormatter(this: Button, jobs: Record<string, unknown>): boolean;
export declare function itemQuantity(this: ObjectNumber, quantity: string): string;
export declare function approvalIcon(this: ObjectStatus, ApprovalStatus: string): string;
export declare function approvalState(this: ObjectStatus, ApprovalStatus: string): string;
export declare function itemStatusIcon(this: ObjectStatus, PartsStatus: string): string;
export declare function itemState(this: ObjectStatus, PartsStatus: string): string;
export declare function partIssueState(this: ObjectStatus, PartsIssueStatus: string): string;
export declare function partIssueStatusIcon(this: ObjectStatus, PartsIssueStatus: string): string;
export declare function partIssueStatusText(this: ObjectStatus, PartsIssueStatus: string): string;
