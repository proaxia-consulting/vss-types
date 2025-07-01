import BaseControl from "sap/m/PlanningCalendarRow";
/**
 * @namespace dbme.w.lib.core.control
 */
export default class PlanningCalendarRow extends BaseControl {
    static metadata: {
        events: {
            controlDrop: {
                parameters: {
                    /**
                     * The dragged control
                     */
                    dragControl: {
                        type: string;
                    };
                    /**
                     * The drop target
                     */
                    calendarRow: {
                        type: string;
                    };
                    /**
                     * Start date of the drop target, as a JavaScript date object.
                     */
                    startDate: {
                        type: string;
                    };
                    /**
                     * End date of the drop target, as a JavaScript date object.
                     */
                    endDate: {
                        type: string;
                    };
                };
            };
            controlDragEnter: {
                parameters: {
                    /**
                     * The dragged control
                     */
                    dragControl: {
                        type: string;
                    };
                    /**
                     * The drop target
                     */
                    calendarRow: {
                        type: string;
                    };
                    /**
                     * Start date of the drop target, as a JavaScript date object.
                     */
                    startDate: {
                        type: string;
                    };
                    /**
                     * End date of the drop target, as a JavaScript date object.
                     */
                    endDate: {
                        type: string;
                    };
                };
            };
        };
        aggregations: {
            appointments: {
                type: string;
                multiple: boolean;
                singularName: string;
                dnd: {
                    draggable: boolean;
                };
            };
        };
    };
    fireControlDrop: (params: object) => void;
    fireControlDragEnter: (params: object) => void;
}
