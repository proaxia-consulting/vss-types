import type { ScreenEntity } from "dbme/w/lib/core/types/IEntity";
import { TabKey } from "dbme/srs/com/tdo/model/Enums";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
import type { IScreen } from "dbme/srs/com/tdo/types/ITabsAware";
export declare function readScreens(this: IDemandsAwareController): Promise<ScreenEntity[]>;
/**
 * Predefined Tabs getter function. It caches the Map for later use, so any modification to Map's objects persist. Use `forceReload` parameter to delete cache and get initial Map.
 * @param forceReload Refreshes Tabs Map to its initial state
 * @returns Map of predefined tabs
 */
export declare function getPredefinedTabsMap(createMode?: boolean, forceReload?: boolean): Map<TabKey, IScreen>;
export declare function destroyPredefinedTabsMap(): boolean;
