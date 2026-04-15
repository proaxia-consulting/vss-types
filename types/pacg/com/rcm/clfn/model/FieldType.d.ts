import type ODataType from "sap/ui/model/odata/type/ODataType";
import type { TCharcEntity } from "vss/com/rcl/types/EntitySet";
/**
 * @namespace pacg.com.rcm.clfn.model
 */
export default class FieldType {
    static fromEntity(charc: TCharcEntity): ODataType;
}
