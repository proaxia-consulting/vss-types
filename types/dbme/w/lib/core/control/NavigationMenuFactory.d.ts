import Menu from "sap/ui/unified/Menu";
import type { IModelAwareController } from "dbme/w/lib/core/types/IController";
declare const NavigationMenuFactory: {
    createForward(this: IModelAwareController): Menu;
};
/**
 * @name dbme.w.lib.core.control
 */
export default NavigationMenuFactory;
