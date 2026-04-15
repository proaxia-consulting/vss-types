import type { ScreenFieldEntity } from "dbme/w/lib/core/types/IEntity";
import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
/**
 * determine UXFC for order fields
 */
declare function orderFields(this: ISrsController): Promise<ScreenFieldEntity[]>;
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default orderFields;
