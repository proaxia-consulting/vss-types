import type Event from "sap/ui/base/Event";
import type { IFormAware, ISrsController } from "dbme/srs/com/tdo/types/IController";
interface IController extends ISrsController, IFormAware {
}
declare const FieldModelCodeEventHandler: {
    onInnerControlsCreated(this: IController, event: Event): void;
};
/**
 * @namespace dbme.srs.com.tdo.eh
 */
export default FieldModelCodeEventHandler;
