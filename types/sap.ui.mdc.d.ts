/**
 * @link https://ui5.sap.com/1.96.15/resources/sap/ui/mdc/Table-dbg.js
 */
declare module "sap/ui/mdc/Table" {
	import Control from "sap/ui/core/Control";
	import ListBinding from "sap/ui/model/ListBinding";
	import ResponsiveTable from "sap/m/Table";
	import GridTable from "sap/ui/table/Table";

	export default class Table extends Control {
		_oTable: ResponsiveTable | GridTable;
		initialized(): Promise<void>;
		isTableBound(): boolean;
		getRowBinding(): ListBinding;
		getFilter(): string;
		getFilterConditions(): object;
		setFilterConditions(conditions: object): void;
	}
}

declare module "sap/ui/mdc/actiontoolbar/ActionToolbarAction" {
	import Control from "sap/ui/core/Control";
	import Button from "sap/m/Button";

	export default class ActionToolbarAction extends Control {
		getAction(): Button;
	}
}

declare module "sap/ui/mdc/ActionToolbar" {
	import OverflowToolbar from "sap/m/OverflowToolbar";
	import ActionToolbarAction from "sap/ui/mdc/actiontoolbar/ActionToolbarAction";

	export default class ActionToolbar extends OverflowToolbar {
		getActions(): ActionToolbarAction[];
	}
}

declare module "sap/ui/mdc/field/FieldInput" {
	import Input from "sap/m/Input";
	import Field from "sap/ui/mdc/Field";

	export default class FieldInput extends Input {
		getParent(): Field;
	}
}

declare module "sap/ui/mdc/field/FieldMultiInput" {
	import MultiInput from "sap/m/MultiInput";
	import MultiValueField from "sap/ui/mdc/MultiValueField";

	export default class FieldMultiInput extends MultiInput {
		getParent(): MultiValueField;
	}
}

declare module "sap/ui/mdc/Control" {
	import CoreControl from "sap/ui/core/Control";
	export default class Control extends CoreControl {}
}

declare module "sap/ui/mdc/field/FieldBase" {
	import Control from "sap/ui/mdc/Control";
	import InputBase from "sap/m/InputBase";
	import Event from "sap/ui/base/Event";

	export default class FieldBase extends Control {
		_oCreateContentPromise: Promise<InputBase> | undefined;

		attachSubmit(handler: (event: Event) => void, listener?: object): void;
		getConditions(): object[];
		setMaxConditions(max: int): void;
		getMaxConditions(): int;
		getLabel(): string;
		setLabel(label: string): void;
	}
}

declare module "sap/ui/mdc/Field" {
	import FieldBase from "sap/ui/mdc/field/FieldBase";
	import Event from "sap/ui/base/Event";

	export default class Field extends FieldBase {
		attachChange(handler: (event: Event) => void, listener?: object): void;
		setValue(value: unknown): void;
		getValue(): unknown;
		setAdditionalValue(value: unknown): void;
		getAdditionalValue(): unknown;
	}
}

declare module "sap/ui/mdc/field/MultiValueFieldItem" {
	import Element from "sap/ui/core/Element";

	export default class MultiValueFieldItem extends Element {
		getKey(): unknown;
		setKey(key: unknown): void;
		getDescription(): unknown;
		setDescription(key: unknown): void;
	}
}

declare module "sap/ui/mdc/MultiValueField" {
	import FieldBase from "sap/ui/mdc/field/FieldBase";
	import MultiValueFieldItem from "sap/ui/mdc/field/MultiValueFieldItem";

	export default class MultiValueField extends FieldBase {
		getItems(): MultiValueFieldItem[];
	}
}
