import { ActionName } from "pacg/com/dlv/model/Enums";
type TCallParamsOut = void;
/**
 * @nonui5
 */
export default class actionCommandService {
    actionExecute(actionName: ActionName, data: string): Promise<TCallParamsOut>;
}
export {};
