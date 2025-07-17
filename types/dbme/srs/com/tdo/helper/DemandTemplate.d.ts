import SmartField from "sap/ui/comp/smartfield/SmartField";
import ColumnListItem from "sap/m/ColumnListItem";
import Table from "sap/m/Table";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
declare const DemandTemplate: {
    getDemandTemplate(this: IDemandsAwareController, bRecalc?: boolean): Promise<ColumnListItem>;
    getDemandsTable(this: IDemandsAwareController, bRecalc?: boolean): Table;
    getDemandTableFields(this: IDemandsAwareController): Promise<SmartField[]>;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default DemandTemplate;
