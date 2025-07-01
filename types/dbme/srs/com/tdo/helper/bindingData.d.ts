import type ManagedObject from "sap/ui/base/ManagedObject";
import type Controller from "sap/ui/core/mvc/Controller";
/**
 * Get order data replacing all undefined properties with empty string
 */
export default function bindingData(this: Controller | ManagedObject): Record<string, unknown>;
