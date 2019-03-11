'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.normalizeWhitespace = normalizeWhitespace;
/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

// Unicode whitespace characters that break the interface.
var invalidCharacters = (exports.invalidCharacters = Array.from(
  { length: 11 },
  function(x, i) {
    // \u2000 -> \u200a
    return String.fromCharCode(0x2000 + i);
  },
).concat(['\u2028', '\u2029', '\u202F']));

var sanitizeRegex = new RegExp('[' + invalidCharacters.join('') + ']', 'g');

function normalizeWhitespace(line) {
  return line.replace(sanitizeRegex, ' ');
}
