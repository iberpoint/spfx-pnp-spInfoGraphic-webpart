var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyFieldColorPicker, PropertyFieldColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldColorPicker';
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import { BaseClientSideWebPart, PropertyPaneTextField, PropertyPaneLabel } from '@microsoft/sp-webpart-base';
import * as strings from 'SpInfoGraphicWebPartStrings';
import SpInfoGraphic from './components/SpInfoGraphic';
var SpInfoGraphicWebPart = /** @class */ (function (_super) {
    __extends(SpInfoGraphicWebPart, _super);
    function SpInfoGraphicWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpInfoGraphicWebPart.prototype.render = function () {
        var element = React.createElement(SpInfoGraphic, {
            Kutu1Liste: this.properties.Kutu1Liste,
            Kutu1Baslik: this.properties.Kutu1Baslik,
            Kutu1Renk: this.properties.Kutu1Renk,
            Kutu2Liste: this.properties.Kutu2Liste,
            Kutu2Baslik: this.properties.Kutu2Baslik,
            Kutu2Renk: this.properties.Kutu2Renk,
            Kutu3Liste: this.properties.Kutu3Liste,
            Kutu3Baslik: this.properties.Kutu3Baslik,
            Kutu3Renk: this.properties.Kutu3Renk,
            Kutu4Liste: this.properties.Kutu4Liste,
            Kutu4Baslik: this.properties.Kutu4Baslik,
            Kutu4Renk: this.properties.Kutu4Renk
        });
        ReactDom.render(element, this.domElement);
    };
    SpInfoGraphicWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(SpInfoGraphicWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SpInfoGraphicWebPart.prototype.onPropertyPaneFieldChanged = function () {
        var myChild = new SpInfoGraphic(this.properties, "");
        myChild._getListCustomerData();
    };
    SpInfoGraphicWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Kutu #1 - Özellikler"
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneLabel('labelKutu1Baslik', {
                                    text: "Kutu #1 - Başlık Ekle"
                                }),
                                PropertyPaneTextField('Kutu1Baslik', {
                                    label: strings.Kutu1Baslik
                                }),
                                PropertyPaneLabel('labelKutu1Renk', {
                                    text: "Kutu #1 - Renk Seç"
                                }),
                                PropertyFieldColorPicker('Kutu1Renk', {
                                    label: 'Color',
                                    selectedColor: this.properties.Kutu1Renk,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    isHidden: false,
                                    alphaSliderHidden: false,
                                    style: PropertyFieldColorPickerStyle.Full,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                }),
                                PropertyPaneLabel('labelKutu1Liste', {
                                    text: "Kutu #1 - Liste Seç"
                                }),
                                PropertyFieldListPicker('Kutu1Liste', {
                                    label: 'Liste Seç',
                                    selectedList: this.properties.Kutu1Liste,
                                    includeHidden: false,
                                    orderBy: PropertyFieldListPickerOrderBy.Title,
                                    disabled: false,
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    properties: this.properties,
                                    context: this.context,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'listPickerFieldId'
                                })
                            ]
                        }
                    ]
                },
                {
                    header: {
                        description: "Kutu #2 - Özellikler"
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: []
                        }
                    ]
                },
                {
                    header: {
                        description: "Kutu #3 - Özellikler"
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: []
                        }
                    ]
                },
                {
                    header: {
                        description: "Kutu #4 - Özellikler"
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: []
                        }
                    ]
                }
            ]
        };
    };
    return SpInfoGraphicWebPart;
}(BaseClientSideWebPart));
export default SpInfoGraphicWebPart;
//# sourceMappingURL=SpInfoGraphicWebPart.js.map