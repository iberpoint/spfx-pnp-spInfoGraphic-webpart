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
            Box1List: this.properties.Box1List,
            Box1Title: this.properties.Box1Title,
            Box1Colour: this.properties.Box1Colour,
            Box2List: this.properties.Box2List,
            Box2Title: this.properties.Box2Title,
            Box2Colour: this.properties.Box2Colour,
            Box3List: this.properties.Box3List,
            Box3Title: this.properties.Box3Title,
            Box3Colour: this.properties.Box3Colour,
            Box4List: this.properties.Box4List,
            Box4Title: this.properties.Box4Title,
            Box4Colour: this.properties.Box4Colour
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
                        description: "Box #1 - Properties"
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneLabel('labelBox1Title', {
                                    text: "Box #1 - Add Title"
                                }),
                                PropertyPaneTextField('Box1Title', {
                                    label: strings.Box1Title
                                }),
                                PropertyPaneLabel('labelBox1Colour', {
                                    text: "Box #1 - Choose Colour"
                                }),
                                PropertyFieldColorPicker('Box1Colour', {
                                    label: 'Colour',
                                    selectedColor: this.properties.Box1Colour,
                                    onPropertyChange: this.onPropertyPaneFieldChanged,
                                    properties: this.properties,
                                    disabled: false,
                                    isHidden: false,
                                    alphaSliderHidden: false,
                                    style: PropertyFieldColorPickerStyle.Full,
                                    iconName: 'Precipitation',
                                    key: 'colorFieldId'
                                }),
                                PropertyPaneLabel('labelBox1List', {
                                    text: "Box #1 - Choose List"
                                }),
                                PropertyFieldListPicker('Box1List', {
                                    label: 'Choose List',
                                    selectedList: this.properties.Box1List,
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
                        description: "Box #2 - Properties"
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
                        description: "Box #3 - Properties"
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
                        description: "Box #4 - Properties"
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