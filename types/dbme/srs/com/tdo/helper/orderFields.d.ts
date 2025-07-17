import type { ISrsController } from "dbme/srs/com/tdo/types/IController";
import type { ScreenFieldEntity } from "dbme/w/lib/core/types/IEntity";
/**
 * determine UXFC for order fields
 */
declare function orderFields(this: ISrsController): Promise<ScreenFieldEntity[]>;
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default orderFields;
