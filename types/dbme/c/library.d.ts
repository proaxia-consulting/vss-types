import type ResourceBundle from "sap/base/i18n/ResourceBundle";
/**
 * @deprecated @since 1.5.14 Use the constants from the dbme.c.Enums instead!
 */
export declare const libraryNamespace = "dbme.c";
declare const thisLib: {
    [key: string]: unknown;
};
/**
 * @deprecated @since 1.5.14 Use the constants from the dbme.c.control.Enums instead!
 */
export declare enum ControlId {
    LogOpener = "idDBMELogBtnMessagePopoverOpener",
    LogPopover = "idDBMELogMessagePopover"
}
/**
 * @deprecated @since 1.5.14 Use the constants from the dbme.c.Enums module instead!
 */
export declare enum HttpHeaderName {
    DBMEMessage = "dbme-message"
}
/**
 * @deprecated @since 1.5.14 Use the constants from the dbme.c.model.Enums module instead!
 */
export declare enum ModelName {
    i18n = "i18n",
    log = "DBMELog",
    ui = "ui"
}
/**
 * @deprecated @since 1.5.14 Use the constants from the dbme.c.service.Enums module instead!
 */
export declare enum ServiceName {
    EntityProperties = "EntityPropertiesService"
}
/**
 * @deprecated @since 1.5.14 Use the constants from the dbme.c.service.Enums module instead!
 */
export declare enum ServiceScopeType {
    Component = "component"
}
export declare function getVersion(): string;
/**
 * @deprecated @since 1.5.14 Use dbme.c.Translate.getResourceBundle() instead!
 */
export declare function getResourceBundle(): ResourceBundle;
/**
 * @name dbme.c.library
 * @global
 */
export default thisLib;
