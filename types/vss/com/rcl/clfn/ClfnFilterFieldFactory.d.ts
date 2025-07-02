import Label from "sap/m/Label";
import type { TCharcEntity } from "vss/com/rcl/types/EntitySet";
import MultiInput from "sap/m/MultiInput";
import MultiComboBox from "sap/m/MultiComboBox";
export declare function createCharcLabel(charcData: TCharcEntity, labelFor?: string, bindingPath?: string): Label;
export declare function createCharcField(charcData: TCharcEntity, id?: string, bindingPath?: string): MultiInput | MultiComboBox;
