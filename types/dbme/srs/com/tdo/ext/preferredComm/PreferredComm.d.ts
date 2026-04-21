import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
export declare function isEnabled(controller: IDemandsAwareController): Promise<boolean>;
export declare function preferredCommInitialize(c: IDemandsAwareController): void;
