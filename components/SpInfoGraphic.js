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
import styles from './SpInfoGraphic.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from 'sp-pnp-js';
var SpInfoGraphic = /** @class */ (function (_super) {
    __extends(SpInfoGraphic, _super);
    function SpInfoGraphic(props, any) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            depitems: 0,
            verilisteitems: 0,
            birimitems: 0
        };
        return _this;
    }
    SpInfoGraphic.prototype.render = function () {
        return (React.createElement("div", { className: styles.spInfoGraphic },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { style: { backgroundColor: escape(this.props.Kutu1Renk) }, className: styles.blue },
                        React.createElement("span", { className: styles.departman_span1 }, this.state.depitems),
                        React.createElement("span", { className: styles.departman_span2 },
                            escape(this.props.Kutu1Baslik),
                            " ")),
                    React.createElement("div", { className: styles.normalblue },
                        React.createElement("span", { className: styles.birim_span1 }, this.state.birimitems),
                        React.createElement("span", { className: styles.birim_span2 }, "Birim")),
                    React.createElement("div", { className: styles.lightblue },
                        React.createElement("span", { className: styles.kisiselveri_span1 }, this.state.verilisteitems),
                        React.createElement("span", { className: styles.kisiselveri_span2 }, "Ki\u015Fisel Veri"))))));
    };
    SpInfoGraphic.prototype.componentDidMount = function () {
        debugger;
        this._getListCustomerData();
    };
    SpInfoGraphic.prototype._getListCustomerData = function () {
        var _this = this;
        pnp.sp.web.lists.getById(this.props.Kutu1Liste).get().then(function (result) { return _this.setState({ depitems: result.ItemCount }); });
        pnp.sp.web.lists.getById('Birim Listesi').get().then(function (result) { return _this.setState({ birimitems: result.ItemCount }); });
        pnp.sp.web.lists.getById('Kişisel Veri Listesi').get().then(function (result) { return _this.setState({ verilisteitems: result.ItemCount }); });
        //sessionStorage.setItem("departman_adet",result.ItemCount)  
    };
    return SpInfoGraphic;
}(React.Component));
export default SpInfoGraphic;
//# sourceMappingURL=SpInfoGraphic.js.map