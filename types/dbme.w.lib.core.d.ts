declare module "dbme/w/lib/core" {

    namespace dbme.w.lib.core {
        export enum Entityset {
            App = "CMNAppSet",
            AbsenceType = "CMNAbsenceTypeSet",
            AddressTitle = "CMNAddrTitleSet",
            AllocationInterval = "WPLIntervalSet",
            AllocationIntervalCreate = "WPLIntervalCreateSet",
            AllocationIntervalText = "WPLIntervalTextSet",
            CalendarViews = "CMNCalendarViewSet",
            Country = "CMNCountrySet",
            Demand = "WPLDemandSet",
            DemandCreate = "WPLDemandCreateSet",
            DemandRoles = "WPLDemandDDRolesSet",
            DemandType = "WPLDemandTypeSet",
            UIFilters = "CMNFiltersSet",
            HierarchyPath = "HASNodePathSet",
            Interval = "RPLIntervalSet",
            IntervalCreate = "RPLIntervalCreateSet",
            IntervalType = "CMNIntervalTypeSet",
            MakeCode = "CMNMakeSet",
            MileageUom = "CMNMileageUomSet",
            MimeTypes = "CMNMimeTypeSet",
            ModelCode = "CMNModelSet",
            OrderType = "CMNOrderTypeSet",
            PlanningMode = "WPLPlanningModeSet",
            Region = "CMNCountryRegionSet",
            Resource = "CMNResourceSet",
            ResourceAssignment = "HASAssignmentSet",
            ResourceAvatar = "CMNResourceAvatarSet",
            ResourceStatus = "CMNResourceStatusSet",
            ResourceRole = "CMNResourceRoleSet",
            ResourceType = "CMNResourceTypeSet",
            ReservationType = "CMNReservationTypeSet",
            TimeStep = "CMNTimeStepSet",
            TreeNode = "HASTreeNodeSet",
            TreeNodeCreate = "HASTreeNodeCreateSet",
            TodoAllocationProposal = "TDOAllocationProposalSet",
            TodoDecTreeItem = "TDODecisionTreeItemSet",
            TodoLocation = "TDOLocationSet",
            TodoLocationGroup = "TDOLocationGroupSet",
            TodoOrder = "TDOOrderSet",
            TodoOrderList = "TDOOrderListSet",
            TodoOrderAction = "TDOActionSet",
            TodoOrderAgreement = "TDOOrderAgreementSet",
            TodoOrderAttachment = "TDOOrderAttachmentSet",
            TodoOrderCommChannel = "TDOCommChannel",
            TodoOrderDemand = "TDODemandSet",
            TodoOrderFields = "TDOScreenFieldSet",
            TodoOrderHistory = "TDOOrderHistorySet",
            TodoOrderNote = "TDOOrderNoteSet",
            TodoOrderParameter = "TDOOrderParameterSet",
            TodoVehiCust = "TDOVehicleCustomerSet",
            TodoVehiCustSH = "TDOVehicleCustomerMDSet",
            TodoResource = "TDOResourceSet",
            TodoRole = "TDORoleSet",
            TodoStatus = "TDOStatusSet",
            TodoStatusAction = "TDOStatusActionSet", //readonly
            TodoScreens = "TDOServiceScreenSet",
            TodoServiceSection = "TDOServiceSectionSet",
            TodoServiceItem = "TDOServiceItemSet",
            TodoTimeSlot = "TDOTimeSlotsSet",
            TodoUser = "TDOUserSet",
            TodoWorkItem = "TDOWorkItemSet",
            TodoWorkshop = "TDOWorkshopSet",
            UIAppSettings = "CMNUISettingsSet", //LC based, app. backend configuration synchronousely read in Component.init()
            UserHierarchyAsgn = "CMNHierarchyAsgnSet", //user hierarchy assignment
            WorkingModel = "CMNWorkingModelSet",
            WorkingHours = "CMNWorkingHoursSet"
        }

        export enum ModelName {
			SAPOData = "SAPOData",
			HierarchyAssignment = "HAS"
		}

        export enum DBMEComponent {
			HierarchyAssignment = "HAS",
			ResourcePlanner = "RPL",
			Settings = "STS",
			TodoBasket = "TDO",
			DecisionTree = "TDT",
			WorkshopPlanner = "WPL"
		}
    }

    export default dbme.w.lib.core;
}

declare module "dbme/w/lib/core/library" {
    import ResourceBundle from "sap/base/i18n/ResourceBundle";

    export default class library {
        public static getResourceBundle(): ResourceBundle;
    }
}

declare module "dbme/w/lib/core/ui/UIComponent" {
    import { default as UICom } from "sap/ui/core/UIComponent";

    export default class UIComponent extends UICom {
        public static getDBMEComponent(): string;
        public getCurrentRouteName(): string;
        public setCurrentRouteName(name: string): void;
    }
}