'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.mergeAst = mergeAst;

var _kinds = require('graphql/language/kinds');

function resolveDefinition(fragments, obj) {
  var definition = obj;
  if (definition.kind === _kinds.Kind.FRAGMENT_SPREAD) {
    definition = fragments[definition.name.value];
  }

  if (definition.selectionSet) {
    definition.selectionSet.selections = definition.selectionSet.selections
      .filter(function(selection, idx, self) {
        return (
          selection.kind !== _kinds.Kind.FRAGMENT_SPREAD ||
          idx ===
            self.findIndex(function(_selection) {
              return (
                _selection.kind === _kinds.Kind.FRAGMENT_SPREAD &&
                selection.name.value === _selection.name.value
              );
            })
        );
      })
      .map(function(selection) {
        return resolveDefinition(fragments, selection);
      });
  }

  return definition;
} /**
   *  Copyright (c) Facebook, Inc. and its affiliates.
   *
   *  This source code is licensed under the MIT license found in the
   *  LICENSE file in the root directory of this source tree.
   */
function mergeAst(queryAst) {
  var fragments = {};
  queryAst.definitions
    .filter(function(elem) {
      return elem.kind === _kinds.Kind.FRAGMENT_DEFINITION;
    })
    .forEach(function(frag) {
      var copyFragment = Object.assign({}, frag);
      copyFragment.kind = _kinds.Kind.INLINE_FRAGMENT;
      fragments[frag.name.value] = copyFragment;
    });

  var copyAst = Object.assign({}, queryAst);
  copyAst.definitions = queryAst.definitions
    .filter(function(elem) {
      return elem.kind !== _kinds.Kind.FRAGMENT_DEFINITION;
    })
    .map(function(op) {
      return resolveDefinition(fragments, op);
    });

  return copyAst;
}
