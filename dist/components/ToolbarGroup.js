'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ToolbarGroup = ToolbarGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * ToolbarGroup
 *
 * A group of associated controls.
 */
function ToolbarGroup(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: 'toolbar-button-group' },
    children,
  );
} /**
   *  Copyright (c) Facebook, Inc. and its affiliates.
   *
   *  This source code is licensed under the MIT license found in the
   *  LICENSE file in the root directory of this source tree.
   */
