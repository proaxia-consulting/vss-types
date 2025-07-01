import type FioriLaunchpadContainer from "sap/ushell/Container";
import type Navigation from "sap/ushell/services/Navigation";
export type TSemanticObject = {
    intent: string;
};
export declare enum LaunchpadService {
    /** @deprecated use Navigation service */
    CrossApplicationNavigation = "CrossApplicationNavigation",
    Navigation = "Navigation"
}
export declare function getLaunchpadContainer(): FioriLaunchpadContainer | undefined;
export declare function isLaunchpad(): boolean;
/**
 * @deprecated Use dbme.c.util.FioriLaunchpad.getNavigation()
 */
export declare function getCrossApplicationNavigation(): Promise<Navigation>;
export declare function getNavigation(): Promise<Navigation>;
