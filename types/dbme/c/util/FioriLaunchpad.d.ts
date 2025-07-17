import type FioriLaunchpadContainer from "sap/ushell/Container";
import CrossApplicationNavigation from "sap/ushell/services/CrossApplicationNavigation";
export type TSemanticObject = {
    intent: string;
};
export declare enum LaunchpadService {
    CrossApplicationNavigation = "CrossApplicationNavigation"
}
export declare function getLaunchpadContainer(): FioriLaunchpadContainer | undefined;
export declare function isLaunchpad(): boolean;
export declare function getCrossApplicationNavigation(): Promise<CrossApplicationNavigation> | undefined;
