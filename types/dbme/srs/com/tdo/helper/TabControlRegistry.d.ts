import type ManagedObject from "sap/ui/base/ManagedObject";
declare const TabControlRegistry: {
    register(id: string, control: ManagedObject): void;
    destroy(): void;
};
export default TabControlRegistry;
