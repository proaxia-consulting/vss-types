declare const DateWrapper: {
    create(utc?: boolean): Date;
    fromDate(obj: Date, utc?: boolean): Date;
    fromTimeStamp(ts: number, utc?: boolean): Date;
    fromString(date: string, utc?: boolean): Date;
};
export default DateWrapper;
