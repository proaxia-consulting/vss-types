declare const Formatter: {
    formatCurrentStatus(sCurrentStatus?: string): string;
    formatOrdersListItemState(sCurrentStatus: string): string;
    dateString(date: Date, ms?: number): string;
};
/**
 * @namespace dbme.f.timeclocking.model
 */
export default Formatter;
