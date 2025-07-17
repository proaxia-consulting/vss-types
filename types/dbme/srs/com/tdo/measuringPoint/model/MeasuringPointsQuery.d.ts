import Filter from "sap/ui/model/Filter";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { MeasuringPointEntity } from "dbme/srs/com/tdo/measuringPoint/model/IEntity";
export declare function createFilters(this: IDemandsAwareController): Filter[];
export declare function readMeasuringPoints(this: IDemandsAwareController): Promise<MeasuringPointEntity[]>;
