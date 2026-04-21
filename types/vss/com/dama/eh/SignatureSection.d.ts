import type Event from "sap/ui/base/Event";
import type JobListSignatureDialog from "vss/com/dama/eh/JobListSignatureDialog";
declare const SignatureSection: {
    onValueClear(this: JobListSignatureDialog, event: Event): void;
    onCustomerSignatureValueChange(this: JobListSignatureDialog, event: Event): void;
    onTechnicianSignatureValueChange(this: JobListSignatureDialog, event: Event): void;
};
export default SignatureSection;
