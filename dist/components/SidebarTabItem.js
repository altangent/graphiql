'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.SidebarTabItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * ToolbarButton
 *
 * A button to use within the Toolbar.
 */
/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

var SidebarTabItem = (exports.SidebarTabItem = function SidebarTabItem(_ref) {
  var title = _ref.title,
    children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: 'tab-item', title: title },
    children,
  );
});

SidebarTabItem.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.object,
};
