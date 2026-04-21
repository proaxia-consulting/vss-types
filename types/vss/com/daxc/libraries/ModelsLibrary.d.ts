import type LinkList from "sap/ovp/cards/linklist/LinkList.controller";
import type Controller from "sap/ui/core/mvc/Controller";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import type ResourceModel from "sap/ui/model/resource/ResourceModel";
export declare function getDefaultModel(t: Controller): ODataModel;
export declare function getI18nModel(t: LinkList): ResourceModel;
export declare function getCardTitle(t: LinkList): string;
