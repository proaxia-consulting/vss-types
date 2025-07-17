import Filter from "sap/ui/model/Filter";
import Context from "sap/ui/model/odata/v4/Context";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import { EntitySet } from "../model/Enums";
export type TOrderItem = {
    Material: string;
    Material_Text: string;
    MaterialBaseUnit: string;
    MaterialGroup: string;
    MaterialManufacturerNumber: string;
    MaterialManufacturerPartNumber: string;
    MaterialType: string;
};
export type TPersonsEntity = {
    personalNumber: string;
    plant: string;
    checkPin: boolean;
    corrLogon: boolean;
    token: string;
    clock_in_date: string;
    clock_in_time: string;
    ename: string;
    event_start_date: string;
    event_start_time: string;
    name1: string;
    status_t: string;
    tc_order_key: string;
    tc_order_type: string;
    eventTypeMark: string;
    tc_pin_correct: boolean;
    tc_pin_post: boolean;
    tevent_type: string;
    tevent_type_t: string;
    vkorg: string;
    vtext: string;
    werks: string;
};
/**
 * @namespace vss.com.dama.service
 */
export default class mechanicAppService {
    private model;
    private person;
    constructor(model: ODataModel);
    /**
     * getPerson
     */
    getPerson(): Promise<TPersonsEntity>;
    /**
     * getCurrentPerson
     */
    getCurrentPerson(refresh?: boolean): Promise<TPersonsEntity>;
    /**
     * getEntityCounter
     */
    getEntityCounter(path: string, entitySet: EntitySet): Promise<number>;
    getEntityList(path: string, entitySet: EntitySet, filter?: Filter): Promise<Context[]>;
    getPartDetails(part: string): Promise<TOrderItem>;
}
