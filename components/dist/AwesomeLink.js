"use strict";
exports.__esModule = true;
exports.AwesomeLink = void 0;
var react_1 = require("react");
exports.AwesomeLink = function (_a) {
    var imageUrl = _a.imageUrl, url = _a.url, title = _a.title, category = _a.category, description = _a.description, id = _a.id;
    return (react_1["default"].createElement("div", { key: id, className: "shadow  max-w-md  rounded" },
        react_1["default"].createElement("img", { src: imageUrl }),
        react_1["default"].createElement("div", { className: "p-5 flex flex-col space-y-2" },
            react_1["default"].createElement("p", { className: "text-sm text-blue-500" }, category),
            react_1["default"].createElement("p", { className: "text-lg font-medium" }, title),
            react_1["default"].createElement("p", { className: "text-gray-600" }, description),
            react_1["default"].createElement("a", { href: url, className: "flex hover:text-blue-500" },
                url.replace(/(^\w+:|^)\/\//, ''),
                react_1["default"].createElement("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                    react_1["default"].createElement("path", { d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" }),
                    react_1["default"].createElement("path", { d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" }))))));
};
