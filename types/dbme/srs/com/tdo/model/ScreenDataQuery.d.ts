import type { ScreenEntity } from "dbme/w/lib/core/types/IEntity";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
export declare function readScreens(this: IDemandsAwareController): Promise<ScreenEntity[]>;
