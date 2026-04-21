import type Filter from "sap/ui/model/Filter";
import type { CommConsentChannelEntity, CommunicationConsentEntity } from "dbme/srs/com/tdo/ext/preferredComm/model/IEntity";
import type { IDemandsAwareController } from "dbme/srs/com/tdo/types/IController";
export type PendingChanges = Record<string, ObjectMetadataAware>;
export type ObjectMetadataAware = object & {
    __metadata: unknown;
};
export declare function createFilters(this: IDemandsAwareController): Filter[];
export declare function findPendingChangesForEntity(this: object, entitySet: string): PendingChanges;
export declare function parseConsentEntityFromPath(path: string): CommunicationConsentEntity;
export declare function parseChannelEntityFromPath(path: string): CommConsentChannelEntity;
