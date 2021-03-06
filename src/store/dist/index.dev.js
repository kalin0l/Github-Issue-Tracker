"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _IssueSlice = _interopRequireDefault(require("./Issue-slice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    issues: _IssueSlice["default"].reducer
  }
});
var _default = store;
exports["default"] = _default;