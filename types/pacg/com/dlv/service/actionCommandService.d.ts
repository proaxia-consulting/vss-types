import { ActionName } from "../model/Enums";
type TCallParamsOut = void;
export default class actionCommandService {
    actionExecute(actionName: ActionName, data: string): Promise<TCallParamsOut>;
}
export {};
