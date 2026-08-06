import JSONModel from "sap/ui/model/json/JSONModel";
import type { EntityActionType } from "dbme/srs/com/tdo/ext/preferredComm/model/Enums";
import type { CommConsentChannelEntity } from "dbme/srs/com/tdo/ext/preferredComm/model/IEntity";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
export type TChannelMap = Record<string, {
    items: CommConsentChannelEntity[];
    ACTION?: EntityActionType;
}>;
export type CommConsentsJSONModel = {
    smartTableId: string;
    fragmentId: string;
    fragmentName: string;
    fieldGroup: {
        Agreements: string;
    };
    locationPicked: boolean;
    channelMap: TChannelMap;
};
export declare const ConsentModel: {
    initializeUIModel(defaultData?: object): JSONModel;
    getModel(this: IDemandsAwareController): JSONModel;
};
