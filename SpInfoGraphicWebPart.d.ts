import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISpInfoGraphicWebPartProps {
    Kutu1Liste: string;
    Kutu1Baslik: string;
    Kutu1Renk: string;
    Kutu2Liste: string;
    Kutu2Baslik: string;
    Kutu2Renk: string;
    Kutu3Liste: string;
    Kutu3Baslik: string;
    Kutu3Renk: string;
    Kutu4Liste: string;
    Kutu4Baslik: string;
    Kutu4Renk: string;
}
export default class SpInfoGraphicWebPart extends BaseClientSideWebPart<ISpInfoGraphicWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected onPropertyPaneFieldChanged(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SpInfoGraphicWebPart.d.ts.map