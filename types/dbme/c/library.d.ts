/**
 * @deprecated @since 1.7.0 Use dbme.c.Enums.libraryNamespace.common instead!
 */
export declare const libraryNamespace: "dbme.c";
declare const thisLib: {
    [key: string]: unknown;
};
/**
 * @deprecated @since 1.7.0 Use the constants from the dbme.c.control.Enums instead!
 */
export declare enum ControlId {
    LogOpener = "idDBMELogBtnMessagePopoverOpener",
    LogPopover = "idDBMELogMessagePopover"
}
/**
 * @deprecated @since 1.7.0 Use the constants from the dbme.c.Enums module instead!
 */
export declare enum HttpHeaderName {
    DBMEMessage = "dbme-message"
}
/**
 * @deprecated @since 1.7.0 Use the constants from the dbme.c.model.Enums module instead!
 */
export declare enum ModelName {
    i18n = "i18n",
    log = "DBMELog",
    ui = "ui"
}
/**
 * @deprecated @since 1.7.0 Use the constants from the dbme.c.service.Enums module instead!
 */
export declare enum ServiceName {
    EntityProperties = "EntityPropertiesService"
}
/**
 * @deprecated @since 1.7.0 Use the constants from the dbme.c.service.Enums module instead!
 */
export declare enum ServiceScopeType {
    Component = "component"
}
export declare function getVersion(): string;
/**
 * @deprecated @since 1.7.0 Use dbme.c.i18n.Translate.getBundle() instead!
 */
export declare function getResourceBundle(): import("sap/base/i18n/ResourceBundle").default;
/**
 * @name dbme.c.library
 * @global
 */
export default thisLib;
