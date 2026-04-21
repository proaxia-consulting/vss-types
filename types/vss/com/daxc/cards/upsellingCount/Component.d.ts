import CardComponent from "sap/ovp/cards/charts/analytical/Component";
/**
 * @namespace vss.com.daxc.cards.upsellingCount
 */
export default class Component extends CardComponent {
    static metadata: {
        properties: {
            controllerName: {
                type: string;
                defaultValue: string;
            };
        };
    };
    init(): void;
}
