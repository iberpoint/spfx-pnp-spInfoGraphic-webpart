import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISpInfoGraphicWebPartProps {
    Box1List: string;
    Box1Title: string;
    Box1Colour: string;
    Box2List: string;
    Box2Title: string;
    Box2Colour: string;
    Box3List: string;
    Box3Title: string;
    Box3Colour: string;
    Box4List: string;
    Box4Title: string;
    Box4Colour: string;
}
export default class SpInfoGraphicWebPart extends BaseClientSideWebPart<ISpInfoGraphicWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected onPropertyPaneFieldChanged(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpInfoGraphicWebPart.d.ts.map