import { ActionName } from "../model/Enums";
type TCallParamsOut = void;
/**
 * @nonui5
 */
export default class actionCommandService {
    actionExecute(actionName: ActionName, data: string): Promise<TCallParamsOut>;
}
export {};
