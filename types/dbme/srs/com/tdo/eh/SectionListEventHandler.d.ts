import type { ListBase$UpdateFinishedEvent } from "sap/m/ListBase";
import type { ITabsAware } from "dbme/srs/com/tdo/types/ITabsAware";
declare const SectionListEventHandler: {
    /**
     * Hide tab if no list items been found.
     * Relevant only for the following tabs:
     * - Parameters
     * - Agrrements
     */
    onUpdateFinished(this: ITabsAware, event: ListBase$UpdateFinishedEvent, tabKey: string): void;
};
/**
 * @namespace dbme.srs.com.tdo.eh
 */
export default SectionListEventHandler;
