import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { SmartTable$BeforeRebindTableEvent, SmartTable$InitialiseEvent } from "sap/ui/comp/smarttable/SmartTable";
export declare function measuringPointInitialize(c: IDemandsAwareController): void;
export declare function onTableInit(this: IDemandsAwareController, event: SmartTable$InitialiseEvent): void;
export declare function onBeforeRebindTable(this: IDemandsAwareController, event: SmartTable$BeforeRebindTableEvent): void;
