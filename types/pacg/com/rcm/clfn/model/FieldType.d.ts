import type ODataType from "sap/ui/model/odata/type/ODataType";
import type { TCharcEntity } from "vss/com/rcl/types/EntitySet";
declare const FieldType: {
    fromEntity(charc: TCharcEntity): ODataType;
    primitiveType(charc: TCharcEntity): string;
};
/**
 * @namespace pacg.com.rcm.clfn.model
 */
export default FieldType;
