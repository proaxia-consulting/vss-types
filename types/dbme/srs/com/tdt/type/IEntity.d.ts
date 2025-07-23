export type DecisionTreeItemEntity = {
    LBRCAT: string;
    LBRVAL: string;
    LBRVAL_ID: string;
    DET_GROUP?: string;
    MAKE_CODE?: string;
    MODEL_CODE?: string;
    BEZEI: string;
    TEXT?: string;
    LEVEL?: number;
    M_EXCL?: boolean;
};
export type OrderEntity = {
    MAKE_CODE: string;
    MODEL_CODE: string;
};
export type ScreenSectionEntity = {
    SECTION_NO?: string;
    SECTION_TYPE?: string;
    SCRNUM?: string;
    SECTION_URL?: string;
    SECTION_NAME?: string;
    DET_GROUP?: string;
};
type BreadCrumbItemLocalEntity = DecisionTreeItemEntity & {
    id: string;
    title: string;
    text?: string;
};
export type BreadCrumbLocalEntity = {
    Current: BreadCrumbItemLocalEntity;
    Items: BreadCrumbItemLocalEntity[];
};
export {};
