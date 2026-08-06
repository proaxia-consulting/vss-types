import type ActionSheet from "sap/m/ActionSheet";
import type Button from "sap/m/Button";
import type ColumnListItem from "sap/m/ColumnListItem";
import type Dialog from "sap/m/Dialog";
import type IconTabBar from "sap/m/IconTabBar";
import type Table from "sap/m/Table";
import type VBox from "sap/m/VBox";
import type SmartForm from "sap/ui/comp/smartform/SmartForm";
import type SmartTable from "sap/ui/comp/smarttable/SmartTable";
import type JSONModel from "sap/ui/model/json/JSONModel";
import type ODataModel from "sap/ui/model/odata/v2/ODataModel";
import BaseController from "dbme/s/act/doc/controller/BaseController";
/**
 * @abstract
 * @controller
 * @namespace dbme.s.act.doc.controller
 */
export default abstract class DocumentMaintAbstract extends BaseController {
    static metadata: object;
    readonly NEW_DOCNR: string;
    readonly ENTITY_NAME: {
        ODvhIdSet: string;
    };
    readonly ENTITY_SET: {
        simpleParameter: string;
        itemType: string;
        docTypeFieldAttr: string;
        itemTypeFieldAttr: string;
        vgmGeneralConfig: string;
        docnrCreated: string;
        headerData: string;
        itemData: string;
        itemProposal: string;
        itemsTableColumns: string;
        actionObject: string;
        actionDeterminationSet: string;
        actionSet: string;
        custVehSearch: string;
        region: string;
        storageLocation: string;
        storageBin: string;
        storageBinItemType: string;
        attachments: string;
        dvhId: string;
    };
    readonly ENTITY_TYPE: {
        simpleParameter: string;
        itemType: string;
        docTypeFieldAttr: string;
        itemTypeFieldAttr: string;
        vgmGeneralConfig: string;
        docnrCreated: string;
        headerData: string;
        itemData: string;
        itemsTableColumns: string;
        actionObject: string;
        actionDeterminationSet: string;
        actionSet: string;
        custVehSearch: string;
    };
    readonly GROUP_ID: {
        main: string;
        docRead: string;
        itemProposal: string;
        custVehSearch: string;
    };
    readonly CHANGE_SET_ID: {
        main: string;
        docRead: string;
        itemProposal: string;
    };
    readonly OPERATION_MODE: {
        create: "N";
        change: "C";
        display: "D";
        action: "A";
    };
    readonly ACTION_TYPE: {
        create: "N";
        change: "C";
        display: "D";
        action: "A";
    };
    readonly ACTION_LEVEL: {
        document: "D";
        header: "H";
        item: "I";
    };
    readonly HEADER_FIELD_GROUP: {
        others: string;
        businessPartner: string;
        vehicle: string;
    };
    readonly SIMPLE_PARAM: {
        actionRead: string;
        actionSave: string;
        refDocNr: string;
    };
    protected oUxfcFields: {
        header: Record<string, string>;
        items: Record<string, string>;
    };
    protected docTypeFieldAttr?: object;
    protected itemTypeFieldAttr?: object;
    protected oVGMGeneralConfig?: {
        DefActCrea: string;
        DefActChng: string;
        DefActDisp: string;
        DefActMaint: string;
    };
    protected oUIHeader?: SmartForm;
    protected oUIItems?: Table;
    protected oUIItemDetails?: SmartForm;
    protected _oUIItemsArea?: VBox;
    protected _oUIItemDetailsArea?: VBox;
    protected _oUIIconTabBar?: IconTabBar;
    protected _oModelDoc?: ODataModel;
    /**
     * @type {dbme.s.lib.class.BatchHandler}
     */
    protected _batchHandlerDoc?: object;
    protected _oModelCMD?: ODataModel;
    protected _oActionsAttr?: Record<string, object>;
    protected _oUIActionSelectButton: Button;
    protected _oUIActionSelectActionSheet: ActionSheet;
    protected _oUIItemAddButton: Button;
    protected _oUIItemAddActionSheet?: ActionSheet;
    protected _oUIActionHistoryST?: SmartTable;
    protected _oItemsTemplate?: ColumnListItem;
    protected _iNewItemCounter?: number;
    protected _oDvhModel?: JSONModel;
    protected viewCtrl: {
        operationMode: string;
        editable: boolean;
        docnr: string;
        vgmAction: string;
        vgmActionDescription: string;
        vgmActionIcon: string;
        changedIndicator: string;
        fieldGroupIdForInput: string;
        headerTxtCounter: number;
        buttonDvh: boolean;
        showHeaderTitle: boolean;
    };
    protected _oCustVehSearchTableSelectDialog?: Dialog;
    protected _oCustVehSearchLineTemplate?: ColumnListItem;
    protected _eventDelegates: Record<string, (...args: unknown[]) => void>;
    onInit(): void;
}
