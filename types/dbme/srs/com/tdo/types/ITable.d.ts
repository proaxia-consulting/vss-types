import type { TODataEntityProperty } from "dbme/c/odata/v2/entityType";
import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
import type Control from "sap/ui/core/Control";
type TSmartTableFieldMetadata = TODataEntityProperty & {
    template: Control;
};
export interface ISmartTable extends SmartTable {
    _aTableViewMetadata: TSmartTableFieldMetadata[];
}
export {};
