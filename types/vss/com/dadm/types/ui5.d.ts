declare module "sap/m/TextRenderer" {
    import Text from "sap/m/Text";
    import RenderManager from "sap/ui/core/RenderManager";
    export default class TextRenderer {
        static render(oRm: RenderManager, oPC: Text): void;
    }
}
