import AppComponent from "sap/fe/core/AppComponent";
import type { TUserOrgData } from "com/pacg/taskcenter/types/EntitySet";
/**
 * @namespace com.pacg.taskcenter
 */
export default class Component extends AppComponent {
    static metadata: {
        manifest: string;
    };
    init(): void;
    exit(): void;
    updateUserOrgData(): Promise<TUserOrgData>;
    getSinglePageMode(): boolean;
    handleTaskDetailError(): Component;
    getOrgData(): Promise<TUserOrgData>;
    setOrgData(orgData: Partial<TUserOrgData>): TUserOrgData;
    private _getFcl;
    private _singlePageMode;
    private _userOrgData;
}
