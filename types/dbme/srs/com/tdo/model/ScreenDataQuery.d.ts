import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { ScreenEntity } from "dbme/w/lib/core/types/IEntity";
export declare function readScreens(this: IDemandsAwareController): Promise<ScreenEntity[]>;
