import CardComponent from "sap/ovp/cards/linklist/Component";
/**
 * @namespace vss.com.daxc.cards.myAppointments
 */
export default class Component extends CardComponent {
    static metadata: {
        properties: {
            controllerName: {
                type: string;
                defaultValue: string;
            };
            contentFragment: {
                type: string;
                defaultValue: string;
            };
            headerExtensionFragment: {
                type: string;
                defaultValue: string;
            };
        };
    };
    init(): void;
}
