import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type ListItemBase from "sap/m/ListItemBase";
import type { IDemandsAwareController, IReschedulingController as IReschedulingControllerBase } from "dbme/srs/com/tdo/types/IController";
type IController = {
    _setDateEnabled?: () => Promise<void>;
} & IDemandsAwareController;
type IReschedulingController = {} & IReschedulingControllerBase & IController;
declare const ParametersListEventHandler: {
    /**
     * @since 2021.09.12
     * @see ListParameters.fragment.xml, ListParametersCreate.fragment.xml
     *
     * Handle default selected parameters on Parameters tab
     */
    onUpdateFinished(this: IController, event: ListBase$UpdateFinishedEvent): void;
    /**
     * @since 2021.09.10
     * @see FormOrderDateParameters.fragment.xml
     *
     * Handle default selected parameters on Date tab. Relevant for:
     * - order create
     * - order action: reschedule
     */
    onUpdateFinishedForDate(this: IReschedulingController, event: ListBase$UpdateFinishedEvent): void;
    onOrderParameterChange(this: IController, parameterControl: ListItemBase): void;
};
/**
 * @namespace dbme.srs.com.tdo.eh
 */
export default ParametersListEventHandler;
