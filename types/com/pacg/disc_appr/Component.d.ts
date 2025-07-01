import UIComponent from "sap/ui/core/UIComponent";
import type { TSrvRequest, TSrvResponse } from "./model/types";
import RemoteMethodCall from "./model/RemoteMethodCall";
/**
 * @namespace com.pacg.disc_appr
 */
export default class Component extends UIComponent {
    static metadata: {
        manifest: string;
    };
    private contentDensityClass;
    private api;
    init(): void;
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @returns css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass(): string;
    /**
     * Returns API service caller instance for application
     * @public
     */
    getApi(): RemoteMethodCall<TSrvRequest, TSrvResponse>;
}
