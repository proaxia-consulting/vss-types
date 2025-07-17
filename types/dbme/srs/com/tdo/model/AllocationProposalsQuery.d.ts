import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type { IAllocationProposalData } from "dbme/srs/com/tdo/types/IEntity";
type TProposal = {
    proposals: IAllocationProposalData[];
};
/**
 * @nonui5
 * @namespace dbme.srs.com.tdo.model
 */
export default class AllocationProposalsQuery {
    private _model;
    constructor(_model: ODataModel);
    submit(sBatchGroupId: string): Promise<TProposal>;
}
export {};
