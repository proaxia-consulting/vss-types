import type IconTabBar from "sap/m/IconTabBar";
import type List from "sap/m/List";
import type VerticalLayout from "sap/ui/layout/VerticalLayout";
/**
 * @nonui5
 * @namespace dbme.srs.com.tdo.helper
 */
export default class TimeSlotsContainer {
    private container?;
    parameterTimeSlotsList: Map<string, string>;
    constructor(container?: IconTabBar | VerticalLayout);
    setContainer(container: IconTabBar | VerticalLayout): void;
    addContent(child: List): void;
    removeContent(child: List): void;
}
