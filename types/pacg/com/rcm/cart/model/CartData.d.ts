import type Context from "sap/ui/model/odata/v4/Context";
import type ODataModel from "sap/ui/model/odata/v4/ODataModel";
import type { TRootEntity } from "vss/com/rcl/types/EntitySet";
export declare function requestRoot(sourceContext: Context, model?: ODataModel): Promise<TRootEntity>;
