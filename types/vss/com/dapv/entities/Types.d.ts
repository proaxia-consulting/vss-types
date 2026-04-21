export type AvailabilityBar = {
    posted: {
        value: int;
        color: string;
    };
    open: {
        value: int;
        color: string;
    };
    purchase: {
        value: int;
        color: string;
    };
    stock: {
        value: int;
        color: string;
    };
};
export type AvailabilityBarStatus = "posted" | "open" | "purchase" | "stock";
export type AvailabilityBarProperty = "value" | "color";
