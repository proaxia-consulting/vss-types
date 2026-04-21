import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Event from "sap/ui/base/Event";
import Context from "sap/ui/model/Context";
import type IController from "dbme/srs/com/tdo/controller/CreateApt.controller";
import type { IReschedulingController } from "dbme/srs/com/tdo/types/IController";
import type { ListBase$SelectionChangeEvent } from "sap/m/ListBase";
declare const AllocationProposal: {
    onBtnActionAllocateSearch(this: IController, event: Event): Promise<void>;
    handleNoProposalFound(this: IReschedulingController, oError?: unknown, oAllocationSearchModel?: ODataModel, bDisplay?: boolean): void;
    /**
     * Add create allocation proposal request into Create Order batch
     */
    _createAllocationProposal(this: IController, oCtxLocal?: Context): Context | boolean;
    _destroyAllocationProposal(this: IController, vCtxLocalPath?: Context | string, bRecalculate?: boolean): Promise<void>;
    onAllocationProposalSelect(this: IController, event?: ListBase$SelectionChangeEvent): void;
};
/**
 * @namespace dbme.srs.com.tdo.helper
 */
export default AllocationProposal;
