"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandlineArgument;
(function (CommandlineArgument) {
    CommandlineArgument["bundle"] = "bundle";
    CommandlineArgument["webComponent"] = "webComponent";
    CommandlineArgument["jsonLd"] = "json-ld";
})(CommandlineArgument = exports.CommandlineArgument || (exports.CommandlineArgument = {}));
var ShortCommandlineArgument;
(function (ShortCommandlineArgument) {
    ShortCommandlineArgument["bundle"] = "b";
    ShortCommandlineArgument["webComponent"] = "w";
    ShortCommandlineArgument["jsonLd"] = "j";
})(ShortCommandlineArgument = exports.ShortCommandlineArgument || (exports.ShortCommandlineArgument = {}));
;
var CommandlineArgumentDescription;
(function (CommandlineArgumentDescription) {
    CommandlineArgumentDescription["bundle"] = "Bundle Project";
    CommandlineArgumentDescription["webComponent"] = "Create Web Component Project";
    CommandlineArgumentDescription["jsonLd"] = "Create Javascript Object Notation for Linked Data Project";
})(CommandlineArgumentDescription = exports.CommandlineArgumentDescription || (exports.CommandlineArgumentDescription = {}));
var DataAttribute;
(function (DataAttribute) {
})(DataAttribute = exports.DataAttribute || (exports.DataAttribute = {}));
var BrowserTarget;
(function (BrowserTarget) {
    BrowserTarget[BrowserTarget["es2015"] = 0] = "es2015";
})(BrowserTarget = exports.BrowserTarget || (exports.BrowserTarget = {}));
exports.commandlineArgumentDescription = {
    webComponent: CommandlineArgumentDescription.webComponent,
    w: CommandlineArgumentDescription.webComponent
};
//# sourceMappingURL=types.js.map