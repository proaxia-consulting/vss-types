import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
import type { TEquipmentEntity } from "vss/com/rcl/types/EntitySet";
/**
 * @nonui5
 */
export default class SubEquipmentSectionExtension extends AbstractObjectPageExtension<TEquipmentEntity> {
    protected run(): void;
    private _initTableEvents;
}
