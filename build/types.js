"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommandlineArgument;
(function (CommandlineArgument) {
    CommandlineArgument["bundle"] = "bundle";
    CommandlineArgument["webComponent"] = "webComponent";
})(CommandlineArgument = exports.CommandlineArgument || (exports.CommandlineArgument = {}));
var ShortCommandlineArgument;
(function (ShortCommandlineArgument) {
    ShortCommandlineArgument["bundle"] = "b";
    ShortCommandlineArgument["webComponent"] = "w";
})(ShortCommandlineArgument = exports.ShortCommandlineArgument || (exports.ShortCommandlineArgument = {}));
;
var CommandlineArgumentDescription;
(function (CommandlineArgumentDescription) {
    CommandlineArgumentDescription["webComponent"] = "Create Web Component Project";
})(CommandlineArgumentDescription = exports.CommandlineArgumentDescription || (exports.CommandlineArgumentDescription = {}));
var DataAttribute;
(function (DataAttribute) {
})(DataAttribute = exports.DataAttribute || (exports.DataAttribute = {}));
exports.commandlineArgumentDescription = {
    webComponent: CommandlineArgumentDescription.webComponent,
    w: CommandlineArgumentDescription.webComponent
};
//# sourceMappingURL=types.js.map