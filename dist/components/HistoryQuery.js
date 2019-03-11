'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Copyright (c) Facebook, Inc. and its affiliates.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var HistoryQuery = (function(_React$Component) {
  _inherits(HistoryQuery, _React$Component);

  function HistoryQuery(props) {
    _classCallCheck(this, HistoryQuery);

    var _this = _possibleConstructorReturn(
      this,
      (HistoryQuery.__proto__ || Object.getPrototypeOf(HistoryQuery))
        .call(this, props),
    );

    _this.editField = null;

    _this.state = {
      showButtons: false,
      editable: false,
    };
    return _this;
  }

  _createClass(HistoryQuery, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var editStyles = {
          display: this.state.showButtons ? '' : 'none',
          marginLeft: '10px',
        };
        var starStyles = {
          display: this.props.favorite || this.state.showButtons ? '' : 'none',
          marginLeft: '10px',
        };
        var displayName =
          this.props.label ||
          this.props.operationName ||
          this.props.query
            .split('\n')
            .filter(function(line) {
              return line.indexOf('#') !== 0;
            })
            .join('');
        var starIcon = this.props.favorite ? '\u2605' : '\u2606';
        return _react2.default.createElement(
          'p',
          {
            className: this.state.editable ? 'editable' : undefined,
            onClick: this.handleClick.bind(this),
            onMouseEnter: this.handleMouseEnter.bind(this),
            onMouseLeave: this.handleMouseLeave.bind(this),
          },
          this.state.editable
            ? _react2.default.createElement('input', {
                type: 'text',
                defaultValue: this.props.label,
                ref: function ref(c) {
                  return (_this2.editField = c);
                },
                onBlur: this.handleFieldBlur.bind(this),
                onKeyDown: this.handleFieldKeyDown.bind(this),
                placeholder: 'Type a label',
              })
            : _react2.default.createElement(
                'span',
                { className: 'history-label' },
                displayName,
              ),
          _react2.default.createElement(
            'span',
            { onClick: this.handleEditClick.bind(this), style: editStyles },
            '\u270E',
          ),
          _react2.default.createElement(
            'span',
            { onClick: this.handleStarClick.bind(this), style: starStyles },
            starIcon,
          ),
        );
      },
    },
    {
      key: 'handleMouseEnter',
      value: function handleMouseEnter() {
        this.setState({ showButtons: true });
      },
    },
    {
      key: 'handleMouseLeave',
      value: function handleMouseLeave() {
        this.setState({ showButtons: false });
      },
    },
    {
      key: 'handleClick',
      value: function handleClick() {
        this.props.onSelect(
          this.props.query,
          this.props.variables,
          this.props.operationName,
          this.props.label,
        );
      },
    },
    {
      key: 'handleStarClick',
      value: function handleStarClick(e) {
        e.stopPropagation();
        this.props.handleToggleFavorite(
          this.props.query,
          this.props.variables,
          this.props.operationName,
          this.props.label,
          this.props.favorite,
        );
      },
    },
    {
      key: 'handleFieldBlur',
      value: function handleFieldBlur(e) {
        e.stopPropagation();
        this.setState({ editable: false });
        this.props.handleEditLabel(
          this.props.query,
          this.props.variables,
          this.props.operationName,
          e.target.value,
          this.props.favorite,
        );
      },
    },
    {
      key: 'handleFieldKeyDown',
      value: function handleFieldKeyDown(e) {
        if (e.keyCode === 13) {
          e.stopPropagation();
          this.setState({ editable: false });
          this.props.handleEditLabel(
            this.props.query,
            this.props.variables,
            this.props.operationName,
            e.target.value,
            this.props.favorite,
          );
        }
      },
    },
    {
      key: 'handleEditClick',
      value: function handleEditClick(e) {
        var _this3 = this;

        e.stopPropagation();
        this.setState({ editable: true }, function() {
          if (_this3.editField) {
            _this3.editField.focus();
          }
        });
      },
    },
  ]);

  return HistoryQuery;
})(_react2.default.Component);

HistoryQuery.propTypes = {
  favorite: _propTypes2.default.bool,
  favoriteSize: _propTypes2.default.number,
  handleEditLabel: _propTypes2.default.func,
  handleToggleFavorite: _propTypes2.default.func,
  operationName: _propTypes2.default.string,
  onSelect: _propTypes2.default.func,
  query: _propTypes2.default.string,
  variables: _propTypes2.default.string,
  label: _propTypes2.default.string,
};
exports.default = HistoryQuery;
