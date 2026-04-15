import AppComponent from "sap/fe/core/AppComponent";
/**
 * @namespace vss.com.rcl.component
 */
export default abstract class AppComponentAbstract extends AppComponent {
    static metadata: object;
    exit(): void;
    destroy(bSuppressInvalidate?: boolean): void;
}
