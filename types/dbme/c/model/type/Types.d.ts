import DateType from "dbme/c/model/type/Date";
import DateTime from "dbme/c/model/type/DateTime";
import DateTimeUTC from "dbme/c/model/type/DateTimeUTC";
import Email from "dbme/c/model/type/Email";
import Mileage from "dbme/c/model/type/Mileage";
import Percent from "dbme/c/model/type/Percent";
import PercentAC from "dbme/c/model/type/PercentAC";
import Phone from "dbme/c/model/type/Phone";
import VIN from "dbme/c/model/type/VIN";
import NotEmptyString from "dbme/c/model/type/NotEmptyString";
declare const Types: {
    Date: typeof DateType;
    DateTime: typeof DateTime;
    DateTimeUTC: typeof DateTimeUTC;
    Email: typeof Email;
    Mileage: typeof Mileage;
    Percent: typeof Percent;
    PercentAC: typeof PercentAC;
    Phone: typeof Phone;
    VIN: typeof VIN;
    NotEmptyString: typeof NotEmptyString;
};
/**
 * @namespace dbme.c.model.type
 * @global
 */
export default Types;
