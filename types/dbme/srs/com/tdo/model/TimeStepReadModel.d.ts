import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
export interface IStepData {
    step: number;
}
export declare const DEFAULT_MIN_STEP = 30;
declare const TimeStepReadModel: {
    read(this: ISrsController, hierarchyId?: string[]): Promise<IStepData>;
};
/**
 * @namespace dbme.srs.com.tdo.model
 */
export default TimeStepReadModel;
