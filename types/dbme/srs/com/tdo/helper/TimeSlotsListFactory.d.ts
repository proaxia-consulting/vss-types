import List from "sap/m/List";
import type { IOrderAwareController as IController } from "dbme/srs/com/tdo/types/IController";
import TimeSlotsContainer from "dbme/srs/com/tdo/helper/TimeSlotsContainer";
import type Control from "sap/ui/core/Control";
import type { IOrderParameterEntity } from "dbme/srs/com/tdo/types/IEntity";
declare const TimeSlotsListFactory: {
    create(this: IController, oData: IOrderParameterEntity): List;
    destroy(listContainer: TimeSlotsContainer, orderParameterControl: Control): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default TimeSlotsListFactory;
