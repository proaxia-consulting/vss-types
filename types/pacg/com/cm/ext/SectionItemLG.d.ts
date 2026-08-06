import AbstractObjectPageExtension from "vss/com/rcl/templates/ObjectPage/AbstractObjectPageExtension";
import type { TDocumentEntity } from "pacg/com/cm/types/EntitySet";
export default class SectionItemLG extends AbstractObjectPageExtension<TDocumentEntity> {
    protected run(): void;
    /**
     * macros:Table hardcodes $$groupId: '$auto.Workers' for all row bindings (TableHelper.getRowsBindingInfo).
     * The binding attribute on the macro element only sets a context binding on the outer TableAPI wrapper
     * and has no effect on the actual OData list request.
     *
     * This method intercepts the bindingUpdated event (fires synchronously after the list binding is
     * created but before OData V4 flushes its async batch queue) and redirects the request to '$direct',
     * making it a standalone HTTP request independent of other tables.
     *
     * The section lazyLoading:true (manifest.json) ensures the section is not rendered on initial
     * page load. Since the section may not yet exist in the component tree at onInit time, we re-check
     * on every afterRendering until fioriTable() resolves successfully.
     */
    private _changeItemLGTableBinding;
}
